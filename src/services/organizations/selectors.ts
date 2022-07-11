import { RootState } from 'redux/store'

export const selectActiveOrganizations = (state: RootState) =>
  state.organizations.activeOrganizations

export const selectActiveOrganization = (state: RootState) =>
  state.organizations.activeOrganizations.find(
    (organization) =>
      organization.id === state.organizations.activeOrganizationId
  )
