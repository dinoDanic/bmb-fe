import {
  Box,
  Center,
  ColorMods,
  Container,
  CornerMods,
  FlexMods,
  SizeMods,
  Stack,
} from '@kodiui/kodiui'
import React, { FC, ReactNode } from 'react'
import { Header } from './Header'

interface Props {
  children: ReactNode
}

export const Content: FC<Props> = ({ children }) => {
  return (
    <Box
      space={'bigger'}
      modifiers={[FlexMods.Parent({ justifyContent: 'center' })]}
    >
      <Container modifiers={[SizeMods({ maxWidth: '2000px', width: '100%' })]}>
        <Stack>
          <Header />
          {children}
        </Stack>
      </Container>
    </Box>
  )
}
