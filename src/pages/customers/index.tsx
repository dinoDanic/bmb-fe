import { BaseBox } from 'components/elements'
import { CustomersTable } from 'modules/customers'
import React from 'react'

const CustomersPage = () => {
  return (
    <>
      <h2>Kupci</h2>
      <BaseBox light>hi</BaseBox>
      <CustomersTable />
    </>
  )
}

export default CustomersPage
