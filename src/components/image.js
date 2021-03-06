import React from "react"
import styled from "styled-components";
import Img from "gatsby-image"

const StyledImage = styled(Img)`
  margin-top: 36px;
  margin-bottom: 0px;
  overflow-x: hidden;
  position: relative;
  padding: 0;
`;

const Image = ({ fixed, fluid }) => (
  <StyledImage fixed={fixed} fluid={fluid} fadeIn={false}/>
)
export default Image