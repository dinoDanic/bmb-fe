import styled from '@emotion/styled'
import { Overflow } from '@kodiui/kodiui'
import { motion } from 'framer-motion'
import React, { FC } from 'react'
import { TableStyled, TBody, TD, TH, TR } from 'styles'
import { Row } from 'types'

export const Expandable: FC<Row> = ({ expandable }) => {
  if (!expandable) return null

  return (
    <TR>
      <TD colSpan={100}>
        <Animation
          initial={{ height: '0px', y: -30, opacity: 0, scale: 0.98 }}
          animate={{ height: 'fit-content', y: 0, opacity: 1, scale: 1 }}
        >
          <TableStyled>
            <TBody>
              <TR>
                {expandable.header.map((value, i) => {
                  if (typeof value === 'string')
                    return (
                      <TH active key={i}>
                        {value}
                      </TH>
                    )
                  else
                    return (
                      <TH active key={i}>
                        {value}
                      </TH>
                    )
                })}
              </TR>
              <TR active>
                {expandable.data.map((rows) => {
                  return (
                    <>
                      {rows.map((row, i) => {
                        return <TD key={i}>{row}</TD>
                      })}
                    </>
                  )
                })}
              </TR>
            </TBody>
          </TableStyled>
        </Animation>
      </TD>
    </TR>
  )
}

const Animation = styled(motion.div)`
  ${Overflow.Hidden};
  box-shadow: 0px 14px 19px -21px black;
`
