import {
  Box,
  Center,
  ColorMods,
  Container,
  CornerMods,
  FlexMods,
  PositionMods,
  SizeMods,
  Stack,
} from '@kodiui/kodiui'
import { useControls } from 'hooks'
import React, { FC, ReactNode } from 'react'
import { Header } from './Header'

interface Props {
  children: ReactNode
}

export const Content: FC<Props> = ({ children }) => {
  const { activeOrganization } = useControls()
  return (
    <Box
      space={'bigger'}
      modifiers={[
        FlexMods.Parent({ justifyContent: 'center' }),
        SizeMods.FillScreen,
      ]}
    >
      <Container
        modifiers={[
          SizeMods({ maxWidth: '2000px', width: '100%' }),
          PositionMods.Relative,
        ]}
      >
        <Stack>
          {activeOrganization && <Header />}
          {children}
        </Stack>
      </Container>
    </Box>
  )
}
