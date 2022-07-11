import { useAppDispatch, useAppSelector, useControls } from 'hooks'
import { routes } from 'modules/routes'
import { useRouter } from 'next/router'
import React, { FC, ReactElement, ReactNode, useEffect } from 'react'
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
      dispatch(meEssentialAction())
        .unwrap()
        .catch(() => logout())
        .then((data) => {
          if (data?.organizations?.length === 0) {
            router.push(routes.organizationNew)
          }
        })
    }
  }, [dispatch, router.asPath])

  if (!DISABLE_CHECK_USER && !account.id) {
    return <>loading...</>
  }

  return children
}
