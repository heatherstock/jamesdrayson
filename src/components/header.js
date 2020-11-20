import { AnchorLink } from "gatsby-plugin-anchor-links";
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
  background: #eeeeee;
  margin: 0;
  border-bottom: 18px solid #eeeeee;
  border-top: 18px solid #eeeeee;
`;

const TitleLink = styled(AnchorLink)`
  font-family: Work Sans, sans serif;
  font-weight: 500;
  font-size: 36px;
  line-height: 48px;
  padding-bottom: 2px;
  border-bottom: 3px solid black;
  flex: 1;
  color: black;
  text-decoration: none;
`;

const NavLink = styled(AnchorLink)`
  font-family: Work Sans, sans serif;
  font-weight: 500;
  margin-left: 12px;
  font-size: 36px;
  line-height: 48px;
  padding-bottom: 2px;
  color: black;
  text-decoration: none;
  border-bottom: 3px solid black;
`;

const List = styled.ul`
  display: flex;
// could do media query to remove flex at small sizes.
// also think about resizing font
  flex: 1;
  margin: 0;
  padding-left: 12px;
`;

const ListItem = styled.li`
  padding: 0 6px;
  font-family: Work Sans, sans serif;
  font-weight: 500;
  font-size: 36px;
  line-height: 48px;
  list-style-type: none;
`;

const Div = styled.div`
  margin: 0;
  padding-left: 72px;
`

const Header = ({ siteTitle, menuLinks }) => (
  <Wrapper>
    <Div>
      <TitleLink to="/#home">{siteTitle}</TitleLink>
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
