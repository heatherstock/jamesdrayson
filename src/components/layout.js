import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components";
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import { GlobalStyle } from "../theme";

const Wrapper = styled.div`
@media (max-width: 600px) {
  margin: 0 18px;
}
@media (min-width: 600px) {
  margin: 0 36px;
}
padding-bottom: 56px;
`;

const Footer = styled.footer`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 0;
  width: 100%;
  height: 56px;
  border-top: 1px solid #154726;
`;

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query imageQueryAndSiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
      file (relativePath: { eq: "capybara.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <>
    <GlobalStyle />
      <Wrapper>
        <Header menuLinks={data.site.siteMetadata.menuLinks} siteTitle={data.site.siteMetadata.title} />
        <Img fluid={data.file.childImageSharp.fluid} />
        <div>{children}</div>
      </Wrapper>
      <Footer>© James Drayson, {new Date().getFullYear()}</Footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
