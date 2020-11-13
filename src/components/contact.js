import React from "react"
import { Link } from "gatsby"
import styled from "styled-components";
import Image from "../components/image"

const Wrapper = styled.div`
padding-bottom: 72px;
border-bottom: 4px solid black;
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

const ContactLink = styled(Link)`
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

const Contact = ({ contactLinks, fixed }) => (
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
    <Image fixed={fixed} />
  </Wrapper>
)

export default Contact