import React from "react"
import Footer from "../Footer";

import './index.css';

export default ({ children }) => (
  <div>
    <div className="Layout-main">
        {children}
    </div>
    <Footer />
  </div>
)
