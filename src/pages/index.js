import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "../components/image"
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
      file(relativePath: { eq: "printer's-fist.png" }) {
        childImageSharp {
          fixed(width: 434, height: 1238) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <>
      <Layout>
        <Intro />
        <Image fixed={data.file.childImageSharp.fixed} />
        <About />
        <Work edges={data.allMarkdownRemark.edges}/>
        <Contact />
      </Layout>
    </>
  )
}

export default IndexPage
