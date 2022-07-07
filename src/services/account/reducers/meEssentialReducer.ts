import { ActionReducerMapBuilder } from '@reduxjs/toolkit'
import { meEssentialAction } from '../actions/meEssentialAction'
import { AccountInitial } from '../types'

export const meEssentialReducer = (
  builder: ActionReducerMapBuilder<AccountInitial>
) => {
  builder.addCase(meEssentialAction.fulfilled, (state, action) => {
    state.account = action.payload
  }),
    builder.addCase(meEssentialAction.rejected, () => {
      if (typeof window !== undefined) {
        localStorage.clear()
      }
    })
}
