import "typeface-work-sans";
import "fontsource-libre-baskerville"
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    @media (max-width: 899px) {
      font-size: 20px;
      line-height: 32px;
    }
    font-size: 24px;
    line-height: 36px;
    margin: 0px;
    font-family: Libre Baskerville, serif;
    overflow-x: hidden;
    position: relative;
    min-height: 100vh;
    color: black;
    font-weight: 400;
    background: #eeeeee;
  }
  h1{
    @media (max-width: 899px) {
      font-size: 30px;
      line-height: 42px;
    }
    font-size: 36px;
    line-height: 48px;
    font-family: Work Sans, 'sans serif';
    color: #black;
    font-weight: 500;
  }
  * {
    outline: 1px red solid !important; visibility: visible !important;
  }
`;