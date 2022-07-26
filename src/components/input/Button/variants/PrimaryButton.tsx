import styled from '@emotion/styled'
import { ifHovered } from '@kodiui/kodiui'
import React, { FC } from 'react'
import { BaseButton, ButtonProps } from '../BaseButton'

export const PrimaryButton: FC<ButtonProps> = ({ children, ...props }) => {
  return <Button {...props}>{children}</Button>
}

const Button = styled(BaseButton)`
  ${ifHovered(`transform: scale(0.98)`)}
  &:active {
    transform: scale(0.96);
  }
`
