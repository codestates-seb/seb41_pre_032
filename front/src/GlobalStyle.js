import { createGlobalStyle } from "styled-components"

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
      padding : 50px 0 0;
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
`
export default GlobalStyle;