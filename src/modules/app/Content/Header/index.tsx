import { css } from '@emotion/react'
import styled from '@emotion/styled'
import {
  BorderMods,
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
import Link from 'next/link'
import { useRouter } from 'next/router'
import { theme } from 'styles'

export const Header = () => {
  const router = useRouter()
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
          const active = router.asPath === link.link
          return (
            <Link key={link.id} href={link.link}>
              <StyledBox active={active} space={'base'} color={link.color}>
                <Stack space={'base'}>
                  {link.icon && <Center>{link.icon()}</Center>}
                  {link.name}
                </Stack>
              </StyledBox>
            </Link>
          )
        })}
      </Container>
    </AnimationHeader>
  )
}

const AnimationHeader = styled(motion.div)``

const activeStyle = css`
  ${ColorMods({ background: theme.color.light })}
`

const StyledBox = styled(Box)<{ color?: string; active: boolean }>`
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
  ${({ active }) => active && activeStyle}
`
