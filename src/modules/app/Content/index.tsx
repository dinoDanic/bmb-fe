import React, { FC, ReactNode } from 'react'
import { Header } from './Header'

interface Props {
  children: ReactNode
}

export const Content: FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}
