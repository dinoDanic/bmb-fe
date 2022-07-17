import { useAppDispatch, useAppSelector, useControls } from 'hooks'
import { routes } from 'modules/routes'
import { useRouter } from 'next/router'
import React, { FC, ReactElement, useEffect, useState } from 'react'
import { meEssentialAction, selectAccount } from 'services/account'
import { setActiveOrganizationId } from 'services/organizations'

interface Props {
  children: ReactElement
}

const DISABLE_CHECK_USER = [routes.login, routes.register]

export const Auth: FC<Props> = ({ children }) => {
  const router = useRouter()
  const account = useAppSelector(selectAccount)
  const [firstTime, setFirstTime] = useState(false)
  const { logout } = useControls()

  const dispatch = useAppDispatch()

  useEffect(() => {
    if (firstTime) return
    if (!DISABLE_CHECK_USER.includes(router.asPath)) {
      dispatch(meEssentialAction())
        .unwrap()
        .then(() => {
          if (typeof window === 'undefined') return
          const activeOrganizationId = localStorage.getItem(
            'activeOrganizationId'
          )
          if (!activeOrganizationId) {
            router.push(routes.organizationNone)
            setFirstTime(true)
            return
          }
          dispatch(setActiveOrganizationId(activeOrganizationId))
          setFirstTime(true)
        })
        .catch(() => logout())
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, router.asPath])

  if (!DISABLE_CHECK_USER && !account.id) {
    return <>loading...</>
  }

  return children
}
