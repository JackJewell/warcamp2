import React from "react";
import "./style.css"

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Footer() {
  return (
      <nav id="footer" className="navbar navbar-expand-lg navbar-dark">
          <p className= "text-center footerText">All rights reserved © 2020 Jackson Jewell</p>
      </nav>
  );
}

export default Footer;
