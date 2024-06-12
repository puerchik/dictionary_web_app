import { DictionaryWord } from 'pages/word'
import { UseAppSelector } from 'shared/hooks/reduxHooks'

import { muiDarkTheme, muiLightTheme } from 'shared/themes/MuiThemes'
import MuiThemeProvider from '@mui/material/styles/ThemeProvider'

import { GlobalStyle } from 'shared/styles/GlobalStyle'
import { Normalize } from 'shared/styles/Normalize'
import { Theme, createTheme } from '@mui/material/styles'

const App = () => {
  const theme = UseAppSelector(state => state.theme)[0]['theme']
  const font = UseAppSelector(state => state.font)[0]['font']

  return (
    <>
      <Normalize />
      <GlobalStyle
        $theme={theme}
        $font={font}
      />

      <MuiThemeProvider theme={theme === 'light' ? muiLightTheme : muiDarkTheme}>
        <MuiThemeProvider
          theme={(theme: Theme) =>
            createTheme({
              ...theme,
              typography: {
                fontFamily: font === 'serif' ? '"Vollkorn", serif' : '"Arimo", sans-serif',
              },
            })
          }
        >
          <DictionaryWord />
        </MuiThemeProvider>
      </MuiThemeProvider>
    </>
  )
}

export default App
