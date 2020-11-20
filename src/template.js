import React from "react"
import styled from "styled-components"
import { graphql, Link } from "gatsby"
import Layout from "./components/layout"
import { GlobalStyle } from "./theme";

export default ({ data }) => {
  const Heading = styled.h1`
  margin-top: 6px;
  margin-bottom: 12px;
  font-size: 36px;
  line-height: 48px;
  color: black;
`;

const Wrapper = styled.div`
  padding-bottom: 72px;
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
  &: focus {
    border-bottom: 6px solid black;
    background-color: #ccc;
    outline: none;
  }
`;

const List = styled.ul`
display: flex;  
flex-wrap: wrap;
  margin: 0;
  padding-left: 0px;
`;

const ListItem = styled.li`
  padding: 0 6px;
  font-family: Work Sans, sans serif;
  font-weight: 500;
  font-size: 36px;
  line-height: 48px;
  list-style-type: none;
`;

  return (
    <>
    <GlobalStyle />
    <Layout>
      <Wrapper>
        <Heading>{data.markdownRemark.frontmatter.title}</Heading>
        <Text dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
        <List>
          {data.allMarkdownRemark.edges.map(edge => (
            edge.node.frontmatter.title === data.markdownRemark.frontmatter.title
            ? null
            : <ListItem key={edge.node.frontmatter.title}>/
                <StyledLink to={edge.node.fields.slug}>{edge.node.frontmatter.title}</StyledLink>
              </ListItem>
          ))}
        </List>
      </Wrapper>
    </Layout>
    </ >
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
    allMarkdownRemark(sort: {order: ASC, fields: frontmatter___display}) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`