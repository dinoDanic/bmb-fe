import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  CustomerCreateInput,
  CustomerCreateMutation,
  CustomerCreateDocument,
  CustomerCreateMutationVariables,
} from 'generated/graphql'
import { client } from 'pages/_app'

export const customerCreateAction = createAsyncThunk(
  'user/createCustomer',
  async (input: CustomerCreateMutationVariables, thunkApi) => {
    console.log(input)

    try {
      const res = await client.mutate<
        CustomerCreateMutation,
        CustomerCreateMutationVariables
      >({
        mutation: CustomerCreateDocument,
        variables: input,
      })
      return res.data?.customerCreate
    } catch (error) {
      return thunkApi.rejectWithValue(error)
    }
  }
)
