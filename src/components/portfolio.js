import React from "react"
import styled from "styled-components";
import { Link } from "gatsby"

const Wrapper = styled.div`
  display: grid;
  column-gap: 31px;
  row-gap: 0;
  grid-template: auto/repeat(12,1fr);
  grid-auto-flow: row;
  overflow: hidden;
  margin-bottom: 20px;
`;

const Project = styled.div`
  grid-column: span 4;
  padding: 120px 0;
  margin: 10px 0;
  text-align: center;
  background: #4d66ff;
`

export const StyledLink = styled(Link)`
  text-decoration: none;
  margin: 8px 0;
  font-size: 42px;
  line-height: 56px;
  color: black;
  &:hover {
    border-bottom: 6px solid black;
  }
`;

const Heading = styled.h1`
grid-column: span 12;
margin: 8px 0;
font-size: 42px;
line-height: 56px;
color: black;
`

const Portfolio = ({ edges }) => (
  <Wrapper>
    <Heading id='portfolio'>Portfolio</Heading>
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
    <Project>
      <StyledLink to={edges[5].node.fields.slug}>{edges[5].node.frontmatter.title}</StyledLink>
    </Project>
  </Wrapper>
)

export default Portfolio