import React from "react"
import styled from "styled-components";
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"
import Portfolio from "../components/portfolio"
import About from "../components/about"
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

const IndexPage = () => {
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
            href
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
        <Img fluid={data.file.childImageSharp.fluid} />
        <About />
        <Portfolio />
      </Wrapper>
      <Footer contactLinks={data.site.siteMetadata.contactLinks}/>
    </>
  )
}

export default IndexPage
