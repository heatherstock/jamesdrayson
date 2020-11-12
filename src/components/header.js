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
  background: #e4e4e4;
  margin: 0;
`;

const TitleLink = styled(Link)`
  font-family: Work Sans, sans serif;
  font-weight: 500;
  font-size: 48px;
  line-height: 64px;
  padding-bottom: 4px;
  &:hover {
    border-bottom: 4px solid black;
  }
  flex: 1;
  color: black;
  text-decoration: none;
`;

const NavLink = styled(AnchorLink)`
  font-family: Work Sans, sans serif;
  font-weight: 500;
  margin-left: 12px;
  font-size: 48px;
  line-height: 64px;
  padding-bottom: 4px;
  color: black;
  text-decoration: none;
  &:hover {
    border-bottom: 4px solid black;
  }
`;

const List = styled.ul`
  display: flex;
  flex: 1;
  margin: 0;
  padding-left: 12px;
`;

const ListItem = styled.li`
  padding: 0 6px;
  font-family: Work Sans, sans serif;
  font-weight: 500;
  font-size: 48px;
  line-height: 60px;
  list-style-type: none;
`;

const Div = styled.div`
  margin: 0;
`

const Header = ({ siteTitle, menuLinks }) => (
  <Wrapper>
    <Div>
      <TitleLink to="/">{siteTitle}</TitleLink>
    </Div>
      <List>
        {menuLinks.map(link => (
          <ListItem key={link.name}>/
            <NavLink to={link.link}>{link.name}</NavLink>
          </ListItem>
        ))}
      </List>
  </Wrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
