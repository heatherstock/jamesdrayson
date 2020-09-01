import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Portfolio from "../components/portfolio"
import About from "../components/about"
import { GlobalStyle } from "../theme";

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      file (relativePath: { eq: "capybara.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      allMarkdownRemark(sort: {order: ASC, fields: frontmatter___display}) {
        totalCount
        edges {
          node {
            id
            frontmatter {
              title
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  return (
    <>
    <GlobalStyle />
      <Layout home={true}>
        <Img fluid={data.file.childImageSharp.fluid} />
        <About />
        <Portfolio edges={data.allMarkdownRemark.edges}/>
      </Layout>
    </>
  )
}

export default IndexPage
