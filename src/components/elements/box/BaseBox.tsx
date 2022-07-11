import { BorderMods, Box, CornerMods } from '@kodiui/kodiui'
import React, { FC, ReactNode } from 'react'
import { theme } from 'styles'

interface Props {
  children: ReactNode
}

export const BaseBox: FC<Props> = ({ children }) => {
  return (
    <Box
      modifiers={[
        CornerMods.Round,
        BorderMods({ border: 'thin', borderColor: theme.color.primary }),
      ]}
    >
      {children}
    </Box>
  )
}
