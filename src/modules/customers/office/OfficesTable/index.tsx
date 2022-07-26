import { Table } from 'components/elements'
import { Office } from 'generated/graphql'
import React from 'react'

export const OfficesTable = ({ offices }: { offices: Office[] }) => {
  return (
    <>
      <Table
        header={['id', 'Ime', 'Adresa']}
        row={offices?.map((office) => {
          return { data: [office.id, office.name, office.address] }
        })}
      />
    </>
  )
}
