module.exports = {
  siteMetadata: {
    title: `James Drayson`,
    description: `Personal portfolio`,
    author: `@jamesdrayson`,
    contactLinks: [
      {
        name:'jamesdrayson@icloud.com',
        href:'mailto:jamesdrayson@icloud.com'
      },
      {
        name:'LinkedIn',
        link:'https://www.linkedin.com/in/james-drayson/'
      },
      {
        name:'Instagram',
        link:'https://www.instagram.com/draysonandstock/'
      }
    ],
    menuLinks: [
      {
        name:'Contact',
        href:'#contact'
      },
      {
        name:'Portfolio',
        href:'#portfolio'
      },
      {
        name:'About',
        href:'#about'
      }
    ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        // icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
