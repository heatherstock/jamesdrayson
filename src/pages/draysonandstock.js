import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import Image from "../components/image"

const DraysonAndStock = () => {
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
      breakfast: file(relativePath: { eq: "james-drayson-drayson-and-stock-make-breakfast-a-success.png" }) {
        childImageSharp {
          fixed(width: 1296, height: 734) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      arrowCardFront: file(relativePath: { eq: "drayson-and-stock-arrow-card-front.png" }) {
        childImageSharp {
          fixed(width: 1296, height: 734) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      arrowCardBack: file(relativePath: { eq: "drayson-and-stock-arrow-card-back.png" }) {
        childImageSharp {
          fixed(width: 1296, height: 734) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      noticeCard: file(relativePath: { eq: "drayson-and-stock-notice.png" }) {
        childImageSharp {
          fixed(width: 1296, height: 734) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      happyBelatedCard: file(relativePath: { eq: "drayson-and-stock-happy-belated.png" }) {
        childImageSharp {
          fixed(width: 1296, height: 734) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      lookReadPoster01: file(relativePath: { eq: "drayson-and-stock-poster-01.png" }) {
        childImageSharp {
          fixed(width: 1296, height: 734) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      lookReadPoster02: file(relativePath: { eq: "drayson-and-stock-poster-02.png" }) {
        childImageSharp {
          fixed(width: 1296, height: 734) {
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
          <Heading>Drayson & Stock</Heading>
          <Text>Setting up and running a design and letterpress studio. Working on a range of projects, including the design of a full set of icons for the Financial Times to use on the new ft.com, printing letterpress invitations for Intelligent Life Magazine, and the branding of a number for small companies. Designing and printing letterpress printed products.</Text>
          <Image fixed={data.breakfast.childImageSharp.fixed} />
          <Image fixed={data.arrowCardFront.childImageSharp.fixed} />
          <Image fixed={data.arrowCardBack.childImageSharp.fixed} />
          <Image fixed={data.noticeCard.childImageSharp.fixed} />
          <Image fixed={data.happyBelatedCard.childImageSharp.fixed} />
          <Image fixed={data.lookReadPoster01.childImageSharp.fixed} />
          <Image fixed={data.lookReadPoster02.childImageSharp.fixed} />
          <List>
            {data.site.siteMetadata.workLinks.map(link => (
              link.name === 'Drayson & Stock'
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

export default DraysonAndStock
