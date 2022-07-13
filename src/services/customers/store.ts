import { createSlice } from '@reduxjs/toolkit'
import { customerCreateReducer } from './reducers/customerCreateReducer'
import { getCustomersByOrganizationIdReducer } from './reducers/getCustomersByOrganizationIdReducer'
import { CustomersInitial } from './types'

const initialState: CustomersInitial = {
  customers: [],
  loading: 'idle',
  error: null,
}

export const CustomersSlice = createSlice({
  initialState,
  name: 'customers',
  reducers: {},
  extraReducers: (builder) => {
    getCustomersByOrganizationIdReducer(builder)
    customerCreateReducer(builder)
  },
})

// export const {} = CustomersSlice.actions

export default CustomersSlice.reducer
