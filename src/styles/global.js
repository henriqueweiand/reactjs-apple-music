import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
 @import url('https://fonts.googleapis.com/css?family=Lato');
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  html, body, #root {
    height: 100%;
  }
  body {
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    font-family: 'Lato', sans-serif;
  }
`;

export default GlobalStyle;
