import "typeface-work-sans";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: auto;
    font-family: Work Sans, 'sans serif';
    position: relative;
    min-height: 100vh;
    max-width: 100%;
    color: black;
    font-weight: 800;
    line-height: 32px;
    background: #e4e4e4;
  }
  h1, h2, h3 {
    font-family: Work Sans, 'sans serif';
    color: #4d66ff;
    font-weight: 800;
  }
`;