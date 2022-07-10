import { createGlobalStyle } from 'styled-components'

import { baseTheme } from './themes/baseTheme/baseTheme'

export const GlobalStyles = createGlobalStyle`
html {
    font-size: 16x;
    line-height: 120%;
  }
  
  body {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    color: ${baseTheme.colors.gray};
  
    background: #fff;
  
    &._lock {
      overflow: hidden;
    }
  }
  
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }
  
  img {
    max-width: 100%;
  }
  .container {
    max-width: ${baseTheme.sizes.container};
    margin: 0 auto;
    padding: 0 15px;
  }
  
`
