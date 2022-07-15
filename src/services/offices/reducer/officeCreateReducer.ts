import { ActionReducerMapBuilder } from '@reduxjs/toolkit'
import { officeCreateAction } from '../actions/officeCreateAction'
import { OfficesInitial } from '../types'

export const officesCreateReducer = (
  builder: ActionReducerMapBuilder<OfficesInitial>
) => {
  builder.addCase(officeCreateAction.pending, (state) => {
    state.loading = 'pending'
  }),
    builder.addCase(officeCreateAction.rejected, (state, action) => {
      state.loading = 'failed'
      if (action.error.message) {
        state.error = action.error.message
      }
    }),
    builder.addCase(officeCreateAction.fulfilled, (state, action) => {
      if (action.payload) {
        state.offices = [...state.offices, action.payload]
      }
      state.loading = 'succeeded'
      state.error = null
    })
}
