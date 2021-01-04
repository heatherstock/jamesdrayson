import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import * as _ from "../components/sharedStyles"
import Layout from "../components/layout"
import styled from "styled-components";
import Img from "gatsby-image"

const Economist = () => {
  const Image = styled(Img)`
@media (max-width: 599px) {
  display: none !important;
}
margin-top: 36px;
margin-bottom: 0px;
overflow-x: hidden;
position: relative;
padding: 0;
`;

  const data = useStaticQuery(graphql`
    query {
      worldIfHomepage: file(relativePath: { eq: "the-economist-world-if-homepage-dekstop.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      worldIfArticle: file(relativePath: { eq: "the-economist-world-if-article-dekstop.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      tq: file(relativePath: { eq: "the-economist-tq.png" }) {
        childImageSharp {
          fixed(width: 1385, height: 701) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          workLinks {
            name
            link
          }
        }
      }
    }
  `)

  return (
    <>
      <Layout>
        <_.Wrapper>
          <_.Heading>The Economist</_.Heading>
          <_.Text>Worked as part of a cross functional team designing for the master brand, including <_.TextLink to={'https://worldif.economist.com/'} target='_blank'>The World If</_.TextLink> (both the 2015 and 2016 editions) and ‘Technology Quarterly’ sub brands, and its sister publication <_.TextLink to={'https://theworldin.economist.com/'} target='_blank'>The World In</_.TextLink>. Worked closely with Editorial, other designers, UX and developers to iterate on design concepts to ensure fully responsive solutions to briefs were realised.    Designed social media templates, worked with the New York City office to ensure The Economist’s presence on ‘Facebook Instant Articles’ was on brand, and helped to create a more immersive experience for readers of The Economist’s ‘Essays’ and it’s other long form content.</_.Text>
          <Image fluid={data.worldIfHomepage.childImageSharp.fluid} />
          <Image fluid={data.worldIfArticle.childImageSharp.fluid} />
          <Image fixed={data.tq.childImageSharp.fixed} />
          <_.List>
            {data.site.siteMetadata.workLinks.map(link => (
              link.name === 'The Economist'
              ? null
              : <_.ListItem key={link.name}>/
              <_.StyledLink to={link.link}>{link.name}</_.StyledLink>
            </_.ListItem>
            ))}
          </_.List>
        </_.Wrapper>
      </Layout>
    </>
  )
}

export default Economist