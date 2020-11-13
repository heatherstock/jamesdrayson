import React from "react"
import styled from "styled-components";

const Wrapper = styled.footer`
position: absolute;
width: 100%;
height: 48px;
padding-bottom: 36px;
padding-left: 72px;
`;

const ListItem = styled.div`
  font-family: Work Sans, sans serif;
  font-weight: 500;
  font-size: 36px;
  line-height: 48px;
  list-style-type: none;
`;

const Footer = ({ contactLinks }) => (
  <Wrapper>
    <ListItem>©{new Date().getFullYear()} James Drayson</ListItem>
  </Wrapper>
)

export default Footer