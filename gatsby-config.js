module.exports = {
  siteMetadata: {
    siteTitle: `JC`,
    siteTitleAlt: `JC Palmes`,
    siteHeadline: `Gatsby Test`,
    siteUrl: `https://khleomix.com/gatsby`,
    siteDescription: `Gatsby Test site`,
    siteLanguage: `en`,
    siteImage: `/banner.jpg`,
    author: `@khleomix`
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `sections`,
        path: `${__dirname}/src/sections`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {},
    },
    {
      resolve: `gatsby-plugin-anchor-links`,
      options: {
        offset: -100
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-theme-ui`
  ],
}
