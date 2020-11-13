import React from "react"
import styled from "styled-components";
import Image from "../components/image"

const Wrapper = styled.div`
`;

const Content = styled.p`
  font-family: Work Sans, sans serif;
  font-weight: 500;
  font-size: 42px;
  line-height: 54px;
  margin: 0;
`

const Intro = ({ fixed }) => (
  <Wrapper>
    <Content>Product Designer, Typographer</Content>
    <Content>& Letterpress Printer</Content>
    <Image fixed={fixed} />
  </Wrapper>
)

export default Intro
