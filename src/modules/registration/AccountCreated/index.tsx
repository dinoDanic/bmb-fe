import { Center, HSpace } from '@kodiui/kodiui'
import Link from 'next/link'
import React from 'react'
import { routes } from 'modules/routes'

export const AccountCreated = () => {
  return (
    <>
      <Center>
        <h3>Racun kreiran, provjeri email!</h3>
        <HSpace />
        <h4>
          <Link href={routes.login}>Prijava</Link>
        </h4>
      </Center>
    </>
  )
}
