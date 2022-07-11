import { configureStore } from '@reduxjs/toolkit'
import AccountReducer from 'services/account/store'
import OrganizationsReducer from 'services/organizations/store'

export const store = configureStore({
  reducer: {
    account: AccountReducer,
    organizations: OrganizationsReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
