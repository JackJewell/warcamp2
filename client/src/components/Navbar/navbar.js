import React from "react";
import "./style.css"

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="uk-navbar-container">
      <div id = "myNavbar" className="uk-navbar-left">
        <a className="uk-navbar-item uk-logo text" href="/">
          War Camp
        </a>

        <div className = "uk-navbar-toggle">
          <span uk-navbar-toggle-icon></span>
          <ul className="uk-navbar-nav">
            <li>
              <a className="uk-navbar-nav text " href="/about">
                About
              </a>
            </li>
            <li>
              <a className="uk-navbar-nav text" href="/listSelect">
                Lists
              </a>
            </li>
            <li>
              <a className="uk-navbar-nav text" href="/login">
                Login
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
