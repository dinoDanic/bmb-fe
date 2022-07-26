import { useAppDispatch, useAppSelector, useIds } from 'hooks'
import { useEffect } from 'react'
import { getCustomersByOrganizationIdAction } from './actions'
import { selectCustomers } from './selectors'

export const useCustomers = () => {
  const dispatch = useAppDispatch()
  const { activeOrganizationId } = useIds()
  const customers = useAppSelector(selectCustomers)

  useEffect(() => {
    if (!activeOrganizationId) return
    dispatch(
      getCustomersByOrganizationIdAction({
        organizationId: activeOrganizationId,
      })
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeOrganizationId])
  return { customers }
}
