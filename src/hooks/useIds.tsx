import React from 'react'
import { selectActiveOrganizationId } from 'services/organizations'
import { useAppSelector } from './redux-hooks'

export const useIds = () => {
  const activeOrganizationId = useAppSelector(selectActiveOrganizationId)
  return { activeOrganizationId }
}
