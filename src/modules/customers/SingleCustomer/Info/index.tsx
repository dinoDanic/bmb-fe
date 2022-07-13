import { Stack } from '@kodiui/kodiui'
import { GhostInput } from 'components/input/GhostInput'
import { Customer } from 'generated/graphql'
import React, { FC, useEffect, useState } from 'react'

interface Props {
  customer: Customer
}

export const Info: FC<Props> = ({ customer }) => {
  const [info, setInfo] = useState<Customer>({})

  const change = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setInfo({
      ...info,
      [name]: value,
    })
  }

  useEffect(() => {
    setInfo(customer)
  }, [customer])

  return (
    <Stack>
      <GhostInput
        value={info?.name}
        name="name"
        label="Naziv:"
        onChange={(e) => change(e)}
      />
      <GhostInput
        value={info?.address}
        name="address"
        label="Adresa:"
        onChange={(e) => change(e)}
      />
      <GhostInput
        value={info?.oib}
        name="oib"
        label="oib:"
        onChange={(e) => change(e)}
      />
    </Stack>
  )
}
