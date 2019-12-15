import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Raleway:300,400,600&display=swap');
  *, *::before, *::after {
    box-sizing: border-box;
    margin:0;
    padding: 0;
    font-family: 'Raleway', sans-serif;
  }

  html {
    font-size: 62.5%;
    background: rgb(0,0,0);
    background: #134E5E;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #71B280, #134E5E);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #71B280, #134E5E); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    background-attachment:fixed;
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#000000",endColorstr="#67a567",GradientType=1);
  }

  body {
    margin: 0;
    min-height: 100%;
    font-size: 1.4rem;
    font-weight: 300;
    color: #fff;

  }

`;
