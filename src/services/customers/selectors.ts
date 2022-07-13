import { RootState } from 'redux/store'

export const selectCustomers = (state: RootState) => state.customers.customers

export const selectCustomersLoading = (state: RootState) =>
  state.customers.loading

export const selectCustomerById = (id: string) => (state: RootState) =>
  state.customers.customers.find((c) => c.id === id)
