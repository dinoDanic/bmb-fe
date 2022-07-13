import { useRouter } from 'next/router'
import React from 'react'
import { selectActiveOrganizationId } from 'services/organizations'
import { useAppSelector } from './redux-hooks'

export const useIds = () => {
  const { query } = useRouter()
  const activeOrganizationId = useAppSelector(selectActiveOrganizationId)
  const customerIdQuery = query['customer_id']
  const customerId = typeof customerIdQuery === 'string' && customerIdQuery

  return { activeOrganizationId, customerId }
}
