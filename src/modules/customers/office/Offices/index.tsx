import { Stack } from '@kodiui/kodiui'
import { Office } from 'generated/graphql'
import React, { FC } from 'react'
import { OfficesCreateButton } from '../OfficesCreateButton/indes'
import { OfficesTable } from '../OfficesTable'

interface Props {
  offices: Office[]
}

export const Offices: FC<Props> = ({ offices }) => {
  return (
    <Stack>
      <OfficesTable offices={offices} />
      <OfficesCreateButton />
    </Stack>
  )
}
