import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { ColorMods, ifHovered, SizeMods, TextMods } from '@kodiui/kodiui'
import { theme } from './theme'

export const TableStyle = css`
  ${SizeMods({ width: '100%' })}
  border-collapse: collapse;
`

export const THStyle = css`
  ${TextMods({ textAlign: 'center' })}
  border-bottom: 1px solid ${theme.color.primary};
  ${SizeMods({ height: '50px' })}
  ${ColorMods({ background: theme.color.gray })}
`

export const TRStyle = css`
  ${SizeMods({ height: '30px' })}
  ${ifHovered(ColorMods({ background: theme.color.gray }))}
`

export const TDStyle = css`
  ${SizeMods({ height: '40px' })}
  ${TextMods({ textAlign: 'center' })}
  border-bottom: 1px solid ${theme.color.light};
`

export const TableStyled = styled.table`
  ${TableStyle}
`

export const TBody = styled.tbody``

export const TH = styled.th<{ active?: boolean }>`
  ${THStyle}
  ${({ active }) => active && ColorMods({ background: theme.color.light })}
`
export const TR = styled.tr<{ active?: boolean }>`
  ${TRStyle}
  ${({ active }) => active && ColorMods({ background: theme.color.light })}
`

export const TD = styled.td<{ active?: boolean }>`
  ${TDStyle}
  ${({ active }) =>
    active && ColorMods({ background: theme.color.primaryLight })}
`

export const TbodyExpandable = styled.tbody`
  ${ColorMods({ background: theme.color.light })}
`
