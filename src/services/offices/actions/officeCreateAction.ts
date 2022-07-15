import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  OfficeCreateMutationVariables,
  OfficeCreateMutation,
  OfficeCreateDocument,
} from 'generated/graphql'
import { client } from 'pages/_app'

export const officeCreateAction = createAsyncThunk(
  'offices/create',
  async (input: OfficeCreateMutationVariables, thunkApi) => {
    try {
      const res = await client.mutate<
        OfficeCreateMutation,
        OfficeCreateMutationVariables
      >({
        mutation: OfficeCreateDocument,
        variables: input,
      })
      return res.data?.officeCreate
    } catch (error) {
      return thunkApi.rejectWithValue(error)
    }
  }
)
