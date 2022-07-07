import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  MeEssentialDocument,
  MeEssentialQuery,
  MeEssentialQueryVariables,
} from 'generated/graphql'
import { client } from 'pages/_app'

export const meEssentialAction = createAsyncThunk(
  'user/essential',
  async (_, thunkApi) => {
    try {
      const res = await client.query<
        MeEssentialQuery,
        MeEssentialQueryVariables
      >({
        query: MeEssentialDocument,
      })
      return res.data.me
    } catch (error) {
      return thunkApi.rejectWithValue(error)
    }
  }
)
