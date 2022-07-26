export type LoadingState = 'idle' | 'pending' | 'succeeded' | 'failed'

export type ErrorState = null | string | undefined

export interface MenuLink {
  id: number
  name: string
  color?: string
  link: string
  icon?: () => JSX.Element
}
export interface TableData {
  header: TableValue[]
  row: Row[]
}

export type Row = {
  data: TableValue[]
  expandable?: {
    header: TableValue[]
    data: TableValue[][]
  }
}

export type TableValue = string | JSX.Element | number | boolean
