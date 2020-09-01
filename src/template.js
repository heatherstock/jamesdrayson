import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import Layout from "./components/layout"
import { GlobalStyle } from "./theme";

export default ({ data }) => {
  const Heading = styled.h1`
  font-size: 42px;
  line-height: 56px;

`;

const Wrapper = styled.div`
  max-width: 80ch;
  margin: auto;
`;

const Text = styled.p`

`;

  return (
    <>
    <GlobalStyle />
    <Layout>
      <Wrapper>
        <Heading>{data.markdownRemark.frontmatter.title}</Heading>
        <Text dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
      </Wrapper>
    </Layout>
    </ >
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`