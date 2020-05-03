module.exports = {
  plugins: [
    `gatsby-plugin-react-helmet`, 
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Dom Jackson`,
        short_name: `Dom`,
        start_url: `/`,
        background_color: `#ffa500`,
        theme_color: `#ffa500`,
        display: `standalone`,
        icon: `src/images/icons-512.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`
  ]
}
