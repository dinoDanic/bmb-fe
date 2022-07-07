import { RootState } from 'redux/store'

export const selectAccountLoading = (state: RootState) => state.account.loading

export const selectAccount = (state: RootState) => state.account.account
