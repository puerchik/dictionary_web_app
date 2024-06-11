import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export type Themes = {
  theme: 'light' | 'dark'
}

const initialState: Themes[] = [
  {
    theme: 'light',
  },
]

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme(state: Themes[], action: PayloadAction<Themes>) {
      state[0] = action.payload
    },
  },
})

export const themeReducer = themeSlice.reducer
export const themeAction = themeSlice.actions
