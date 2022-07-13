import { HSpace, Stack } from '@kodiui/kodiui'
import { Input, PrimaryButton } from 'components'
import { CustomerCreateInput } from 'generated/graphql'
import { useAppDispatch, useAppSelector, useIds } from 'hooks'
import { routes } from 'modules/routes'
import { useRouter } from 'next/router'
import React, { FormEvent, useState } from 'react'
import {
  customerCreateAction,
  selectCustomersLoading,
} from 'services/customers'

export const CreateCustomerForm = () => {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const loading = useAppSelector(selectCustomersLoading)
  const { activeOrganizationId } = useIds()

  const [customerInput, setCustomerInput] = useState<CustomerCreateInput>({
    name: '',
    address: '',
    oib: '',
    organizationId: activeOrganizationId,
  })

  const change = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setCustomerInput({
      ...customerInput,
      [name]: value,
    })
  }

  const submit = (e: FormEvent) => {
    e.preventDefault()
    const empty = Object.values(customerInput).some((v) => v === '')
    if (empty) {
      alert('Ispuni sva polja')
      return
    }
    dispatch(customerCreateAction({ input: customerInput }))
      .unwrap()
      .then((res) => {
        router.push(`${routes.customers}/${res?.id}`)
      })
  }

  return (
    <>
      <h2>Kreiraj Kupca</h2>
      <HSpace />
      <form onSubmit={submit}>
        <Stack>
          <Input
            name={'name'}
            value={customerInput.name}
            label={'Ime'}
            placeholder={'Ime'}
            onChange={(e) => change(e)}
          />
          <Input
            name={'address'}
            value={customerInput.address}
            label={'Adresa'}
            placeholder={'Adresa'}
            onChange={(e) => change(e)}
          />
          <Input
            name={'oib'}
            value={customerInput.oib}
            label={'OIB'}
            placeholder={'OIB'}
            onChange={(e) => change(e)}
          />
          <PrimaryButton loading={loading}>Kreiraj</PrimaryButton>
        </Stack>
      </form>
    </>
  )
}
