import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  CreateSessionDocument,
  CreateSessionQuery,
  CreateSessionQueryVariables,
} from 'generated/graphql'
import { client } from 'pages/_app'

export const createSessionAction = createAsyncThunk(
  'account/createSes',
  async (input: CreateSessionQueryVariables, thunkApi) => {
    try {
      const response = await client.query<
        CreateSessionQuery,
        CreateSessionQueryVariables
      >({
        query: CreateSessionDocument,
        variables: input,
      })
      return response.data.createSession
    } catch (error) {
      return thunkApi.rejectWithValue(error)
    }
  }
)
