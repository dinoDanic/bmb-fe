import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  OrganizationCreateDocument,
  OrganizationCreateMutation,
  OrganizationCreateMutationVariables,
} from 'generated/graphql'
import { client } from 'pages/_app'

export const organizationCreateAction = createAsyncThunk(
  'user/organizationCreate',
  async (input: OrganizationCreateMutationVariables, thunkApi) => {
    try {
      const res = await client.mutate<
        OrganizationCreateMutation,
        OrganizationCreateMutationVariables
      >({
        mutation: OrganizationCreateDocument,
        variables: input,
      })
      return res.data?.organizationCreate
    } catch (error) {
      return thunkApi.rejectWithValue(error)
    }
  }
)
