import { createGlobalStyle } from 'styled-components'

import ArimoRegular from 'shared/fonts/Arimo-Regular.woff2'
import ArimoBold from 'shared/fonts/Arimo-Bold.woff2'
import ArimoRegularItalic from 'shared/fonts/Arimo-Italic.woff2'
import ArimoBoldItalic from 'shared/fonts/Arimo-BoldItalic.woff2'
import VollkornRegular from 'shared/fonts/Vollkorn-Regular.woff2'
import VollkornBold from 'shared/fonts/Vollkorn-Bold.woff2'
import VollkornRegularItalic from 'shared/fonts/Vollkorn-Italic.woff2'
import VollkornBoldItalic from 'shared/fonts/Vollkorn-BoldItalic.woff2'

export const GlobalStyle = createGlobalStyle`
body {
  @font-face {
    font-family: "Arimo";
    src: url(${ArimoRegular}) format("woff2");
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
  
  @font-face {
    font-family: "Arimo";
    src: url(${ArimoBold}) format("woff2");
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Arimo";
    src: url(${ArimoRegularItalic}) format("woff2");
    font-weight: 400;
    font-style: italic;
    font-display: swap;
  }
  
  @font-face {
    font-family: "Arimo";
    src: url(${ArimoBoldItalic}) format("woff2");
    font-weight: 700;
    font-style: italic;
    font-display: swap;
  }

  @font-face {
    font-family: "Vollkorn";
    src: url(${VollkornRegular}) format("woff2");
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
  
  @font-face {
    font-family: "Vollkorn";
    src: url(${VollkornBold}) format("woff2");
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Vollkorn";
    src: url(${VollkornRegularItalic}) format("woff2");
    font-weight: 400;
    font-style: italic;
    font-display: swap;
  }
  
  @font-face {
    font-family: "Vollkorn";
    src: url(${VollkornBoldItalic}) format("woff2");
    font-weight: 700;
    font-style: italic;
    font-display: swap;
  }


  font-family: 'Vollkorn', serif;
  line-height: 1.5;
  font-weight: 400;
  font-style: normal;
  margin: 0;

  background-color: #8b8b8b;

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
