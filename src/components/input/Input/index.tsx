import { css } from '@emotion/react'
import styled from '@emotion/styled'
import {
  BorderMods,
  Container,
  CornerMods,
  FlexMods,
  PaddingMods,
  SizeMods,
  SpaceProperties,
  Stack,
  TextMods,
  TransitionMods,
} from '@kodiui/kodiui'
import React, { ComponentPropsWithoutRef, FC } from 'react'
import { theme } from 'styles'

interface Props extends ComponentPropsWithoutRef<'input'> {
  label?: string
}

export const Input: FC<Props> = ({ label, ...props }) => {
  const setLabel = label ? <>{label}</> : null
  return (
    <Container modifiers={FlexMods.Parent({ direction: 'column' })}>
      <Stack space={'smaller'}>
        {setLabel}
        <StyledInput {...props} />
      </Stack>
    </Container>
  )
}

export const baseInputStyle = css`
  ${BorderMods({ border: 'thin', borderColor: theme.color.primary })}
  ${SizeMods.FullWidth}
  ${CornerMods.Round}
  ${PaddingMods.All(SpaceProperties.Small)}
  ${TransitionMods.Base}
  ${TextMods({ fontSize: '1rem' })}
  &:focus {
    outline: none;
    ${BorderMods({ border: 'thin', borderColor: theme.color.primary })};
  }
`

const StyledInput = styled.input`
  ${baseInputStyle}
`
