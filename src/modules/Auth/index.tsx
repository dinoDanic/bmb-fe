import { useAppDispatch, useAppSelector, useControls } from 'hooks'
import { routes } from 'modules/routes'
import { useRouter } from 'next/router'
import React, { FC, ReactElement, useEffect } from 'react'
import { meEssentialAction, selectAccount } from 'services/account'

interface Props {
  children: ReactElement
}

const DISABLE_CHECK_USER = [routes.login, routes.register]

export const Auth: FC<Props> = ({ children }) => {
  const router = useRouter()
  const account = useAppSelector(selectAccount)
  const { logout } = useControls()

  const dispatch = useAppDispatch()

  useEffect(() => {
    if (!DISABLE_CHECK_USER.includes(router.asPath)) {
      console.log('?')

      dispatch(meEssentialAction())
        .unwrap()
        .catch(() => logout())
    }
  }, [dispatch, router.asPath])

  if (!DISABLE_CHECK_USER && !account.id) {
    return <>loading...</>
  }

  return children
}
