import { useAppDispatch, useAppSelector, useIds } from 'hooks'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { getCustomerByIdAction, selectCustomerById } from 'services/customers'

const CustomerIdPage = () => {
  const dispatch = useAppDispatch()
  const { customerId, activeOrganizationId } = useIds()
  const customer = useAppSelector(selectCustomerById(customerId))

  console.log(activeOrganizationId)

  useEffect(() => {
    if (customer?.id) return
    if (!customerId || !activeOrganizationId) return
    dispatch(
      getCustomerByIdAction({
        customerId,
        organizationId: activeOrganizationId,
      })
    )
  }, [customer, customerId, activeOrganizationId])

  return (
    <>
      <h2>{customer?.name}</h2>
    </>
  )
}

export default CustomerIdPage
