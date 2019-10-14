import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600');

  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    background: #213e66;
    background: -moz-linear-gradient(left,  hsl(215,51%,27%) 0%, hsl(0,0%,17%) 100%);
    background: -webkit-linear-gradient(left,  hsl(215,51%,27%) 0%,hsl(0,0%,17%) 100%);
    background: linear-gradient(to right,  hsl(215,51%,27%) 0%,hsl(0,0%,17%) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#213e66', endColorstr='#2b2b2b',GradientType=1 );
  }

  body {
    margin:0;
    padding: 0;
    font-family: 'Open Sans', sans-serif;
    font-size: 1.4rem;
    font-weight: 300;
    color: #fff;
  }

`;
