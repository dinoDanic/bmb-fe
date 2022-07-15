import { RootState } from 'redux/store'

export const selectOfficesLoading = (state: RootState) => state.offices.loading

export const selectOffices = (state: RootState) => state.offices.offices
