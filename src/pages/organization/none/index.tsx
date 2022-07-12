import { HSpace } from '@kodiui/kodiui'
import { RenderActiveOrganizations } from 'modules/organization'
import { routes } from 'modules/routes'
import Link from 'next/link'
import React from 'react'

const OrganizationNonePage = () => {
  return (
    <>
      <h1>Nema aktivne organizacije</h1>
      <h4>
        <Link href={routes.organizationJoin}>Pridruzi</Link>, odaberi ili{' '}
        <Link href={routes.organizationNew}>kreiraj novu organizatiju</Link>
      </h4>
      <HSpace />
      <RenderActiveOrganizations />
    </>
  )
}

export default OrganizationNonePage
