import { createSlice } from '@reduxjs/toolkit'
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
  extraReducers: (builder) => {},
})

// export const {} = CustomersSlice.actions

export default CustomersSlice.reducer
