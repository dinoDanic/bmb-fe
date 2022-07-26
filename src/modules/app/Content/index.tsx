import { Box, Container, PositionMods, SizeMods, Stack } from '@kodiui/kodiui'
import { useControls } from 'hooks'
import React, { FC, ReactNode } from 'react'
import { Header } from './Header'

interface Props {
  children: ReactNode
}

export const Content: FC<Props> = ({ children }) => {
  const { activeOrganization } = useControls()
  return (
    <Stack space={'bigger'}>
      {activeOrganization && <Header />}
      <Container>
        <Stack>
          <Box
            modifiers={[
              SizeMods({ maxWidth: '1200px', width: '100%' }),
              `margin: 0 auto`,
            ]}
          >
            {children}
          </Box>
        </Stack>
      </Container>
    </Stack>
  )
}
