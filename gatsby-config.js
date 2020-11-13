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
        name:'About',
        link:'/#about'
      },
      {
        name:'Work',
        link:'/#work'
      },
      {
        name:'Contact',
        link:'/#contact'
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `work`,
        path: `${__dirname}/src/work`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
        ],
      },
    },
    `gatsby-plugin-anchor-links`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        start_url: `/`,
        // icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
