import React from "react"
import styled from "styled-components";

const Wrapper = styled.div`

`;

const Content = styled.p`
  font-family: Work Sans, sans serif;
  font-weight: 500;
  font-size: 48px;
  line-height: 64px;
  margin: 0;
`

const Intro = () => (
  <Wrapper>
    <Content>—</Content>
    <Content>Product Designer,</Content>
    <Content>Typographer</Content>
    <Content>& Letterpress Printer</Content>
  </Wrapper>
)

export default Intro
