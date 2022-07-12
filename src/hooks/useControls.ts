import { routes } from 'modules/routes'
import { useRouter } from 'next/router'
import { selectActiveOrganization } from 'services/organizations'
import { useAppSelector } from './redux-hooks'

export const useControls = () => {
  const activeOrganization = useAppSelector(selectActiveOrganization)
  const router = useRouter()

  const logout = () => {
    if (typeof window !== 'undefined') {
      window.localStorage.clear()
      router.push(routes.login)
    }
  }

  return { logout, activeOrganization }
}
