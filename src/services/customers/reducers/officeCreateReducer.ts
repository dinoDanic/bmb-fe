import { ActionReducerMapBuilder } from '@reduxjs/toolkit'
import { officeCreateAction } from '../actions/officeCreateAction'
import { CustomersInitial } from '../types'

export const officeCreateReducer = (
  builder: ActionReducerMapBuilder<CustomersInitial>
) => {
  builder.addCase(officeCreateAction.pending, (state) => {
    state.loading = 'pending'
  }),
    builder.addCase(officeCreateAction.rejected, (state, action) => {
      console.log(action.error)

      state.loading = 'failed'
      if (action.error.message) {
        state.error = action.error.message
      }
    }),
    builder.addCase(officeCreateAction.fulfilled, (state, action) => {
      // if (action.payload) {
      //   const customerIndex = state.customers.findIndex(
      //     (c) => c.id === action.payload.customerId
      //   )
      //   state.customers[customerIndex] = {
      //     ...state.customers[customerIndex],
      //     offices: {
      //       ...state.customers[customerIndex].offices,
      //       ...action.payload.res,
      //     },
      //   }
      // }
      // console.log(state)

      state.loading = 'succeeded'
      state.error = null
    })
}
