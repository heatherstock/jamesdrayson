import React from "react"
import styled from "styled-components";
import { Link } from "gatsby"
import Img from "gatsby-image"

const Wrapper = styled.div`
  display: grid;
  column-gap: 31px;
  row-gap: 0;
  grid-template: auto/repeat(12,1fr);
  grid-auto-flow: row;
  overflow: hidden;
`;

const Project = styled.div`
  grid-column: span 6;
`

export const Subtitle = styled.h2`
  margin: 8px 0;
  font-size: 42px;
  line-height: 56px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    text-decoration-color: #4d66ff;
  }
`;

export const ProjectImage = styled(Img)`
  height: 375px;
  margin-bottom: 8px;
`;

const Heading = styled.h1`
grid-column: span 12;
margin: 8px 0;
font-size: 42px;
line-height: 56px;
`

const Portfolio = ({ edges }) => (
  <Wrapper>
    <Heading id='portfolio'>Portfolio</Heading>
    <Project>
      <StyledLink to={edges[0].node.fields.slug}>
        <Subtitle>{edges[0].node.frontmatter.title}</Subtitle>
      </StyledLink>
      <ProjectImage fluid={edges[0].node.frontmatter.featuredImage.childImageSharp.fluid} />
    </Project>
    <Project>
    <StyledLink to={edges[1].node.fields.slug}>
        <Subtitle>{edges[1].node.frontmatter.title}</Subtitle>
      </StyledLink>
      <ProjectImage fluid={edges[1].node.frontmatter.featuredImage.childImageSharp.fluid} />
    </Project>
    <Project>
    <StyledLink to={edges[2].node.fields.slug}>
        <Subtitle>{edges[2].node.frontmatter.title}</Subtitle>
      </StyledLink>
      <ProjectImage fluid={edges[2].node.frontmatter.featuredImage.childImageSharp.fluid} />
    </Project>
    <Project>
    <StyledLink to={edges[3].node.fields.slug}>
        <Subtitle>{edges[3].node.frontmatter.title}</Subtitle>
      </StyledLink>
      <ProjectImage fluid={edges[3].node.frontmatter.featuredImage.childImageSharp.fluid} />
    </Project>
  </Wrapper>
)

export default Portfolio