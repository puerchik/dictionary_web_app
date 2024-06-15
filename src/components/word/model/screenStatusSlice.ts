import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type ScreenStatus = {
  error: boolean | number
  homeScreen: boolean
}

const initialState: ScreenStatus = {
  error: false,
  homeScreen: true,
}

const screenStatusSlice = createSlice({
  name: 'error',
  initialState,
  reducers: {
    setError(state: ScreenStatus, action: PayloadAction<ScreenStatus['error']>) {
      state.error = action.payload
    },
    setScreen(state: ScreenStatus, action: PayloadAction<ScreenStatus['homeScreen']>) {
      state.homeScreen = action.payload
    },
  },
})

export const screenStatusReducer = screenStatusSlice.reducer
export const screenStatusActions = screenStatusSlice.actions
