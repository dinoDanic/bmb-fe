import styled from '@emotion/styled'
import { BorderMods, Container, CornerMods, SizeMods } from '@kodiui/kodiui'
import React, { FC } from 'react'

import { TableStyled, TBody, TH, theme, TR } from 'styles'
import { TableData } from 'types'
import { Td } from './Td'

interface Props extends TableData {
  height?: number
}

export const Table: FC<Props> = ({ header, row, height }) => {
  return (
    <StyledContainer height={height}>
      <TableStyled>
        <TBody>
          <TR>
            {header.map((head, i) => (
              <TH key={i}>{head}</TH>
            ))}
          </TR>
          {row.map((data, i) => (
            <Td key={i} {...data} />
          ))}
        </TBody>
      </TableStyled>
    </StyledContainer>
  )
}

const StyledContainer = styled(Container)<{ height?: number }>`
  ${({ height }) => height && SizeMods({ maxHeight: `${height}px` })}
  ${BorderMods({ border: 'thin', borderColor: theme.color.gray, elevation: 1 })}
  ${CornerMods.Round}
  overflow: auto;
  table {
  }
`
