import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from 'app/store'

import App from 'app/App'

import { muiSerifTheme } from 'shared/themes/MuiTheme'
import MuiThemeProvider from '@mui/material/styles/ThemeProvider'

const container = document.getElementById('root')!
const root = ReactDOM.createRoot(container)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <MuiThemeProvider theme={muiSerifTheme}>
        <App />
      </MuiThemeProvider>
    </Provider>
  </React.StrictMode>
)
