import { ActionReducerMapBuilder } from '@reduxjs/toolkit'
import { createSessionAction } from '../actions/createSessionAction'
import { AccountInitial } from '../types'

export const createSessionReducer = (
  builder: ActionReducerMapBuilder<AccountInitial>
) => {
  builder.addCase(createSessionAction.pending, (state) => {
    state.loading = 'pending'
  }),
    builder.addCase(createSessionAction.rejected, (state, action) => {
      state.loading = 'failed'
      state.error = action.error.message
    }),
    builder.addCase(createSessionAction.fulfilled, (state, action) => {
      state.loading = 'succeeded'
      if (action.payload) {
        if (typeof window !== 'undefined') {
          localStorage.setItem('token-bmb', action.payload)
        }
      }
    })
}
