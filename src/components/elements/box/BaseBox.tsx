import { BorderMods, Box, ColorMods, CornerMods } from '@kodiui/kodiui'
import React, { FC, ReactNode } from 'react'
import { theme } from 'styles'

interface Props {
  children: ReactNode
  light?: boolean
}

export const BaseBox: FC<Props> = ({ children, light = false }) => {
  return (
    <Box
      modifiers={[
        CornerMods.Round,
        BorderMods({ border: 'thin', borderColor: theme.color.primary }),
        ColorMods({
          background: light ? theme.color.light : theme.color.primaryDark,
        }),
      ]}
    >
      {children}
    </Box>
  )
}
