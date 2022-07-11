import { ActionReducerMapBuilder } from '@reduxjs/toolkit'
import { meEssentialAction } from 'services/account'
import { OrganizationsInitial } from '../types'

export const organizationGetActiveFromMeEssentialReducer = (
  builder: ActionReducerMapBuilder<OrganizationsInitial>
) => {
  builder.addCase(meEssentialAction.fulfilled, (state, action) => {
    if (action.payload.organizations) {
      state.activeOrganizations = action.payload.organizations
    }
  })
}
