import { Stack } from '@kodiui/kodiui'
import { Input, PrimaryButton } from 'components'
import { Organization, OrganizationCreateInput } from 'generated/graphql'
import { useAppDispatch } from 'hooks'
import React, { useState } from 'react'
import { organizationCreateAction } from 'services/organizations'

export const OrganizationCreate = () => {
  const dispatch = useAppDispatch()
  const [form, setForm] = useState<OrganizationCreateInput>({
    name: '',
    address: '',
    oib: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value,
    })
  }

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    dispatch(organizationCreateAction({ input: form }))
  }

  return (
    <form onSubmit={submit}>
      <Stack>
        <Input
          name={'name'}
          label={'Naziv'}
          placeholder={'Naziv'}
          value={form.name}
          onChange={(e) => handleChange(e)}
        />
        <Input
          name={'address'}
          label={'Adresa'}
          placeholder={'Adresa'}
          value={form.address}
          onChange={(e) => handleChange(e)}
        />
        <Input
          name={'oib'}
          label={'Oib'}
          placeholder={'Oib'}
          value={form.oib}
          onChange={(e) => handleChange(e)}
        />
        <PrimaryButton>Kreiraj</PrimaryButton>
      </Stack>
    </form>
  )
}
