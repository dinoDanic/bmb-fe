import { BorderMods, Box, ColorMods, CornerMods } from '@kodiui/kodiui'
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
        BorderMods({
          border: 'thin',
          borderColor: theme.color.primary,
          elevation: 1,
        }),
        ColorMods({ background: theme.color.light }),
      ]}
    >
      {children}
    </Box>
  )
}
