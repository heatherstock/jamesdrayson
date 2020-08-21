import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import Img from "gatsby-image"

export default ({ data }) => {
  const Heading = styled.h1`
  @media (max-width: 399px) {
    font-size: 36px;
    line-height: 42px;
  }
  padding: 16px 0;;
  font-size: 42px;
  line-height: 48px;

`;

const Wrapper = styled.div`
  max-width: 80ch;
  margin: auto;
`;

const Text = styled.div`
@media (max-width: 399px) {
  font-size: 17px;
  line-height: 24px;
}
  font-size: 19px;
  line-height: 30px;
`;

  return (
      <Wrapper>
        <Heading>{data.markdownRemark.frontmatter.title}</Heading>
        <Img fluid={data.markdownRemark.frontmatter.featuredImage.childImageSharp.fluid} />
        <Text dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
      </Wrapper>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`