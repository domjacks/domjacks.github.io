{
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        trackingId: "UA-146431921-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true
      }
    }
  ];
}
