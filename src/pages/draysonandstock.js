import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import * as _ from "../components/sharedStyles"
import Layout from "../components/layout"
import Image from "../components/image"

const DraysonAndStock = () => {
  const data = useStaticQuery(graphql`
    query {
      breakfast: file(relativePath: { eq: "james-drayson-drayson-and-stock-make-breakfast-a-success.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      arrowCardFront: file(relativePath: { eq: "drayson-and-stock-arrow-card-front.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      arrowCardBack: file(relativePath: { eq: "drayson-and-stock-arrow-card-back.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      noticeCard: file(relativePath: { eq: "drayson-and-stock-notice.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      happyBelatedCard: file(relativePath: { eq: "drayson-and-stock-happy-belated.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      lookReadPoster01: file(relativePath: { eq: "drayson-and-stock-poster-01.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      lookReadPoster02: file(relativePath: { eq: "drayson-and-stock-poster-02.png" }) {
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
          <_.Heading>Drayson & Stock</_.Heading>
          <_.Text>Setting up and running a design and letterpress studio. Working on a range of projects, including the design of a full set of icons for the Financial Times to use on the new ft.com, printing letterpress invitations for Intelligent Life Magazine, and the branding of a number for small companies. Designing and printing letterpress printed products.</_.Text>
          <Image fluid={data.breakfast.childImageSharp.fluid} />
          <_.Div>
          <_.CardImages><Image fluid={data.arrowCardBack.childImageSharp.fluid} /></_.CardImages>
          <_.CardImages><Image fluid={data.arrowCardFront.childImageSharp.fluid} /></_.CardImages>
          </_.Div>
          <_.Div>
          <_.CardImages><Image fluid={data.noticeCard.childImageSharp.fluid} /></_.CardImages>
          <_.CardImages><Image fluid={data.happyBelatedCard.childImageSharp.fluid} /></_.CardImages>
          </_.Div>
          <Image fluid={data.lookReadPoster01.childImageSharp.fluid} />
          <Image fluid={data.lookReadPoster02.childImageSharp.fluid} />
          <_.List>
            {data.site.siteMetadata.workLinks.map(link => (
              link.name === 'Drayson & Stock'
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

export default DraysonAndStock
