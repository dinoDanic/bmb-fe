import {
  Box,
  Container,
  FlexMods,
  HSpace,
  SizeMods,
  Stack,
} from '@kodiui/kodiui'
import { Input, PrimaryButton } from 'components'
import { useAppDispatch, useAppSelector } from 'hooks/redux-hooks'
import React, { useEffect, useState } from 'react'
import { selectAccountLoading } from 'services/account'

const LoginPage = () => {
  const dispatch = useAppDispatch()
  const loading = useAppSelector(selectAccountLoading)
  const [disable, setDisable] = useState(true)
  const [form, setForm] = useState({
    email: '',
    password: '',
  })

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target
    setForm({
      ...form,
      [name]: value,
    })
  }

  const submit = () => {
    /* todod */
    // dispatch()
  }

  useEffect(() => {
    const isEmpty = Object.values(form).some((i) => i === '')
    setDisable(isEmpty)
  }, [form])

  return (
    <Container
      modifiers={[
        SizeMods.FillScreen,
        FlexMods.Parent({ justifyContent: 'center', alignItems: 'center' }),
      ]}
    >
      <Box modifiers={[SizeMods({ width: '400px' })]}>
        <form onSubmit={submit}>
          <h2>Prijava</h2>
          <HSpace />
          <Stack>
            <Input
              label="Email"
              placeholder="Email"
              type={'email'}
              name="email"
              onChange={(e) => onChange(e)}
            />
            <Input
              label="Lozinka"
              type={'password'}
              placeholder="Lozinka"
              name="password"
              onChange={(e) => onChange(e)}
            />
            <PrimaryButton loading={loading === 'pending'} disabled={disable}>
              Enter!
            </PrimaryButton>
          </Stack>
        </form>
      </Box>
    </Container>
  )
}

export default LoginPage
