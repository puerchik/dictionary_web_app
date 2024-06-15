import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type ErrorType = {
  error: boolean | number
}

const initialState: ErrorType = {
  error: false,
}

const errorSlice = createSlice({
  name: 'error',
  initialState,
  reducers: {
    setError(state: ErrorType, action: PayloadAction<ErrorType>) {
      state.error = action.payload.error
    },
  },
})

export const errorReducer = errorSlice.reducer
export const errorActions = errorSlice.actions
