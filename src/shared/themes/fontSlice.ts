import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export type Font = {
  font: 'serif' | 'sans-serif'
}

const initialState: Font[] = [
  {
    font: 'serif',
  },
]

const fontSlice = createSlice({
  name: 'font',
  initialState,
  reducers: {
    setFont(state: Font[], action: PayloadAction<Font>) {
      state[0] = action.payload
    },
  },
})

export const fontReducer = fontSlice.reducer
export const fontAction = fontSlice.actions
