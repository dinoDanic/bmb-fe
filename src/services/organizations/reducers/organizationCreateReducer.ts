import { ActionReducerMapBuilder } from '@reduxjs/toolkit'
import { meEssentialAction } from 'services/account'
import { organizationCreateAction } from '../actions/organizationCreateAction'
import { OrganizationsInitial } from '../types'

export const organizationCreateReducer = (
  builder: ActionReducerMapBuilder<OrganizationsInitial>
) => {
  builder.addCase(organizationCreateAction.fulfilled, (state, action) => {
    if (action.payload) {
      state.activeOrganizations = [...state.activeOrganizations, action.payload]
      if (typeof action.payload.id === 'string') {
        state.activeOrganizationId = action.payload.id
      }
    }
  })
}
