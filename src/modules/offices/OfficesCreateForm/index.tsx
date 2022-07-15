import { Input, PrimaryButton } from 'components'
import React, { FC, FormEvent, SetStateAction, useState } from 'react'
import { HSpace, Stack } from '@kodiui/kodiui'
import { useAppDispatch, useAppSelector } from 'hooks'
import { OfficeCreateInput } from 'generated/graphql'
import { officeCreateAction } from 'services/offices'
import { selectOfficesLoading } from 'services/offices/selectors'

interface Props {
  customerId: string
  setVisible?: React.Dispatch<SetStateAction<boolean>>
}

export const OfficesCreateForm: FC<Props> = ({ customerId, setVisible }) => {
  const dispatch = useAppDispatch()
  const loading = useAppSelector(selectOfficesLoading)

  const [officeInput, setOfficeInput] = useState<OfficeCreateInput>({
    name: '',
    address: '',
    customerId,
  })

  const change = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setOfficeInput({
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
    dispatch(officeCreateAction({ input: officeInput })).then(() =>
      setVisible(false)
    )
  }

  return (
    <>
      <h2>Kreiraj Poslovnicu</h2>
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
