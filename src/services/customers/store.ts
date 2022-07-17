import { createSlice } from '@reduxjs/toolkit'
import { customerCreateReducer } from './reducers/customerCreateReducer'
import { getCustomerByIdReducer } from './reducers/getCustomerByIdReducer'
import { getCustomersByOrganizationIdReducer } from './reducers/getCustomersByOrganizationIdReducer'
import { officeCreateReducer } from './reducers/officeCreateReducer'
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
    getCustomerByIdReducer(builder)
    officeCreateReducer(builder)
  },
})

// export const {} = CustomersSlice.actions

export default CustomersSlice.reducer
