import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import Footer from "./footer"
import { GlobalStyle } from "../theme";

const Wrapper = styled.div`
padding-bottom: 56px;
margin: 48px 72px 0;
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