import { Stack } from '@kodiui/kodiui'
import { CreateCustomerButton, CustomersTable } from 'modules/customers'
import React from 'react'

const CustomersPage = () => {
  return (
    <Stack>
      <h2>Kupci</h2>
      <CustomersTable />
      <CreateCustomerButton />
    </Stack>
  )
}

export default CustomersPage
