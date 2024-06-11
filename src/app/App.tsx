import { DictionaryWord } from 'pages/word'
import { UseAppSelector } from 'shared/hooks/reduxHooks'

import { muiDarkTheme, muiLightTheme } from 'shared/themes/MuiThemes'
import MuiThemeProvider from '@mui/material/styles/ThemeProvider'

import { GlobalStyle } from 'shared/styles/GlobalStyle'
import { Normalize } from 'shared/styles/Normalize'

const App = () => {
  const theme = UseAppSelector(state => state.theme)[0]['theme']

  return (
    <>
      <Normalize />
      <GlobalStyle $theme={theme} />
      <MuiThemeProvider theme={theme === 'light' ? muiLightTheme : muiDarkTheme}>
        <DictionaryWord />
      </MuiThemeProvider>
    </>
  )
}

export default App
