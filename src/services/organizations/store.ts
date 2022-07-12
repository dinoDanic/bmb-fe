import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { organizationCreateReducer } from './reducers/organizationCreateReducer'
import { organizationGetActiveFromMeEssentialReducer } from './reducers/organizationsGetActiveReducer'
import { OrganizationsInitial } from './types'

const initialState: OrganizationsInitial = {
  activeOrganizations: [],
  activeOrganizationId: '',
}

export const UserSlice = createSlice({
  initialState,
  name: 'organizations',
  reducers: {
    setActiveOrganizationId: (state, action: PayloadAction<string>) => {
      state.activeOrganizationId = action.payload
    },
  },
  extraReducers: (builder) => {
    organizationGetActiveFromMeEssentialReducer(builder)
    organizationCreateReducer(builder)
  },
})

export const { setActiveOrganizationId } = UserSlice.actions

export default UserSlice.reducer
