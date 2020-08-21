import { Link } from "gatsby"
import React from "react"
import styled from "styled-components";

const Wrapper = styled.div`

`;

const Heading = styled.h1`
margin: auto 20px;
`

const Portfolio = () => (
  <Wrapper>
    <Heading><a id='portfolio'>Portfolio</a></Heading>
  </Wrapper>
)

export default Portfolio