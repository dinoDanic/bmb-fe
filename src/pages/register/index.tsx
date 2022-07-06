import { useCreateAccountMutation } from 'generated/graphql'
import React, { useState } from 'react'

const RegisterPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [create] = useCreateAccountMutation({
    variables: {
      input: { email, password, firstName: 'DIno', lastName: 'Danic' },
    },
  })

  const submit = async () => {
    const res = await create()
    console.log(res)
  }

  return (
    <div>
      <input value={email} onChange={(e) => setEmail(e.target.value)} />
      <input value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={submit}>submit</button>
    </div>
  )
}

export default RegisterPage
