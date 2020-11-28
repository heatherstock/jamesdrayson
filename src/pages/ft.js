import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import * as _ from "../components/sharedStyles"
import Layout from "../components/layout"
import Image from "../components/image"

const FinancialTimes = () => {
  const data = useStaticQuery(graphql`
    query {
      barrierMobile01: file(relativePath: { eq: "ft-barrier-mobile-01.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      barrierMobile02: file(relativePath: { eq: "ft-barrier-mobile-02.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      barrierMobile03: file(relativePath: { eq: "ft-barrier-mobile-03.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      barrierDesktop01: file(relativePath: { eq: "ft-barrier-desktop.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      barrierDesktop02: file(relativePath: { eq: "ft-barrier-bottom-desktop.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      dynamicBarrier01: file(relativePath: { eq: "ft-barrier-dynamic-world-desktop.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      dynamicBarrier02: file(relativePath: { eq: "ft-barrier-dynamic-crypto-desktop.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cookieMessage: file(relativePath: { eq: "ft-cookie-message-desktop.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      settings: file(relativePath: { eq: "ft-settings.png" }) {
        childImageSharp {
          fixed(width: 1385, height: 701) {
            ...GatsbyImageSharpFixed
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
          <_.Heading>Financial Times</_.Heading>
          <_.Text>Working across several streams within Product & Technology, including Acquisition and GPDR. Working closely with developers, product owners, the legal team and stakeholders to successfully meet a number of briefs. For GDPR I worked on a number of initiatives to help the FT become compliant while ensuring any new controls and pages required were concise and fully accessible. Throughout my time at the FT I worked very closely with the Origami team to define and maintain a component library for use by both internal and external products, including FT.com and the Apps. Most recently, I was defining a new design system and exploring how we encourage more designers and developers to use the libraries, while also considering core experience and championing accessibility.</_.Text>
          <_.Div>
            <_.MobileImages><Image fluid={data.barrierMobile01.childImageSharp.fluid} /></_.MobileImages>
            <_.MobileImages><Image fluid={data.barrierMobile02.childImageSharp.fluid} /></_.MobileImages>
            <_.MobileImages><Image fluid={data.barrierMobile03.childImageSharp.fluid} /></_.MobileImages>
          </_.Div>
          <Image fluid={data.barrierDesktop01.childImageSharp.fluid} />
          <Image fluid={data.barrierDesktop02.childImageSharp.fluid} />
          <Image fluid={data.dynamicBarrier01.childImageSharp.fluid} />
          <Image fluid={data.dynamicBarrier02.childImageSharp.fluid} />
          <Image fluid={data.cookieMessage.childImageSharp.fluid} />
          <Image fixed={data.settings.childImageSharp.fixed} />
          <_.List>
            {data.site.siteMetadata.workLinks.map(link => (
              link.name === 'Financial Times'
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

export default FinancialTimes