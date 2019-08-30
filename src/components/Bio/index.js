import React from "react";
import { FaMedium, FaGithub } from "react-icons/fa";

import Card from "../Card";

import "./index.css";

const Bio = () => (
  <Card>
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
    <a
      href="https://medium.com/@domjackson"
      target="_blank"
      rel="noopener noreferrer"
      className="Bio-social"
      aria-label="Dom Jackson's Medium page"
    >
      <FaMedium />
    </a>
    <a
      href="https://github.com/domjacks"
      target="_blank"
      rel="noopener noreferrer"
      className="Bio-social"
      aria-label="Dom Jackson's GitHub page"
    >
      <FaGithub />
    </a>
  </Card>
);

export default Bio;
