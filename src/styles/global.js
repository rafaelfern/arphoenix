import { createGlobalStyle } from 'styled-components';
// import Background from '../imgs/bg.png';
// background-image: url(${Background});

export default createGlobalStyle`

  * {
    margin:0;
    padding:0;
    outline:0;
    box-sizing:border-box;
  }
  html, body, #root{
    min-height:100%;
    --background-color: #e6e6e6;
  }
  body {
    -webkit-font-smoothing: antialiased !important;
    background-color:var(--background-color);
    
    background-size:100% auto;
    background-position:center;
    font-family: 'Signika', sans-serif;
    background-attachment: fixed;
  }
  h1,h2,h3,h4 {
    color: #0a7a73;
  }
  @media (max-width: 768px) {
    body{
      background-size:auto 100%;
    }
  }
`;
