import { createSlice } from '@reduxjs/toolkit'
import { createSessionReducer } from './reducers/createSessionReducer'
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
    createSessionReducer(builder)
    meEssentialReducer(builder)
  },
})

export default UserSlice.reducer
