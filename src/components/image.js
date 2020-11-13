import React from "react"
import styled from "styled-components";
import Img from "gatsby-image"

const StyledImage = styled(Img)`
  margin-top: 36px;
  margin-bottom: 0px;
`;

const Image = ({ fixed }) => (
  <StyledImage fixed={fixed} />
)
export default Image