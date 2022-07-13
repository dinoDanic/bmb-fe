import { ActionReducerMapBuilder } from '@reduxjs/toolkit'
import { getCustomerByIdAction } from '../actions'
import { CustomersInitial } from '../types'

export const getCustomerByIdReducer = (
  builder: ActionReducerMapBuilder<CustomersInitial>
) => {
  builder.addCase(getCustomerByIdAction.pending, (state) => {
    state.loading = 'pending'
  }),
    builder.addCase(getCustomerByIdAction.rejected, (state, action) => {
      state.loading = 'failed'
      if (action.error.message) {
        state.error = action.error.message
      }
    }),
    builder.addCase(getCustomerByIdAction.fulfilled, (state, action) => {
      if (action.payload) {
        state.customers = [...state.customers, action.payload]
      }
      state.loading = 'succeeded'
      state.error = null
    })
}
