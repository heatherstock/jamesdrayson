import React from "react"
import styled from "styled-components";

const Wrapper = styled.div`
background-color: #4d66ff
`;

const Heading = styled.h2`
color: black;
padding: 200px 20px;
`

const Contact = () => (
  <Wrapper>
    <Heading id='contact'>Get in touch</Heading>
  </Wrapper>
)

export default Contact