import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  GetCustomersByOrganizationIdDocument,
  GetCustomersByOrganizationIdQuery,
  GetCustomersByOrganizationIdQueryVariables,
} from 'generated/graphql'
import { client } from 'pages/_app'
import { RootState } from 'redux/store'

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
  },
  {
    condition: (_, thunkApi) => {
      const store = thunkApi.getState() as RootState
      if (store.customers.customers.length === 0) {
        return true
      } else return false
    },
  }
)
