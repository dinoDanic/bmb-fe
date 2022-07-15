import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  GetOfficesByCustomerIdQueryVariables,
  GetOfficesByCustomerIdQuery,
  GetOfficesByCustomerIdDocument,
} from 'generated/graphql'
import { client } from 'pages/_app'

export const getOfficesByCustomerIdAction = createAsyncThunk(
  'offices/get',
  async (input: GetOfficesByCustomerIdQueryVariables, thunkApi) => {
    try {
      const res = await client.query<
        GetOfficesByCustomerIdQuery,
        GetOfficesByCustomerIdQueryVariables
      >({
        query: GetOfficesByCustomerIdDocument,
        variables: input,
      })
      return res.data?.getOfficesByCustomerId
    } catch (error) {
      return thunkApi.rejectWithValue(error)
    }
  }
)
