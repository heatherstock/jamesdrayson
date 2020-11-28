import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import Footer from "./footer"
import { GlobalStyle } from "../theme";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby"

const Wrapper = styled.div`
`;

const Div = styled.div`
@media (min-width: 900px) {
  margin: 0 72px;
}
margin: 0 36px;
`;

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query imageQueryAndSiteTitleQuery {
      site {
        siteMetadata {
          title
          contactLinks {
            name
            href
            link
          }
          menuLinks {
            name
            link
          }
        }
      }
    }
  `)

  return (
    <>
    <GlobalStyle />
      <Wrapper id="home" />
      <Header siteTitle={data.site.siteMetadata.title} menuLinks={data.site.siteMetadata.menuLinks} />
        <Div>{children}</Div>
      <Footer contactLinks={data.site.siteMetadata.contactLinks}/>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout