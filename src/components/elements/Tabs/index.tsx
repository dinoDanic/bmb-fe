/* eslint-disable react/display-name */
import { Container, FlexMods, SpaceProperties, Stack } from '@kodiui/kodiui'
import React, {
  FC,
  PropsWithChildren,
  ReactElement,
  ReactNode,
  useState,
} from 'react'
import { Tab } from './Tab'
export * from './Tab'

interface Props {
  children: ReactNode
}

interface Tabs {
  Tab: ({ index, children, emoji }: Tab) => JSX.Element
}

interface Tab {
  index: number
  name: string
  children: ReactNode
  emoji?: () => JSX.Element
}

export const Tabs: FC<Props> & Tabs = ({ children }) => {
  const [active, setActive] = useState(0)

  return (
    <Stack space={'big'}>
      <Container
        modifiers={[
          FlexMods.Parent({ direction: 'row', gap: SpaceProperties.Base }),
          `font-family: "Arial"`,
        ]}
      >
        {React.Children.map(children, (child) => {
          const item = child as ReactElement<PropsWithChildren<Tab>>
          return (
            <Container onClick={() => setActive(item?.props.index)}>
              <Tab
                active={item?.props.index === active}
                name={item?.props.name}
                emoji={item?.props.emoji}
              />
            </Container>
          )
        })}
      </Container>

      <>
        {React.Children.map(children, (child) => {
          const item = child as ReactElement<PropsWithChildren<Tab>>
          if (item?.props.index === active) return child
        })}
      </>
    </Stack>
  )
}

Tabs.Tab = ({ children }) => {
  return <Container>{children}</Container>
}
