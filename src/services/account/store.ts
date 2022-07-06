import { createSlice } from '@reduxjs/toolkit'
import { createSessionReducer } from './reducers/createSessionReducer'
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
    createSessionReducer(builder)
  },
})

export default UserSlice.reducer
