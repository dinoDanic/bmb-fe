import { css } from '@emotion/react'
import styled from '@emotion/styled'
import {
  BorderMods,
  ColorMods,
  CornerMods,
  CursorMods,
  FlexMods,
  ifDisabled,
  Opacity,
  PaddingMods,
  SizeMods,
  SpaceProperties,
  TextMods,
  TransitionMods,
} from '@kodiui/kodiui'
import { LoaderDots } from 'assets/svg/icons/LoaderDots'
import React, { ComponentPropsWithoutRef, FC, ReactNode } from 'react'
import { theme } from 'styles'
import { LoadingState } from 'types'

export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  children: ReactNode
  small?: boolean
  loading?: LoadingState
}

interface StyledButtonProps {
  loading?: LoadingState
  small: boolean
}

export const BaseButton: FC<ButtonProps> = ({
  children,
  disabled,
  loading,
  small = false,
  ...props
}) => {
  return (
    <StyledButton
      small={small}
      loading={loading}
      disabled={disabled}
      {...props}
    >
      {loading === 'pending' ? <LoaderDots /> : children}
    </StyledButton>
  )
}

const NormalStyle = css`
  ${CursorMods.Pointer}
  ${SizeMods({ height: '40px', maxWidth: 'fit-content', minWidth: '120px' })}
  ${TransitionMods.Base}
  ${CornerMods.Round}
  ${FlexMods.Parent({ alignItems: 'center', justifyContent: 'center' })}
  ${BorderMods({ border: 'thin', borderColor: theme.color.primary })}
  ${TextMods({ fontSize: '1rem' })}
  ${ColorMods({
    background: theme.color.primary,
    color: 'white',
  })}
  ${PaddingMods.Sides(SpaceProperties.Base)}
`

const LoadingStyle = css``
const smallStyle = css`
  ${SizeMods({ height: '26px', maxWidth: 'fit-content', minWidth: '50px' })}
  ${TextMods({ fontSize: '0.7rem' })}
`

const StyledButton = styled.button<StyledButtonProps>`
  ${NormalStyle};
  ${ifDisabled([Opacity(0.5), CursorMods({ cursor: 'not-allowed' })])};
  ${({ loading }) => loading === 'pending' && LoadingStyle}
  ${({ small }) => small && smallStyle}
`
