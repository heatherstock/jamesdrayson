import React from "react"
import { Link } from "gatsby"
import styled from "styled-components";
import Image from "../components/image"

const Wrapper = styled.div`
padding-bottom: 72px;
border-bottom: 3px solid black;
`;

const Heading = styled.h1`
  margin-left: 12px;
  margin: 0;
  margin-bottom: 12px;
  color: black;
`

const ContactLink = styled(Link)`
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

const Contact = ({ contactLinks, fluid }) => (
  <Wrapper>
    <Heading id='contact'>Contact</Heading>
    <List>
      {contactLinks.map(link => (
        <ListItem key={link.name}>/
          {link.link 
          ? <ContactLink to={link.link} target='_blank'>{link.name}</ContactLink>
          : <ContactLink href={link.href}>{link.name}</ContactLink>
        }
        </ListItem>
      ))}
    </List>
    <Image fluid={fluid} />
  </Wrapper>
)

export default Contact