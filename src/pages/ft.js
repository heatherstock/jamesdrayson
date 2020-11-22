import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import Image from "../components/image"

const FinancialTimes = () => {
  const Heading = styled.h1`
  margin-top: 6px;
  padding-bottom: 12px;
  font-size: 36px;
  line-height: 48px;
  color: black;
`;

const Wrapper = styled.div`
  padding-bottom: 36px;
  border-bottom: 3px solid black; 
`;

const Text = styled.p`
font-weight: 400;
font-size: 24px;
line-height: 36px;
margin-top: -24px;
`;

const StyledLink = styled(Link)`
  font-family: Work Sans, sans serif;
  font-weight: 500;
  font-size: 36px;
  line-height: 48px;
  padding-bottom: 2px;
  color: black;
  text-decoration: none;
  border-bottom: 3px solid black;
  margin-left: 12px;
  &:visited {
    border-bottom: 3px solid #777;
    color: #777;
  }
  &:hover {
    color: black;
    border-bottom: none;
  }
  &: active {
    border-bottom: 3px solid black;
  }
`;

const List = styled.ul`
display: flex;  
flex-wrap: wrap;
  margin: 0;
  padding-left: 0px;
  padding-top: 36px;
`;

const ListItem = styled.li`
  padding: 0 6px;
  font-family: Work Sans, sans serif;
  font-weight: 500;
  font-size: 36px;
  line-height: 48px;
  list-style-type: none;
`;

  const data = useStaticQuery(graphql`
    query {
      barrierMobile01: file(relativePath: { eq: "ft-barrier-mobile-01.png" }) {
        childImageSharp {
          fixed(width: 318, height: 682) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      barrierMobile02: file(relativePath: { eq: "ft-barrier-mobile-02.png" }) {
        childImageSharp {
          fixed(width: 318, height: 682) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      barrierMobile03: file(relativePath: { eq: "ft-barrier-mobile-03.png" }) {
        childImageSharp {
          fixed(width: 318, height: 682) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      barrierDesktop01: file(relativePath: { eq: "ft-barrier-desktop.png" }) {
        childImageSharp {
          fixed(width: 1296, height: 734) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      barrierDesktop02: file(relativePath: { eq: "ft-barrier-bottom-desktop.png" }) {
        childImageSharp {
          fixed(width: 1296, height: 734) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      dynamicBarrier01: file(relativePath: { eq: "ft-barrier-dynamic-world-desktop.png" }) {
        childImageSharp {
          fixed(width: 1296, height: 734) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      dynamicBarrier02: file(relativePath: { eq: "ft-barrier-dynamic-crypto-desktop.png" }) {
        childImageSharp {
          fixed(width: 1296, height: 734) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      cookieMessage: file(relativePath: { eq: "ft-cookie-message-desktop.png" }) {
        childImageSharp {
          fixed(width: 1296, height: 734) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      settings: file(relativePath: { eq: "ft-settings.png" }) {
        childImageSharp {
          fixed(width: 1551, height: 785) {
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
        <Wrapper>
          <Heading>Financial Times</Heading>
          <Text>Working across several streams within Product & Technology, including Acquisition and GPDR. Working closely with developers, product owners, the legal team and stakeholders to successfully meet a number of briefs. For GDPR I worked on a number of initiatives to help the FT become compliant while ensuring any new controls and pages required were concise and fully accessible. Throughout my time at the FT I worked very closely with the Origami team to define and maintain a component library for use by both internal and external products, including FT.com and the Apps. Most recently, I was defining a new design system and exploring how we encourage more designers and developers to use the libraries, while also considering core experience and championing accessibility.</Text>
          <Image fixed={data.barrierMobile01.childImageSharp.fixed} style={{paddingRight: 18}} />
          <Image fixed={data.barrierMobile02.childImageSharp.fixed} />
          <Image fixed={data.barrierMobile03.childImageSharp.fixed} />
          <Image fixed={data.barrierDesktop01.childImageSharp.fixed} />
          <Image fixed={data.barrierDesktop02.childImageSharp.fixed} />
          <Image fixed={data.dynamicBarrier01.childImageSharp.fixed} />
          <Image fixed={data.dynamicBarrier02.childImageSharp.fixed} />
          <Image fixed={data.cookieMessage.childImageSharp.fixed} />
          <Image fixed={data.settings.childImageSharp.fixed} />
          <List>
            {data.site.siteMetadata.workLinks.map(link => (
              link.name === 'Financial Times'
              ? null
              : <ListItem key={link.name}>/
              <StyledLink to={link.link}>{link.name}</StyledLink>
            </ListItem>
            ))}
          </List>
        </Wrapper>
      </Layout>
    </>
  )
}

export default FinancialTimes