import { Office } from 'generated/graphql'
import { ErrorState, LoadingState } from 'types'

export interface OfficesInitial {
  offices: Office[]
  loading: LoadingState
  error: ErrorState
}
