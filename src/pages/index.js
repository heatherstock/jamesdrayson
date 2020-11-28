import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Intro from "../components/intro"
import About from "../components/about"
import Work from "../components/work"
import Contact from "../components/contact"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      printersFist: file(relativePath: { eq: "james-drayson-drayson-and-stock-printer's-fist.png" }) {
        childImageSharp {
          fixed(width: 434, height: 1238) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      ft: file(relativePath: { eq: "james-drayson-ft-barrier.png" }) {
        childImageSharp {
          fixed(width: 1551, height: 785) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      breakfast: file(relativePath: { eq: "james-drayson-drayson-and-stock-make-breakfast-a-success.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
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
          workLinks {
            name
            link
          }
        }
      }
    }
  `)

  return (
      <Layout>
        <Intro fixed={data.printersFist.childImageSharp.fixed} />
        <About />
        <Work workLinks={data.site.siteMetadata.workLinks} fixed={data.ft.childImageSharp.fixed}/>
        <Contact contactLinks={data.site.siteMetadata.contactLinks} fluid={data.breakfast.childImageSharp.fluid}/>
      </Layout>
  )
}

export default IndexPage
