import { css } from '@emotion/react'
import styled from '@emotion/styled'
import {
  BorderMods,
  Box,
  ColorMods,
  Container,
  CornerMods,
  CursorMods,
  FlexMods,
  Opacity,
  PaddingMods,
  SpaceProperties,
  TransitionMods,
} from '@kodiui/kodiui'
import React, { FC } from 'react'
import { theme } from 'styles'

interface Props {
  name: string
  emoji?: () => JSX.Element
  active: boolean
}

export const Tab: FC<Props> = ({ name, active, emoji }) => {
  return (
    <Container>
      <StyledBox
        modifiers={[
          FlexMods.Parent({
            direction: 'row',
            alignItems: 'center',
            gap: SpaceProperties.Small,
          }),
        ]}
        space={'smaller'}
        active={active}
      >
        {emoji && <h3>emoji()</h3>}
        <h4> {name}</h4>
      </StyledBox>
    </Container>
  )
}

const activeStyle = css`
  ${Opacity(1)}
  ${ColorMods({ background: theme.color.primaryDark })}
  ${BorderMods({ border: 'thin', borderColor: theme.color.primary })}
`

const StyledBox = styled(Box)<{ active: boolean }>`
  ${Opacity(0.3)}
  ${PaddingMods.Sides(SpaceProperties.Small)}
  ${BorderMods({ border: 'thin', borderColor: 'transparent' })}
  ${CornerMods.Round}
  ${CursorMods.Pointer}
  ${TransitionMods.Base}
  ${({ active }) => active && activeStyle}
`
