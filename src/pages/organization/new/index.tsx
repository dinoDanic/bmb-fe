import { Center, Container, HSpace, SizeMods } from '@kodiui/kodiui'
import { BaseBox } from 'components/elements'
import { OrganizationCreate } from 'modules/organization'
import React from 'react'

const OrganizationNewPage = () => {
  return (
    <Container modifiers={[SizeMods({ maxWidth: '600px' })]}>
      <h1>Kreiraj novu organizaciju</h1>
      <HSpace />
      <BaseBox>
        <OrganizationCreate />
      </BaseBox>
    </Container>
  )
}

export default OrganizationNewPage
