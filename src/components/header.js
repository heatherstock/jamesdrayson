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
  margin: 0;
`;

const TitleLink = styled(Link)`
  font-family: Work Sans, sans serif;
  font-weight: 800;
  font-size: 42px;
  line-height: 56px;
  padding-bottom: 3px;
  border-bottom: 9px solid #4d66ff;
  flex: 1;
  color: #4d66ff;
  text-decoration: none;
`;

const NavLink = styled(AnchorLink)`
  color: #4d66ff;
  text-decoration: none;
  padding-bottom: 2px;
  border-bottom: 6px solid #4d66ff;
`;

const List = styled.ul`
  display: flex;
  flex: 1;
  padding: 0;
`;

const ListItem = styled.li`
  padding: 0 40px;
  list-style-type: none;
`;

const Div = styled.div`
  margin: 0;
`

const Header = ({ siteTitle, menuLinks }) => (
  <Wrapper>
    <div>
      <TitleLink to="/">{siteTitle}</TitleLink>
    </div>
    <Div>
      <List>
        {menuLinks.map(link => (
          <ListItem key={link.name}>
            <NavLink to={link.link}>{link.name}</NavLink>
          </ListItem>
        ))}
      </List>
    </Div>
  </Wrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
