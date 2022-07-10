import { routes } from 'modules/routes'
import { MenuLink } from 'types'
import { FcHome } from 'react-icons/fc'

export const menuLinks: MenuLink[] = [
  { id: 0, name: 'Pocetna', link: routes.dashboard },
  { id: 1, name: 'Narudzbe', link: routes.dashboard },
  { id: 3, name: 'Proizvodnja', link: routes.dashboard },
  { id: 4, name: 'Poduzece', link: routes.dashboard },
]
