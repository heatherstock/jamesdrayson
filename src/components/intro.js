import React from "react"
import styled from "styled-components";
import Image from "../components/image"

const Wrapper = styled.div`
`;

const Content = styled.p`
@media (max-width: 899px) {
  font-size: 30px;
  line-height: 42px;
}
  font-family: Work Sans, sans serif;
  font-weight: 500;
  font-size: 36px;
  line-height: 48px;
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
