import { Account } from 'generated/graphql'
import { ErrorState, LoadingState } from 'types'

export interface AccountInitial {
  account: Account
  loading: LoadingState
  error: ErrorState
}
