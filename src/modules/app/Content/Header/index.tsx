import styled from '@emotion/styled'
import {
  Box,
  Center,
  ColorMods,
  Container,
  CornerMods,
  CursorMods,
  FlexMods,
  ifActive,
  ifHovered,
  SpaceProperties,
  Stack,
  TextMods,
  TransitionMods,
} from '@kodiui/kodiui'
import { motion } from 'framer-motion'
import { menuLinks } from 'lib/menu'
import { theme } from 'styles'

export const Header = () => {
  return (
    <AnimationHeader
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.59 }}
    >
      <Container
        modifiers={[
          FlexMods.Parent({ direction: 'row', gap: SpaceProperties.Base }),
        ]}
      >
        {menuLinks.map((link) => {
          return (
            <StyledBox space={'base'} color={link.color} key={link.id}>
              <Stack space={'base'}>
                {link.icon && <Center>{link.icon()}</Center>}
                {link.name}
              </Stack>
            </StyledBox>
          )
        })}
      </Container>
    </AnimationHeader>
  )
}

const AnimationHeader = styled(motion.div)``

const StyledBox = styled(Box)<{ color?: string }>`
  ${ColorMods({
    background: theme.color.primary,
    color: theme.color.primaryLight,
  })}
  ${CursorMods.Pointer}
  ${TextMods({ fontWeight: 'bolder' })}
  ${CornerMods.Round}
  ${({ color }) => color && ColorMods({ background: color })}
  ${TransitionMods.Base}
  ${ifHovered([`transform: scale(1.1)`])}
  ${ifActive([`transform: scale(0.95)`])}
`
