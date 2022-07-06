import { Box, Container, FlexMods, SizeMods } from '@kodiui/kodiui'
import { AccountCreated, RegistrationForm } from 'modules/registration'
import React, { useState } from 'react'

const RegisterPage = () => {
  const [accountCreated, setAccountCreated] = useState(false)
  return (
    <Container
      modifiers={[
        SizeMods.FillScreen,
        FlexMods.Parent({ justifyContent: 'center', alignItems: 'center' }),
      ]}
    >
      <Box modifiers={[SizeMods({ width: '400px' })]}>
        {accountCreated ? (
          <AccountCreated />
        ) : (
          <RegistrationForm setAccountCreated={setAccountCreated} />
        )}
      </Box>
    </Container>
  )
}

export default RegisterPage
