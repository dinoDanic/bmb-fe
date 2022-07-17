import { PrimaryButton } from 'components'
import { Popup } from 'components/elements'
import React, { useState } from 'react'
import { OfficesCreateForm } from '../OfficesCreateForm'

export const OfficesCreateButton = () => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <PrimaryButton onClick={() => setVisible(!visible)}>
        Kreiraj
      </PrimaryButton>
      <Popup visible={visible} setVisible={setVisible}>
        <OfficesCreateForm />
      </Popup>
    </>
  )
}
