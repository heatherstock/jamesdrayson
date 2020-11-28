import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import * as _ from "../components/sharedStyles"
import Layout from "../components/layout"
import Image from "../components/image"

const Tes = () => {
  const data = useStaticQuery(graphql`
    query {
      portalToPayForm: file(relativePath: { eq: "tes-portal-to-pay-form.png" }) {
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
        <_.Heading>TES</_.Heading>
        <_.Text>Working on a number of a remote cross-functional teams across the various Tes products. In this role I have also continued to build on the previous success of the Tes Design System and continue to improve it.</_.Text>
        <Image fluid={data.portalToPayForm.childImageSharp.fluid} />
        <_.List>
            {data.site.siteMetadata.workLinks.map(link => (
              link.name === 'TES'
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

export default Tes
