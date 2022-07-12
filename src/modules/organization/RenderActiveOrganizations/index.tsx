import { Switcher } from '@kodiui/kodiui'
import { useAppSelector } from 'hooks'
import React from 'react'
import { selectActiveOrganizations } from 'services/organizations'
import { SingleOrganization } from '../SingleOrganization'

export const RenderActiveOrganizations = () => {
  const activeOrganizations = useAppSelector(selectActiveOrganizations)
  return (
    <Switcher>
      {activeOrganizations.map((organization) => {
        return <SingleOrganization organization={organization} />
      })}
    </Switcher>
  )
}
