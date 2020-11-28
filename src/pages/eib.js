import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import * as _ from "../components/sharedStyles"
import Layout from "../components/layout"
import Image from "../components/image"

const EIB = () => {
  const data = useStaticQuery(graphql`
    query {
      piercy01: file(relativePath: { eq: "everything-in-between-piercy-01.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      piercy02: file(relativePath: { eq: "everything-in-between-piercy-02.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      piercy03: file(relativePath: { eq: "everything-in-between-piercy-03.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      site {
        siteMetadata {
          workLinks {
            name
            link
          }
        }
      }
    }
  `)

  return (
    <>
      <Layout>
      <_.Wrapper>
        <_.Heading>Everything In Between</_.Heading>
        <_.Text>As a designer working as part of small team on a wide range of projects from branding and signage to digital design.</_.Text>
             <Image fluid={data.piercy01.childImageSharp.fluid} />
             <Image fluid={data.piercy02.childImageSharp.fluid} />
             <Image fluid={data.piercy03.childImageSharp.fluid} />
        <_.List>
            {data.site.siteMetadata.workLinks.map(link => (
              link.name === 'Everything In Between'
              ? null
              : <_.ListItem key={link.name}>/
              <_.StyledLink to={link.link}>{link.name}</_.StyledLink>
            </_.ListItem>
            ))}
          </_.List>
        </_.Wrapper>
      </Layout>
    </>
  )
}

export default EIB
