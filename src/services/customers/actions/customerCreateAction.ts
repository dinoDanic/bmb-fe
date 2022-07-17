import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  CustomerCreateMutation,
  CustomerCreateDocument,
  CustomerCreateMutationVariables,
} from 'generated/graphql'
import { client } from 'pages/_app'

export const customerCreateAction = createAsyncThunk(
  'customer/createCustomer',
  async (input: CustomerCreateMutationVariables, thunkApi) => {
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
