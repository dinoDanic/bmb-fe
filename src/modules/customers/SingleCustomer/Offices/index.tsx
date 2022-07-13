import { Office } from 'generated/graphql'
import React from 'react'

export const Offices = ({ offices }: { offices: Office[] }) => {
  return (
    <>
      {offices.map((office) => {
        return <>{office.name}</>
      })}
    </>
  )
}
