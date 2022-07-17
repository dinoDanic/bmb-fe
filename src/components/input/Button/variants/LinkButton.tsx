import styled from '@emotion/styled'
import { BorderMods, ColorMods, ifHovered, TextMods } from '@kodiui/kodiui'
import React, { FC } from 'react'
import { BaseButton, ButtonProps } from '../BaseButton'

export const LinkButton: FC<ButtonProps> = ({ children, ...props }) => {
  return <Button {...props}>{children}</Button>
}

const Button = styled(BaseButton)`
  ${ColorMods({ background: 'white', color: 'black' })}
  ${BorderMods.None}
  ${ifHovered([
    TextMods({ textDecoration: 'underline' }),
    `transform: scale(0.98)`,
  ])}
  &:active {
    transform: scale(0.96);
  }
`
