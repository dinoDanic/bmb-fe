import { Container, HSpace, SizeMods, Stack } from '@kodiui/kodiui'
import { Input, PrimaryButton } from 'components'
import { BaseBox } from 'components/elements'
import React from 'react'

const OrganizationJoin = () => {
  return (
    <Container modifiers={[SizeMods({ maxWidth: '600px' })]}>
      <h1>Priduzi se organizaiji</h1>
      <HSpace />
      <BaseBox>
        <Stack>
          <h4>Unesi token</h4>
          <Input label="Token" placeholder="Token.." />
          <PrimaryButton>Enter</PrimaryButton>
        </Stack>
      </BaseBox>
    </Container>
  )
}

export default OrganizationJoin
