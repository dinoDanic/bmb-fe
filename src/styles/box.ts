import { css } from '@emotion/react'
import {
  BorderMods,
  ColorMods,
  CornerMods,
  CursorMods,
  ifHovered,
  SizeMods,
  TransitionMods,
} from '@kodiui/kodiui'
import { theme } from './theme'

export const BaseBoxStyle = css`
  ${CornerMods.Round}
  ${BorderMods({
    border: 'thin',
    borderColor: theme.color.primary,
    elevation: 1,
  })}
  ${ColorMods({ background: theme.color.light })}
`
export const SelectBox = css`
  ${BorderMods({
    border: 'thin',
    borderColor: theme.color.primary,
    elevation: 2,
  })}
  ${CornerMods.Round}
    ${TransitionMods.Base}
  ${ifHovered(`transform: scale(1.05)`)}
  ${CursorMods.Pointer}
  ${SizeMods({ minWidth: '200px', maxWidth: 'fit-content' })}
`
