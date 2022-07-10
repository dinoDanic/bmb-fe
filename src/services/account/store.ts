import { createSlice } from '@reduxjs/toolkit'
import { meEssentialReducer } from './reducers/meEssentialReducer'
import { AccountInitial } from './types'

const initialState: AccountInitial = {
  account: {
    id: '',
  },
  loading: 'idle',
  error: null,
}

export const UserSlice = createSlice({
  initialState,
  name: 'user',
  reducers: {},
  extraReducers: (builder) => {
    meEssentialReducer(builder)
  },
})

export default UserSlice.reducer
