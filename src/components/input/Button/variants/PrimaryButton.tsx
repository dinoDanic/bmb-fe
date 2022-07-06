import styled from '@emotion/styled'
import { BorderMods, ColorMods, ifActive, ifHovered } from '@kodiui/kodiui'
import React, { FC } from 'react'
import { theme } from 'styles'
import { BaseButton, ButtonProps } from '../BaseButton'

export const PrimaryButton: FC<ButtonProps> = ({ children, ...props }) => {
  return <Button {...props}>{children}</Button>
}

const Button = styled(BaseButton)`
  ${ColorMods({
    background: theme.color.primary,
    color: theme.color.primaryDark,
  })}
  ${BorderMods({ border: 'thin', borderColor: theme.color.primaryDark })}
  ${ifHovered(`transform: scale(0.98)`)}
  &:active {
    transform: scale(0.96);
  }
`
