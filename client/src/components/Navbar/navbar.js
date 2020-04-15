import React from "react";
import "./style.css"
import crown from "./crown.png"

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav id = "myNavbar" className="uk-navbar-container" data-uk-navbar>
      <div  className="uk-navbar-left">
        <a className="uk-navbar-item uk-logo" href="/">
          <img id = "crown" src= {crown}></img>
        </a>
        <a className="uk-navbar-item uk-logo text font" href="/">
          <u>War Camp</u>
        </a>
        <ul className="uk-navbar-nav">
          <li>
            <a className="uk-navbar-item text" href="/about">
              <div className="font">About</div>
            </a>
          </li>
          <li>
            <a className="uk-navbar-item text" href="/listSelect">
              <div className="font">Lists</div>
            </a>
          </li>
          <li>
            <a className="uk-navbar-item text" href="/login">
              <div className="font">Login</div>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
