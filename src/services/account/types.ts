import { User } from 'generated/graphql'
import { ErrorState, LoadingState } from 'types'

export interface AccountInitial {
  account: User
  loading: LoadingState
  error: ErrorState
}
