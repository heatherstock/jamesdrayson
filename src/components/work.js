import React from "react"
import styled from "styled-components";
import { Link } from "gatsby"

const Wrapper = styled.div`
  overflow: hidden;
  margin-bottom: 20px;
`;

const Project = styled.div`
margin: 0;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 72px;
  line-height: 112px;
  color: #4d66ff;
  border-bottom: 12px solid #4d66ff;
  margin: 0;
`;

const Heading = styled.h1`
margin: 0;
font-size: 42px;
line-height: 56px;
color: black;
`

const Work = ({ edges }) => (
  <Wrapper>
    <Heading id='work'>Selected work:</Heading>
      <Project>
        <StyledLink to={edges[0].node.fields.slug}>{edges[0].node.frontmatter.title}</StyledLink>
      </Project>
      <Project>
        <StyledLink to={edges[1].node.fields.slug}>{edges[1].node.frontmatter.title}</StyledLink>
      </Project>
      <Project>
        <StyledLink to={edges[2].node.fields.slug}>{edges[2].node.frontmatter.title}</StyledLink>
      </Project>
      <Project>
        <StyledLink to={edges[3].node.fields.slug}>{edges[3].node.frontmatter.title}</StyledLink>
      </Project>
      <Project>
        <StyledLink to={edges[4].node.fields.slug}>{edges[4].node.frontmatter.title}</StyledLink>
      </Project>
  </Wrapper>
)
// tes, draysonandstock, ft, economist, everythinginbetween
export default Work