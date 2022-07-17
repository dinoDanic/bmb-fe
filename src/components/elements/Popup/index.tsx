import styled from '@emotion/styled'
import {
  ColorMods,
  FlexMods,
  PositionModFn,
  PositionMods,
  SizeMods,
} from '@kodiui/kodiui'
import { AnimatePresence, motion } from 'framer-motion'
import React, { FC, ReactNode, SetStateAction } from 'react'
import { BaseBox } from '../box'

interface Props {
  children: ReactNode
  visible: boolean
  setVisible?: React.Dispatch<SetStateAction<boolean>>
}

export const Popup: FC<Props> = ({ children, visible, setVisible }) => {
  return (
    <AnimatePresence exitBeforeEnter key={'Parent'}>
      {visible && (
        <StyledContainer>
          <Layer onClick={() => setVisible && setVisible(false)} />
          <Animation
            key={'Child'}
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
          >
            <BaseBox>{children}</BaseBox>
          </Animation>
        </StyledContainer>
      )}
    </AnimatePresence>
  )
}

const Animation = styled(motion.div)`
  ${SizeMods({ maxWidth: '1000px', width: '100%' })}
  ${PositionMods.Absolute}
`

const StyledContainer = styled.div`
  ${PositionMods.Fixed}
  ${SizeMods.FillContainer}
  ${FlexMods.Parent({ justifyContent: 'center', alignItems: 'center' })}
  ${PositionModFn({ top: 0, left: 0 })}
`

const Layer = styled(motion.div)`
  ${SizeMods.FillScreen}
  ${PositionMods.Absolute} 
  ${ColorMods({ background: 'rgba(0,0,0,0.4)' })}
  backdrop-filter: blur(2px);
`
