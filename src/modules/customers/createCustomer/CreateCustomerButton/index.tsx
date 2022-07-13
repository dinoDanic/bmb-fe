import { PrimaryButton } from 'components'
import { Popup } from 'components/elements'
import React, { useState } from 'react'
import { CreateCustomerForm } from '../CreateCustomerForm'

export const CreateCustomerButton = () => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <PrimaryButton onClick={() => setVisible(!visible)}>
        Dodaj Kupca
      </PrimaryButton>
      <Popup visible={visible} setVisible={setVisible}>
        <CreateCustomerForm />
      </Popup>
    </>
  )
}
