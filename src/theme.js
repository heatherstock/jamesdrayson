import "typeface-work-sans";
import "fontsource-libre-baskerville"
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0px;
    font-family: Libre Baskerville, serif;
    overflow-x: hidden;
    position: relative;
    min-height: 100vh;
    max-width: 100%;
    color: black;
    font-weight: 400;
    line-height: 32px;
    background: #eeeeee;
  }
  h1, h2, h3 {
    font-family: Work Sans, 'sans serif';
    color: #black;
    font-weight: 500;
  }
`;