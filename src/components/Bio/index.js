import React from "react";
import { FaMedium, FaGithub } from "react-icons/fa";

import Card from "../Card";

import "./index.css";

const Bio = () => (
  <Card>
    <h1 className="Bio-h1">DOM JACKSON</h1>
    <h2>SOFTWARE DEVELOPER</h2>
    <p>👋 hello@domjackson.xyz</p>
    <a
      href="https://medium.com/@domjacks"
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
