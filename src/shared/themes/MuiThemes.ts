import createTheme from '@mui/material/styles/createTheme'

export const muiSerifTheme = createTheme({
  typography: {
    fontFamily: '"Vollkorn", serif',
  },
})

export const muiLightTheme = createTheme({
  palette: {
    text: {
      primary: '#121620',
    },
  },
})

export const muiDarkTheme = createTheme({
  palette: {
    text: {
      primary: '#f1f1f1',
    },
  },
})
