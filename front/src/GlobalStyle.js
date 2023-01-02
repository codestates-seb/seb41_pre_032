import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
:root {
    --main-color: hsl(27,90%,55%);
    --font-color:  #232629;
    --background-color: hsl(210,8%,97.5%);
  }
  * {box-sizing : border-box}
  html {
      font-size: 62.5%;
  }
  body {
      margin : 0;
      font-size:1.6rem; 
      color:var(--font-color);
  }
  ul,ol {
      list-style: none;
      margin:0;
      padding:0;
  }
  a {
      color:var(--font-color);
      text-decoration: none;
      margin:0;
      padding:0;
  }
  p, h1, h2, h3, h4, h5 {
    margin:0;
    padding:0;
  }
  .button-ask-question {
    background-color: hsl(206, 100%, 52%);
    border: 1px solid transparent;
    border-radius: 3px;
    box-shadow: inset 0 1px 0 0hsla (0, 0%, 100%, 0.4);
    color: white;
    font-size: 13px;
    padding: 0.8em;
    cursor: pointer;
    display: inline-block;
    font-weight: normal;
    line-height: calc((13+2) / 13);
    position: relative;
    outline: none;
  }
`;
export default GlobalStyle;
