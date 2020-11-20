import React from "react"
import styled from "styled-components";
import { Link } from "gatsby"
import Image from "../components/image"

const Wrapper = styled.div`
  margin-bottom: 60px;
`;

const Heading = styled.h1`
  margin-left: 12px;
  font-size: 36px;
  line-height: 48px;
  margin: 0;
  margin-bottom: 12px;
  color: black;
`

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
`;

const ListItem = styled.li`
  padding: 0 6px;
  font-family: Work Sans, sans serif;
  font-weight: 500;
  font-size: 36px;
  line-height: 48px;
  list-style-type: none;
`;

const Work = ({ edges, fixed }) => (
  <Wrapper>
    <Heading id='work'>Work</Heading>
    <List>
      {edges.map(edge => (
        <ListItem key={edge.node.frontmatter.title}>/
          <StyledLink to={edge.node.fields.slug}>{edge.node.frontmatter.title}</StyledLink>
        </ListItem>
      ))}
    </List>
    <Image fixed={fixed} />
  </Wrapper>
)

export default Work