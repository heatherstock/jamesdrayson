import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components";
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import Footer from "./footer"
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
        <Header siteTitle={data.site.siteMetadata.title}  />
        <Img fluid={data.file.childImageSharp.fluid} />
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
