const cfg = {
  plugins: [`gatsby-plugin-react-helmet`]
};

if (process.env.CONTEXT === "production") {
  const googleAnalyticsCfg = {
    resolve: `gatsby-plugin-google-analytics`,
    options: {
      trackingId: "UA-146431921-1",
      // Defines where to place the tracking script - `true` in the head and `false` in the body
      head: true
    }
  };
  cfg.plugins.push(googleAnalyticsCfg);
}

module.exports = cfg;
