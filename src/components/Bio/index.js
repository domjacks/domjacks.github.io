import React from "react";

import { FaMedium, FaTwitter, FaGithub } from "react-icons/fa";

import "./index.css";

const Bio = () => (
  <div className="Bio-main">
    <h1 className="Bio-h1">DOM JACKSON</h1>
    <a
      href="https://medium.com/@domjackson"
      target="_blank"
      rel="noopener noreferrer"
      className="Bio-social"
    >
      <FaMedium />
    </a>
    <a
      href="https://twitter.com/domjacks1"
      target="_blank"
      rel="noopener noreferrer"
      className="Bio-social"
    >
      <FaTwitter />
    </a>
    <a
      href="https://github.com/domjacks1"
      target="_blank"
      rel="noopener noreferrer"
      className="Bio-social"
    >
      <FaGithub />
    </a>
  </div>
);

export default Bio;
