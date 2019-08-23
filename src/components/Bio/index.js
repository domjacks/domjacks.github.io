import React from "react";
import { FaMedium, FaGithub } from "react-icons/fa";
import { OutboundLink } from "gatsby-plugin-gtag";

import "./index.css";

const Bio = () => (
  <div className="Bio-main">
    <img src="./dom.jpeg" alt="dom's avatar" className="Bio-avatar" />
    <h1 className="Bio-h1">DOM JACKSON</h1>
    <h2>
      <span role="img" aria-label="lightning">
        ⚡️
      </span>{" "}
      SOFTWARE DEVELOPER{" "}
      <span role="img" aria-label="lightning">
        ⚡️
      </span>
    </h2>
    <OutboundLink
      href="https://medium.com/@domjackson"
      target="_blank"
      rel="noopener noreferrer"
      className="Bio-social"
    >
      <FaMedium />
    </OutboundLink>
    <OutboundLink
      href="https://github.com/domjacks"
      target="_blank"
      rel="noopener noreferrer"
      className="Bio-social"
    >
      <FaGithub />
    </OutboundLink>
  </div>
);

export default Bio;
