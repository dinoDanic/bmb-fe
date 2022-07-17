import {
  Box,
  Container,
  FlexMods,
  HSpace,
  SizeMods,
  Stack,
} from '@kodiui/kodiui'
import { Input, PrimaryButton } from 'components'
import { useAppSelector } from 'hooks/redux-hooks'
import { useRouter } from 'next/router'
import React, { FormEvent, useEffect, useState } from 'react'
import { login, selectAccountLoading } from 'services/account'
import { routes } from 'modules/routes'
import Link from 'next/link'

const LoginPage = () => {
  const router = useRouter()
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

  const submit = async (e: FormEvent) => {
    e.preventDefault()
    const res = await login(form.email, form.password)
    if (res.data.token && typeof window !== 'undefined') {
      localStorage.setItem('bmb-token', res.data.token)
      router.push(routes.dashboard)
    } else {
      alert('nesto poslo po zlu')
    }
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
            <PrimaryButton loading={loading} disabled={disable}>
              Enter!
            </PrimaryButton>
            <Link href={routes.register}>Registracija</Link>
          </Stack>
        </form>
      </Box>
    </Container>
  )
}

export default LoginPage
