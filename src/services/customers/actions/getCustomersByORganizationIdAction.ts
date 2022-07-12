import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  GetCustomersByOrganizationIdDocument,
  GetCustomersByOrganizationIdQuery,
  GetCustomersByOrganizationIdQueryVariables,
} from 'generated/graphql'
import { client } from 'pages/_app'

export const getCustomersByOrganizationIdAction = createAsyncThunk(
  'user/getCustomersByOrganizationId',
  async (input: GetCustomersByOrganizationIdQueryVariables, thunkApi) => {
    try {
      const res = await client.query<
        GetCustomersByOrganizationIdQuery,
        GetCustomersByOrganizationIdQueryVariables
      >({
        query: GetCustomersByOrganizationIdDocument,
        variables: input,
      })
      return res.data?.getCustomersByOrganizationId
    } catch (error) {
      return thunkApi.rejectWithValue(error)
    }
  }
)
