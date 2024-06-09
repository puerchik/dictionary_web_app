import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type Themes = {
  body: string
  text: string
}

const initialState: Themes[] = [
  {
    body: '#f1f1f1',
    text: '#121620',
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
