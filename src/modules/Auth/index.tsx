import { useAppDispatch, useAppSelector, useControls } from 'hooks'
import { routes } from 'modules/routes'
import { useRouter } from 'next/router'
import React, { FC, ReactElement, useEffect } from 'react'
import { meEssentialAction, selectAccount } from 'services/account'

interface Props {
  props: {
    protected: boolean
  }
  children: ReactElement
}

const DISABLE_CHECK_USER = [routes.login]

export const Auth: FC<Props> = ({ props, children }) => {
  const router = useRouter()
  const account = useAppSelector(selectAccount)
  const { logout } = useControls()

  const dispatch = useAppDispatch()

  useEffect(() => {
    if (!DISABLE_CHECK_USER.includes(router.asPath)) {
      dispatch(meEssentialAction())
        .unwrap()
        .catch(() => logout())
    }
  }, [dispatch, router.asPath])

  if (props.protected && !account.id) {
    return <>loading...</>
  }

  return children
}
