import { routes } from 'modules/routes'
import { MenuLink } from 'types'
import {
  BoxIcon,
  BuildingIcon,
  HomeIcon,
  InboxesIcon,
  MoneyIcon,
} from 'assets/svg'

export const menuLinks: MenuLink[] = [
  { id: 0, name: 'Pocetna', link: routes.dashboard, icon: HomeIcon },
  { id: 1, name: 'Narudzbe', link: routes.orders, icon: InboxesIcon },
  { id: 3, name: 'Proizvodnja', link: routes.factory, icon: BoxIcon },
  { id: 4, name: 'Poduzece', link: routes.organization, icon: BuildingIcon },
  { id: 5, name: 'Kupci', link: routes.customers, icon: MoneyIcon },
]
