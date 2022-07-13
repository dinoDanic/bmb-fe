import { HSpace, Stack, Switcher } from '@kodiui/kodiui'
import { Input, PrimaryButton } from 'components'
import React, { Dispatch, FC, SetStateAction, useEffect, useState } from 'react'
import { createUser } from 'services/account'

interface Props {
  setAccountCreated: Dispatch<SetStateAction<boolean>>
}

export const RegistrationForm: FC<Props> = ({ setAccountCreated }) => {
  const [disable, setDisable] = useState(true)
  const [form, setForm] = useState({
    email: '',
    password: '',
    repeatPassword: '',
  })

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target
    setForm({
      ...form,
      [name]: value,
    })
  }

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (form.password !== form.repeatPassword) {
      alert('Lozinka nije jednaka')
      return
    }

    const res = await createUser(form.email, form.password)
    if (res.data.id) {
      setAccountCreated(true)
    }
  }

  useEffect(() => {
    const isEmpty = Object.values(form).some((i) => i === '')
    setDisable(isEmpty)
  }, [form])

  return (
    <form onSubmit={submit}>
      <h2>Registracija</h2>
      <HSpace />
      <Switcher>
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
          <Input
            onChange={(e) => onChange(e)}
            name="repeatPassword"
            label="Lozinka"
            type={'password'}
            placeholder="Lozinka"
          />
          <PrimaryButton disabled={disable}>Enter!</PrimaryButton>
        </Stack>
      </Switcher>
    </form>
  )
}
