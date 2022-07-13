import { ActionReducerMapBuilder } from '@reduxjs/toolkit'
import { customerCreateAction } from '../actions/customerCreateAction'
import { CustomersInitial } from '../types'

export const customerCreateReducer = (
  builder: ActionReducerMapBuilder<CustomersInitial>
) => {
  builder.addCase(customerCreateAction.pending, (state) => {
    state.loading = 'pending'
  }),
    builder.addCase(customerCreateAction.rejected, (state, action) => {
      state.loading = 'failed'
      if (action.error.message) {
        state.error = action.error.message
      }
    }),
    builder.addCase(customerCreateAction.fulfilled, (state, action) => {
      if (action.payload) {
        state.customers = [...state.customers, action.payload]
      }
      state.loading = 'succeeded'
      state.error = null
    })
}
