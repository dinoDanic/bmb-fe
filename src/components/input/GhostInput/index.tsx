import styled from '@emotion/styled'
import {
  BorderMods,
  ColorMods,
  CornerMods,
  ifFocused,
  ifHovered,
} from '@kodiui/kodiui'
import React, { ComponentPropsWithoutRef, FC } from 'react'
import { theme } from 'styles'
import { Input } from '../Input'

interface Props extends ComponentPropsWithoutRef<'input'> {
  label?: string
}

export const GhostInput: FC<Props> = ({ ...props }) => {
  return <StyledInput {...props} />
}

const StyledInput = styled(Input)`
  ${BorderMods({ border: 'thin', borderColor: 'transparent' })}
  ${ColorMods({ background: 'transparent' })}
  ${CornerMods.Round}
  ${ifHovered([
    BorderMods({ border: 'thin', borderColor: theme.color.primaryLight }),
  ])}
  ${ifFocused([
    BorderMods({ border: 'thin', borderColor: theme.color.primary }),
  ])}
`
