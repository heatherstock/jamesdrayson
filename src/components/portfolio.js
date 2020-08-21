import React from "react"
import styled from "styled-components";
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

`;

export const ProjectImage = styled(Img)`
  height: 375px;
  margin-bottom: 8px;
`;

const Heading = styled.h1`
grid-column: span 12;
`

const Portfolio = () => (
  <Wrapper>
  <Heading><a id='portfolio'>Portfolio</a></Heading>
    <Project>
      <Subtitle>Project 1</Subtitle>
    </Project>
    <Project>
      <Subtitle>Project 2</Subtitle>
    </Project>
    <Project>
      <Subtitle>Project 3</Subtitle>
    </Project>
    <Project>
      <Subtitle>Project 4</Subtitle>
    </Project>
  </Wrapper>
)

export const query = graphql`
  query {
    file (relativeDirectory: {eq: "images"}) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default Portfolio