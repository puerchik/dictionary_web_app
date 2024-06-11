import createTheme from '@mui/material/styles/createTheme'

export const muiLightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#121620',
    },
  },
})

export const muiDarkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#f1f1f1',
    },
  },
})
