import { RootState } from 'redux/store'

export const selectCustomers = (state: RootState) => state.customers.customers
