import React from "react";
import { Helmet } from "react-helmet";

import Layout from "../components/Layout";
import Bio from "../components/Bio";

const IndexPage = () => (
  <div>
    <Helmet>
      <html lang="en" />
      <meta charSet="utf-8" />
      <title>Dom Jackson</title>
      <meta name="description" content="Dom Jackson's personal site"></meta>
      <link rel="canonical" href="https://www.domjackson.xyz" />

      <link rel="icon" type="image/png" href="/favicon.png" />
      <link rel="apple-touch-icon" href="icons-192.png" />

      <meta name="theme-color" content="#ffa500" />

      <link rel="manifest" href="/manifest.json" />

      <script>
        {`
          // Check that service workers are supported
          if ('serviceWorker' in navigator) {
            // Use the window load event to keep the page load performant
            window.addEventListener('load', () => {
              navigator.serviceWorker.register('/sw.js');
            })
          }
        `}
      </script>
    </Helmet>
    <Layout>
      <Bio />
    </Layout>
  </div>
);

export default IndexPage;
