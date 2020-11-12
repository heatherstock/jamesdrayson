import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Work from "../components/work"
import Intro from "../components/intro"
import About from "../components/about"
import Contact from "../components/contact"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
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
      <Layout>
        <Intro />
        <About />
        <Work edges={data.allMarkdownRemark.edges}/>
        <Contact />
      </Layout>
    </>
  )
}

export default IndexPage
