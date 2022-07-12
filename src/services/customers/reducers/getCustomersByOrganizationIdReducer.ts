import { ActionReducerMapBuilder } from '@reduxjs/toolkit'
import { getCustomersByOrganizationIdAction } from '../actions'
import { CustomersInitial } from '../types'

export const getCustomersByOrganizationIdReducer = (
  builder: ActionReducerMapBuilder<CustomersInitial>
) => {
  builder.addCase(getCustomersByOrganizationIdAction.pending, (state) => {
    state.loading = 'pending'
  }),
    builder.addCase(
      getCustomersByOrganizationIdAction.rejected,
      (state, action) => {
        state.loading = 'failed'
        if (action.error.message) {
          state.error = action.error.message
        }
      }
    ),
    builder.addCase(
      getCustomersByOrganizationIdAction.fulfilled,
      (state, action) => {
        if (action.payload) {
          state.customers = action.payload
        }
        state.loading = 'succeeded'
        state.error = null
      }
    )
}
