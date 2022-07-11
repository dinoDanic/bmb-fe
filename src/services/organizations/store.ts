import { createSlice } from '@reduxjs/toolkit'
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
  reducers: {},
  extraReducers: (builder) => {
    organizationGetActiveFromMeEssentialReducer(builder)
    organizationCreateReducer(builder)
  },
})

export default UserSlice.reducer
