import { css } from '@emotion/react'
import styled from '@emotion/styled'
import {
  BorderMods,
  Box,
  Center,
  Cluster,
  ColorMods,
  CornerMods,
  CursorMods,
  ifActive,
  ifHovered,
  Stack,
  TextMods,
  TransitionMods,
} from '@kodiui/kodiui'
import { menuLinks } from 'lib/menu'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { theme } from 'styles'

export const Header = () => {
  const router = useRouter()
  return (
    <Box background={theme.color.primary}>
      <Cluster>
        {menuLinks.map((link) => {
          const active = router.asPath.includes(link.link)
          return (
            <Link key={link.id} href={link.link}>
              <StyledBox active={active} space={'small'} minWidth={'100px'}>
                <Stack space={'small'}>
                  {link.icon && <Center>{link.icon()}</Center>}
                  <Center>
                    <h5>{link.name}</h5>
                  </Center>
                </Stack>
              </StyledBox>
            </Link>
          )
        })}
      </Cluster>
    </Box>
  )
}

const activeStyle = css`
  ${TextMods({ textDecoration: 'underline' })}
  ${ColorMods({ color: theme.color.primaryLighter })}
`

const StyledBox = styled(Box)<{ color?: string; active: boolean }>`
  ${ColorMods({
    background: theme.color.light,
    color: theme.color.primaryLight,
  })}
  ${BorderMods({
    elevation: 2,
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
