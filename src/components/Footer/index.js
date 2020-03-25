import React from "react";

import "./index.css";

const year = new Date().getFullYear();

const Footer = () => (
  <div className="Footer-main">
    <div className="Footer-child">
      <p>&copy; Dom Jackson {year}</p>
    </div>
    <div className="Footer-child">
      <p>
        Made using <a href="https://www.gatsbyjs.org/">GatsbyJS</a>, built with{" "}
        <a href="https://travis-ci.org/">Travis CI</a> and hosted on{" "}
        <a href="https://pages.github.com/">Github Pages</a>.
      </p>
    </div>
  </div>
);

export default Footer;
