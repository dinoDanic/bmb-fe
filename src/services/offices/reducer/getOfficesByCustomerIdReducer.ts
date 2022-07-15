import { ActionReducerMapBuilder } from '@reduxjs/toolkit'
import { getOfficesByCustomerIdAction } from '../actions'
import { OfficesInitial } from '../types'

export const getOfficesByCustomerIdReducer = (
  builder: ActionReducerMapBuilder<OfficesInitial>
) => {
  builder.addCase(getOfficesByCustomerIdAction.pending, (state) => {
    state.loading = 'pending'
  }),
    builder.addCase(getOfficesByCustomerIdAction.rejected, (state, action) => {
      state.loading = 'failed'
      if (action.error.message) {
        state.error = action.error.message
      }
    }),
    builder.addCase(getOfficesByCustomerIdAction.fulfilled, (state, action) => {
      if (action.payload) {
        // state.offices = [...state.offices, action.payload]
      }
      state.loading = 'succeeded'
      state.error = null
    })
}
