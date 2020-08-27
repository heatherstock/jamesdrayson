import { AnchorLink } from "gatsby-plugin-anchor-links";
import { Link } from 'gatsby';
import styled from "styled-components";
import PropTypes from "prop-types";
import React from "react";

const Wrapper = styled.header`
  position: sticky;
  top: 0;
  z-index: 9999;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
`;

const TitleLink = styled(Link)`
@media (max-width: 600px) {
  font-size: 42px;
  line-height: 40px
}
@media (min-width: 600px) {
  font-size: 42px;
  line-height: 40px;
}
  font-family: Work Sans, sans serif;
  font-weight: 800;
  // margin: 16px 0;
  flex: 1;
  color: palevioletred;
  text-decoration: none;
`;

const NavLink = styled(AnchorLink)`
  color: black;
  text-decoration: none;
`;

const List = styled.ul`
  display: flex;
  flex: 1;
`;

const ListItem = styled.li`
@media (max-width: 600px) {
  padding: 0 18px;
}
@media (min-width: 600px) {
  padding: 0 40px;
}
  list-style-type: none;
  // margin-top: 36px;
`;

const Header = ({ siteTitle, menuLinks }) => (
  <Wrapper>
    <TitleLink to="/">{siteTitle}</TitleLink>
    <div>
        <List>
          {menuLinks.map(link => (
            <ListItem key={link.name}>
              <NavLink to={link.link}>{link.name}</NavLink>
            </ListItem>
          ))}
        </List>
        </div>
  </Wrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
