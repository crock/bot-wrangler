require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `The Bot Wrangler`,
    description: `Chat Bot Development`,
    author: `@crocbuzz`,
    siteUrl: `https://botwrangler.me`
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sass`,
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
        name: `Bot Wrangler`,
        short_name: `botwrangler`,
        start_url: `/`,
        background_color: `#F46912`,
        theme_color: `#FCB826`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    {
      resolve: `gatsby-source-tumblr`,
      options: {
        blogIdentifier: `t:WDrmGDfoS56O8WaVN8J3VA`,
        consumerKey: process.env.TUMBLR_CONSUMER_KEY,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        "excerpt_separator": `<!-- end -->`
      },
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `the-bot-wrangler`
      }
    },
    `gatsby-plugin-sitemap`
  ],
}
