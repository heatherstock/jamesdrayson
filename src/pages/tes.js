import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import Image from "../components/image"

const Tes = () => {
  const Heading = styled.h1`
  margin-top: 6px;
  padding-bottom: 12px;
  color: black;
`;

const Wrapper = styled.div`
  padding-bottom: 36px;
  border-bottom: 3px solid black; 
`;

const Text = styled.p`
margin-top: -24px;
`;

const StyledLink = styled(Link)`
@media (max-width: 899px) {
  font-size: 30px;
  line-height: 42px;
}
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
@media (max-width: 899px) {
  font-size: 30px;
  line-height: 42px;
}
  padding: 0 6px;
  font-family: Work Sans, sans serif;
  font-weight: 500;
  font-size: 36px;
  line-height: 48px;
  list-style-type: none;
`;

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
      <Wrapper>
        <Heading>TES</Heading>
        <Text>Working on a number of a remote cross-functional teams across the various Tes products. In this role I have also continued to build on the previous success of the Tes Design System and continue to improve it.</Text>
        <Image fluid={data.portalToPayForm.childImageSharp.fluid} />
        <List>
            {data.site.siteMetadata.workLinks.map(link => (
              link.name === 'TES'
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

export default Tes
