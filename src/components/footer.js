import React from "react"
import styled from "styled-components";

const Wrapper = styled.footer`
@media (max-width: 599px) {
  padding-left: 18px;
}
@media (min-width: 600px) and (max-width: 899px) {
  padding-left: 36px;
}
position: absolute;
height: 48px;
padding-bottom: 36px;
padding-left: 72px;
display: flex;
align-items: left;
`;

const ListItem = styled.div`
@media (max-width: 899px) {
  font-size: 30px;
  line-height: 42px;
}
  font-family: Work Sans, sans serif;
  font-weight: 500;
  font-size: 36px;
  line-height: 48px;
  list-style-type: none;
`;

const Footer = () => (
  <Wrapper>
    <ListItem>©{new Date().getFullYear()} James Drayson</ListItem>
  </Wrapper>
)

export default Footer