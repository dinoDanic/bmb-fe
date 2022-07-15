import { Office } from 'generated/graphql'
import { OfficesCreateButton, OfficesTable } from 'modules/offices'
import React from 'react'

export const Offices = ({ offices }: { offices: Office[] }) => {
  return (
    <>
      <OfficesCreateButton />
      <OfficesTable {...offices} />
    </>
  )
}
