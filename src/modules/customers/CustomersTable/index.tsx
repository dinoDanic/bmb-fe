import { Table } from 'components/elements'
import { routes } from 'modules/routes'
import Link from 'next/link'
import React from 'react'
import { useCustomers } from 'services/customers'

export const CustomersTable = () => {
  const { customers } = useCustomers()

  return (
    <>
      <Table
        header={['ID', 'Ime', 'Adresa', 'OIB']}
        row={customers.map((customer, i) => {
          return {
            data: [
              customer?.id,
              <Link key={i} href={`${routes.customers}/${customer?.id}`}>
                {customer?.name}
              </Link>,
              customer?.address,
              customer?.oib,
            ],
          }
        })}
      />
    </>
  )
}
