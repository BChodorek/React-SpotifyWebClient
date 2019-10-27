import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,600');

  *, *::before, *::after {
    box-sizing: border-box;
    margin:0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
  }

  html {
    font-size: 62.5%;
    background: rgb(0,0,0);
    background: -moz-linear-gradient(308deg, rgba(0,0,0,1) 0%, rgba(22,48,26,1) 64%, rgba(103,165,103,1) 100%);
    background: -webkit-linear-gradient(308deg, rgba(0,0,0,1) 0%, rgba(22,48,26,1) 64%, rgba(103,165,103,1) 100%);
    background: linear-gradient(308deg, rgba(0,0,0,1) 0%, rgba(22,48,26,1) 64%, rgba(103,165,103,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#000000",endColorstr="#67a567",GradientType=1);
    background-attachment:fixed;
    @media(max-width:767px) {
      font-size:8px;
    }
  }

  body {
    margin: 0;
    min-height: 100%;
    font-size: 1.4rem;
    font-weight: 300;
    color: #fff;

  }

`;
