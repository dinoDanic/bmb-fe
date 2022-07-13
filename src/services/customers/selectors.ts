import { RootState } from 'redux/store'

export const selectCustomers = (state: RootState) => state.customers.customers

export const selectCustomersLoading = (state: RootState) =>
  state.customers.loading
