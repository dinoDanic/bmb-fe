import { Organization, User } from 'generated/graphql'
import { ErrorState, LoadingState } from 'types'

export interface OrganizationsInitial {
  activeOrganizations: Organization[]
  activeOrganizationId: string
}
