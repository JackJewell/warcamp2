import React from "react";
import "./style.css"

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Footer() {
  return (
      <nav id="footer" className="uk-navbar-container">
        <div className= "uk-navbar-center">
          <p className = "uk-navbar-item footerText">All rights reserved © 2020 Jackson Jewell</p>
        </div>
      </nav>
  );
}

export default Footer;
