import React, { FC, useState } from 'react'
import { TD, TR } from 'styles/tables'
import { Row } from 'types'
import { Expandable } from '../Expandable'

export const Td: FC<Row> = (props) => {
  const [expand, setExpand] = useState(false)
  const isExpandable = props.expandable?.data?.length > 0
  return (
    <>
      <TR>
        {props.data.map((value, i) => {
          if (typeof value === 'string' || typeof value === 'number') {
            return (
              <TD
                active={expand}
                onClick={() => isExpandable && setExpand(!expand)}
                key={i}
              >
                {value}
              </TD>
            )
          } else {
            return (
              <TD
                active={expand}
                onClick={() => setExpand(!expand)}
                key={i}
                style={{ maxWidth: '100px', minWidth: '100px' }}
              >
                {value}
              </TD>
            )
          }
        })}
      </TR>
      {isExpandable && expand && <Expandable {...props} />}
    </>
  )
}
