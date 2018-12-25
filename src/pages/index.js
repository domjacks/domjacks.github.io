import React from "react";
import { Helmet } from "react-helmet";

import Layout from "../components/Layout";
import Bio from "../components/Bio";

const IndexPage = () => (
  <div>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Dom Jackson</title>
      <link rel="canonical" href="https://domjacks1.github.io/" />
    </Helmet>
    <Layout>
      <Bio />
    </Layout>
  </div>
);

export default IndexPage;
