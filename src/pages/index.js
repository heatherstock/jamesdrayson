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
      printersFist: file(relativePath: { eq: "printer's-fist.png" }) {
        childImageSharp {
          fixed(width: 434, height: 1238) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      ft: file(relativePath: { eq: "FT-barrier-homepage.png" }) {
        childImageSharp {
          fixed(width: 1551, height: 785) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      breakfast: file(relativePath: { eq: "make-breakfast.png" }) {
        childImageSharp {
          fixed(width: 1296, height: 810) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          contactLinks {
            name
            href
            link
          }
        }
      }
    }
  `)

  return (
    <>
      <Layout>
        <Intro fixed={data.printersFist.childImageSharp.fixed} />
        <About />
        <Work edges={data.allMarkdownRemark.edges} fixed={data.ft.childImageSharp.fixed}/>
        <Contact contactLinks={data.site.siteMetadata.contactLinks} fixed={data.breakfast.childImageSharp.fixed}/>
      </Layout>
    </>
  )
}

export default IndexPage
