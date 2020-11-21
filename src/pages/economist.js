import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"

const Economist = () => {
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
          <Heading>The Economist</Heading>
          <Text>Working as part of a cross functional team designing for the master brand including ‘The World If’ (both the 2015 and 2016 editions) and ‘Technology Quarterly’ sub brands, and its sister publication The World In. Working closely with other designers, UX and developers to iterate on design concepts to ensure fully responsive solutions to briefs set by both the Creative Digital Art Director and editorial were realised. Designing social media templates, working with the New York City office to ensure The Economist’s presence on ‘Facebook Instant Articles’ was on brand, and helping to create a more immersive experience for readers of The Economist’s ‘Essays’ and it’s other long form content.</Text>
          <List>
            {data.site.siteMetadata.workLinks.map(link => (
              link.name === 'The Economist'
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

export default Economist