import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
body {
  font-family: 'Open Sans', sans-serif;
  line-height: 1.5;
  font-weight: 400;
  margin: 0;

  min-height: 100vh;
}
  
body,
html,
#root {
  height: 100%;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}
`
