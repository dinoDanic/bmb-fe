import { Center, Container, HSpace, SizeMods } from '@kodiui/kodiui'
import { BaseBox } from 'components/elements'
import { OrganizationCreate } from 'modules/organization'
import React from 'react'

const OrganizationNewPage = () => {
  return (
    <Center>
      <Container modifiers={[SizeMods({ width: '400px' })]}>
        <h2>Kreiraj novu organizaciju</h2>
        <HSpace />
        <BaseBox>
          <OrganizationCreate />
        </BaseBox>
      </Container>
    </Center>
  )
}

export default OrganizationNewPage
