import { CreateCustomerButton, CustomersTable } from 'modules/customers'
import React from 'react'

const CustomersPage = () => {
  return (
    <>
      <h2>Kupci</h2>
      <CustomersTable />
      <CreateCustomerButton />
    </>
  )
}

export default CustomersPage
