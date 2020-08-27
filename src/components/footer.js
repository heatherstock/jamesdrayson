import { Link } from "gatsby"
import React from "react"
import styled from "styled-components";

const Wrapper = styled.footer`
position: absolute;
display: flex;
align-items: center;
justify-content: center;
bottom: 0;
width: 100%;
height: 56px;
border-top: 1px solid #154726;
`;

const Heading = styled.h2`
margin: auto 20px;
`

const ContactLink = styled(Link)`
color: black;
text-decoration: none;
&:hover {
  text-decoration: underline;
  text-decoration-color: #154726;
}
`

const List = styled.ul`
display: flex;
flex: 1;
`;

const ListItem = styled.li`
  margin: auto 20px;
  list-style-type: none;
`;

const Footer = ({ contactLinks }) => (
  <Wrapper>
    <div>
        <List>
          <Heading id='contact'>Contact</Heading>
          {contactLinks.map(link => (
            <ListItem key={link.name}>
              {link.link 
              ? <ContactLink to={link.link} target='_blank'>{link.name}</ContactLink>
              : <ContactLink href={link.href}>{link.name}</ContactLink>
            }
            </ListItem>
          ))}
          <ListItem>©{new Date().getFullYear()} James Drayson</ListItem>
        </List>
        </div>
  </Wrapper>
)

export default Footer