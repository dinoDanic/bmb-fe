import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  GetCustomerByIdDocument,
  GetCustomerByIdQuery,
  GetCustomerByIdQueryVariables,
} from 'generated/graphql'
import { client } from 'pages/_app'
import { RootState } from 'redux/store'

export const getCustomerByIdAction = createAsyncThunk(
  'user/getCustomerById',
  async (input: GetCustomerByIdQueryVariables, thunkApi) => {
    try {
      const res = await client.query<
        GetCustomerByIdQuery,
        GetCustomerByIdQueryVariables
      >({
        query: GetCustomerByIdDocument,
        variables: input,
      })
      return res.data?.getCustomerById
    } catch (error) {
      return thunkApi.rejectWithValue(error)
    }
  },
  {
    condition: (input, thunkApi) => {
      const store = thunkApi.getState() as RootState
      const find = store.customers.customers.find(
        (c) => c.id === input.customerId
      )
      console.log(find)

      if (!find) return true
      else return false
    },
  }
)
