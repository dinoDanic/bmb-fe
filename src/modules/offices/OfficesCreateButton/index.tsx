import { PrimaryButton } from 'components'
import { Popup } from 'components/elements'
import { useIds } from 'hooks'
import React, { useState } from 'react'
import { OfficesCreateForm } from '../OfficesCreateForm'

export const OfficesCreateButton = () => {
  const [visible, setVisible] = useState(false)
  const { customerId } = useIds()

  return (
    <>
      <PrimaryButton onClick={() => setVisible(true)}>
        Nova Poslovnica
      </PrimaryButton>
      <Popup visible={visible}>
        <OfficesCreateForm setVisible={setVisible} customerId={customerId} />
      </Popup>
    </>
  )
}
