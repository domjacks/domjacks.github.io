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
      <link rel="manifest" href="/manifest.json" />
    </Helmet>
    <Layout>
      <Bio />
    </Layout>
  </div>
);

export default IndexPage;
