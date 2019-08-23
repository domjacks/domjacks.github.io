import React from "react";
import { OutboundLink } from "gatsby-plugin-gtag";

import "./index.css";

const year = new Date().getFullYear();

const Footer = () => (
  <div className="Footer-main">
    <div className="Footer-child">
      <p>&copy; Dom Jackson {year}</p>
    </div>
    <div className="Footer-child">
      <p>
        Made using{" "}
        <OutboundLink href="https://www.gatsbyjs.org/">GatsbyJS</OutboundLink>,
        built with{" "}
        <OutboundLink href="https://travis-ci.org/">Travis CI</OutboundLink> and
        hosted on{" "}
        <OutboundLink href="https://pages.github.com/">
          Github Pages
        </OutboundLink>
        .
      </p>
    </div>
  </div>
);

export default Footer;
