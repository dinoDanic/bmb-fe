import { createSlice } from '@reduxjs/toolkit'
import { officesCreateReducer } from './reducer/officeCreateReducer'
import { OfficesInitial } from './types'

const initialState: OfficesInitial = {
  offices: [],
  loading: 'idle',
  error: null,
}

export const OfficesSlice = createSlice({
  initialState,
  name: 'offices',
  reducers: {},
  extraReducers: (builder) => {
    officesCreateReducer(builder)
  },
})

// export const {} = OfficesSlice.actions

export default OfficesSlice.reducer
