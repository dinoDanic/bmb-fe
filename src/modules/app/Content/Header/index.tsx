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
  HDivider,
  ifActive,
  ifHovered,
  SpaceProperties,
  Stack,
  TextMods,
  TransitionMods,
} from '@kodiui/kodiui'
import { menuLinks } from 'lib/menu'
import { FcHome } from 'react-icons/fc'
import {
  BsInboxes,
  BsJoystick,
  BsBox,
  BsHouse,
  BsBuilding,
} from 'react-icons/bs'
import { theme } from 'styles'

export const Header = () => {
  return (
    <>
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
    </>
  )
}

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
