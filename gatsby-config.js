module.exports = {
  siteMetadata: {
    title: `James Drayson`,
    description: `Personal portfolio`,
    author: `@jamesdrayson`,
    contactLinks: [
      {
        name:'Email',
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
    ], 
    workLinks: [
      {
        name:'TES',
        link:'/tes'
      },
      {
        name:'Drayson & Stock',
        link:'/draysonandstock'
      },
      {
        name:'Financial Times',
        link:'/ft'
      },
      {
        name:'The Economist',
        link:'/economist'
      },
      {
        name:'Everything In Between',
        link:'/eib'
      }
    ]
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      }
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1400,
              backgroundColor: "#eeeeee",
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -97,
        duration: 3000,
      }
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `jamesdrayson`,
        short_name: `jamesdrayson`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: `src/images/james-drayson-drayson-and-stock-printer's-fist.png`
      },
    },
  ],
}
