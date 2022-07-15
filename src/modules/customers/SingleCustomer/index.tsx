import { Switcher } from '@kodiui/kodiui'
import { Tabs } from 'components/elements'
import { useAppDispatch, useAppSelector, useIds } from 'hooks'
import React, { useEffect } from 'react'
import { getCustomerByIdAction, selectCustomerById } from 'services/customers'
import { Info } from './Info'
import { Offices } from './Offices'

export const SingleCustomer = () => {
  const dispatch = useAppDispatch()
  const { customerId, activeOrganizationId } = useIds()
  const customer = useAppSelector(selectCustomerById(customerId))

  useEffect(() => {
    if (customer?.id) return
    if (!customerId || !activeOrganizationId) return
    dispatch(
      getCustomerByIdAction({
        customerId,
        organizationId: activeOrganizationId,
      })
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [customer, customerId, activeOrganizationId])
  return (
    <>
      <h2> {customer?.name}</h2>
      <Switcher>
        <Tabs>
          <Tabs.Tab index={0} name="Informacije">
            <Info customer={customer} />
          </Tabs.Tab>
          <Tabs.Tab index={1} name="Poslovnice">
            <Offices offices={customer?.offices} />
          </Tabs.Tab>
          <Tabs.Tab index={2} name="Narudzbe">
            {customer?.name}
          </Tabs.Tab>
        </Tabs>
        <>haha</>
      </Switcher>
    </>
  )
}
