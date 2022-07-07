import { routes } from 'modules/routes'
import { useRouter } from 'next/router'

export const useControls = () => {
  const router = useRouter()

  const logout = () => {
    if (typeof window !== 'undefined') {
      window.localStorage.clear()
      router.push(routes.login)
    }
  }

  return { logout }
}
