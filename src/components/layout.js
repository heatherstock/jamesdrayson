import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import Footer from "./footer"
import { GlobalStyle } from "../theme";

const Wrapper = styled.div`
margin: 0 72px;
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
      <Wrapper id="home">
      <Header siteTitle={data.site.siteMetadata.title} menuLinks={data.site.siteMetadata.menuLinks} />
        <div>{children}</div>
      </Wrapper>
      <Footer contactLinks={data.site.siteMetadata.contactLinks}/>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout