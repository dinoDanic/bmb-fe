import styled from '@emotion/styled'
import {
  ColorMods,
  Container,
  CursorMods,
  ifHovered,
  SizeMods,
  TransitionMods,
} from '@kodiui/kodiui'
import { theme } from './theme'

export const TableRow = styled.tr`
  ${TransitionMods.Base}
`

export const Table = styled.table`
  ${SizeMods.FullWidth}/* border-collapse: collapse */
`

export const TableBody = styled.tbody`
  tr {
    &:nth-child(1n) {
      background-color: ${theme.color.primaryLighter};
    }
    &:nth-child(2n) {
      background-color: ${theme.color.primaryLight};
    }
    ${CursorMods.Pointer}
    ${ifHovered([ColorMods({ background: theme.color.primary })])}
  }
`

export const TableData = styled.td`
  height: 50px;
  padding: 0 30px;
`

export const TableHead = styled.thead`
  background-color: ${theme.color.primary};
  color: ${theme.color.primaryDark};
  height: 60px;
`

export const TableHeader = styled.th``

export const StyledContainer = styled(Container)``
