import { AnchorLink } from "gatsby-plugin-anchor-links";
import styled from "styled-components";
import PropTypes from "prop-types";
import React from "react";

const Wrapper = styled.header`
@media (min-width: 900px) {
  display: flex;
  margin-bottom: 18px;
  padding: 18px 72px 0;
}
  position: sticky;
  top: 0;
  z-index: 9999;
  justify-content: space-between;
  align-items: center;
  background: #eeeeee;
  margin-bottom: 12px;
  padding: 12px 36px 0;
`;

const TitleLink = styled(AnchorLink)`
@media (max-width: 899px) {
  font-size: 30px;
  line-height: 42px;
}
  font-family: Work Sans, sans serif;
  font-weight: 500;
  font-size: 36px;
  line-height: 48px;
  padding-bottom: 2px;
  flex: 1;
  color: black;
  text-decoration: none;
  &:hover {
    color: black;
    border-bottom: 3px solid black;
  }
  &: active {
    border-bottom: none;
  }
`;

const NavLink = styled(AnchorLink)`
@media (max-width: 899px) {
  font-size: 30px;
  line-height: 42px;
}
  font-family: Work Sans, sans serif;
  font-weight: 500;
  margin-left: 12px;
  font-size: 36px;
  line-height: 48px;
  padding-bottom: 2px;
  color: black;
  text-decoration: none;
  &:hover {
    color: black;
    border-bottom: 3px solid black;
  }
  &: active {
    border-bottom: none;
  }
`;

const List = styled.ul`
@media (min-width: 900px) {
  padding-bottom: 18px;
  padding-left: 12px;
}
  display: flex;
  flex: 1;
  margin: 0;
  padding-bottom: 12px;
  padding-left: 0px;
  border-bottom: 3px solid black;
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

const Div = styled.div`
@media (min-width: 900px) {
  border-bottom: 3px solid black;
  padding-bottom: 18px;
}
  margin: 0;
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
