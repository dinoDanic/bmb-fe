import { routes } from 'modules/routes'
import { MenuLink } from 'types'
import { BoxIcon, BuildingIcon, HomeIcon, InboxesIcon } from 'assets/svg'

export const menuLinks: MenuLink[] = [
  { id: 0, name: 'Pocetna', link: routes.dashboard, icon: HomeIcon },
  { id: 1, name: 'Narudzbe', link: routes.dashboard, icon: InboxesIcon },
  { id: 3, name: 'Proizvodnja', link: routes.dashboard, icon: BoxIcon },
  { id: 4, name: 'Poduzece', link: routes.dashboard, icon: BuildingIcon },
]
