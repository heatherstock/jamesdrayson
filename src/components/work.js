import React from "react"
import styled from "styled-components";
import { Link } from "gatsby"
import Image from "../components/image"

const Wrapper = styled.div`
  margin-bottom: 60px;
`;

const Heading = styled.h1`
  font-family: Work Sans, sans serif;
  font-weight: 500;
  margin-left: 12px;
  font-size: 42px;
  line-height: 60px;
  margin: 0;
  color: black;
`

const StyledLink = styled(Link)`
  font-family: Work Sans, sans serif;
  font-weight: 500;
  font-size: 42px;
  line-height: 60px;
  padding-bottom: 2px;
  color: black;
  text-decoration: none;
  border-bottom: 4px solid black;
  margin-left: 12px;
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
  font-size: 42px;
  line-height: 60px;
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