import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  OfficeCreateMutationVariables,
  OfficeCreateMutation,
  OfficeCreateDocument,
} from 'generated/graphql'
import { client } from 'pages/_app'

export const officeCreateAction = createAsyncThunk(
  'customer/createOffice',
  async (input: OfficeCreateMutationVariables, thunkApi) => {
    try {
      const res = await client.mutate<
        OfficeCreateMutation,
        OfficeCreateMutationVariables
      >({
        mutation: OfficeCreateDocument,
        variables: input,
      })
      return { res: res.data?.officeCreate, customerId: input.input.customerId }
    } catch (error) {
      console.log(error)

      return thunkApi.rejectWithValue(error)
    }
  }
)
