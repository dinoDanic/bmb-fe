import { IconType } from 'react-icons'

export type LoadingState = 'idle' | 'pending' | 'succeeded' | 'failed'

export type ErrorState = null | string | undefined

export interface MenuLink {
  id: number
  name: string
  color?: string
  link: string
  icon?: IconType
}
