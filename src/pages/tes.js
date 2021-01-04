import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import * as _ from "../components/sharedStyles"
import Layout from "../components/layout"
import Image from "../components/image"

const Tes = () => {
  const data = useStaticQuery(graphql`
    query {
      portalToPayHomepage: file(relativePath: { eq: "tes-portal-to-pay-homepage.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
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
        <_.Text>Working on a number of Tes products, both internal and customer facing, in remote cross-functional teams. Making use of user insights, user testing and data to inform a wide range of work from low fidelty wireframes and user flows to high fidelty prototypes.    In this role I have also continued to build on and improve the previous success of the Tes Design System, by making it fully accessible and, where possible, simplifying it. Most recently I have been leading a project to create a new design system, ‘Pencil Case’, built from the bottom up with accessibility, responsiveness and core experience at its heart. </_.Text>
        <Image fluid={data.portalToPayHomepage.childImageSharp.fluid} />
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
