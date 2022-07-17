import { configureStore } from '@reduxjs/toolkit'
import AccountReducer from 'services/account/store'
import OrganizationsReducer from 'services/organizations/store'
import CustomersReducer from 'services/customers/store'

export const store = configureStore({
  reducer: {
    account: AccountReducer,
    organizations: OrganizationsReducer,
    customers: CustomersReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
