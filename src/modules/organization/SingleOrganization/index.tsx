import styled from '@emotion/styled'
import {
  Container,
  CursorMods,
  ifHovered,
  SizeMods,
  Stack,
  TransitionMods,
} from '@kodiui/kodiui'
import { BaseBox } from 'components/elements'
import { Organization } from 'generated/graphql'
import { useAppDispatch } from 'hooks'
import { routes } from 'modules/routes'
import { useRouter } from 'next/router'
import React, { FC } from 'react'
import { setActiveOrganizationId } from 'services/organizations'

interface Props {
  organization: Organization
}

export const SingleOrganization: FC<Props> = ({ organization }) => {
  const dispatch = useAppDispatch()
  const router = useRouter()
  const setActiveOrganization = () => {
    if (typeof window === 'undefined') return
    if (!organization.id) {
      alert('Organizacija nema ID')
      return
    }
    localStorage.setItem('activeOrganizationId', organization.id)
    dispatch(setActiveOrganizationId(organization.id))
    router.push(routes.dashboard)
  }
  return (
    <StyledContainer onClick={setActiveOrganization}>
      <BaseBox>
        <Stack>
          <h3>{organization.name}</h3>
          <p>adresa: {organization.address}</p>
          <p>oib: {organization.oib}</p>
        </Stack>
      </BaseBox>
    </StyledContainer>
  )
}

const StyledContainer = styled(Container)`
  ${SizeMods({ maxWidth: '400px' })}
  ${CursorMods.Pointer}
  ${TransitionMods.Base}
  ${ifHovered([`transform: scale(1.05)`])}
`
