import { css } from '@emotion/react'
import styled from '@emotion/styled'
import {
  BorderMods,
  ColorMods,
  CursorMods,
  ifHovered,
  PaddingMods,
  TransitionMods,
} from '@kodiui/kodiui'
import React, { ComponentPropsWithoutRef, FC, ReactNode } from 'react'
import { theme } from 'styles'

interface Props extends ComponentPropsWithoutRef<'button'> {
  children: ReactNode
  active?: boolean
}

export const LabelButton: FC<Props> = ({
  children,
  active = false,
  ...props
}) => {
  return (
    <StyledButton active={active} {...props}>
      <>{children}</>
    </StyledButton>
  )
}

const activeStyle = css`
  ${ColorMods({ background: theme.color.primary })}
  outline: 3px solid ${theme.color.primary}
`

const StyledButton = styled.button<{ active: boolean }>`
  ${BorderMods.None}
  ${CursorMods.Pointer}
  ${ColorMods({ color: theme.color.primary, background: 'transparent' })}
  ${PaddingMods.Ends(0)}
  ${PaddingMods.All(0)}
  ${TransitionMods.Base}
  outline:3px solid transparent;
  ${ifHovered(activeStyle)}
  ${({ active }) => active && activeStyle}
  border-radius: 4px;
`
