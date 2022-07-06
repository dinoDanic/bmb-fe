import React from 'react'
import { theme } from 'styles'
import { ArrowPosition } from 'types'

export const ArrowIcon = ({ position }: { position: ArrowPosition }) => {
  const color = position === 'up' ? theme.color.primary : theme.color.danger
  return (
    <svg
      width="19"
      height="22"
      viewBox="0 0 19 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.4743 1.72357C16.3216 0.90933 15.5378 0.373023 14.7236 0.525693L1.45479 3.01359C0.640554 3.16626 0.104247 3.95009 0.256917 4.76433C0.409587 5.57857 1.19342 6.11487 2.00766 5.9622L13.8021 3.75074L16.0136 15.5452C16.1663 16.3594 16.9501 16.8958 17.7643 16.7431C18.5786 16.5904 19.1149 15.8066 18.9622 14.9923L16.4743 1.72357ZM3.23796 21.847L16.238 2.84703L13.762 1.15297L0.762039 20.153L3.23796 21.847Z"
        fill={color}
      />
    </svg>
  )
}
