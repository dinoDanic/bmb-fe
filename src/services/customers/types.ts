import { Customer, Organization, User } from 'generated/graphql'
import { ErrorState, LoadingState } from 'types'

export interface CustomersInitial {
  customers: Customer[]
  loading: LoadingState
  error: ErrorState
}
