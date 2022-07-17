import { HSpace, Stack } from '@kodiui/kodiui'
import { Input, PrimaryButton } from 'components'
import { OfficeCreateInput } from 'generated/graphql'
import { useAppDispatch, useAppSelector, useIds } from 'hooks'
import React, { FormEvent, useState } from 'react'
import { selectCustomersLoading } from 'services/customers'
import { officeCreateAction } from 'services/customers/actions/officeCreateAction'

export const OfficesCreateForm = () => {
  const dispatch = useAppDispatch()
  const loading = useAppSelector(selectCustomersLoading)
  const { customerId } = useIds()

  const [officeInput, setCustomerInput] = useState<OfficeCreateInput>({
    name: '',
    address: '',
    customerId,
  })

  const change = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setCustomerInput({
      ...officeInput,
      [name]: value,
    })
  }

  const submit = (e: FormEvent) => {
    e.preventDefault()
    const empty = Object.values(officeInput).some((v) => v === '')
    if (empty) {
      alert('Ispuni sva polja')
      return
    }
    dispatch(officeCreateAction({ input: officeInput }))
  }

  return (
    <>
      <h4>Kreiraj poslovnicu</h4>
      <HSpace />
      <form onSubmit={submit}>
        <Stack>
          <Input
            name={'name'}
            value={officeInput.name}
            label={'Ime'}
            placeholder={'Ime'}
            onChange={(e) => change(e)}
          />
          <Input
            name={'address'}
            value={officeInput.address}
            label={'Adresa'}
            placeholder={'Adresa'}
            onChange={(e) => change(e)}
          />
          <PrimaryButton loading={loading}>Kreiraj</PrimaryButton>
        </Stack>
      </form>
    </>
  )
}
