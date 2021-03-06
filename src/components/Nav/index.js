import React from "react";
import "./stylesheet.css";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <nav className="nav  navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid background-image-banner">
        {}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <h1 className="nav-name" >
            Evan Teems
          </h1>
          <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
            <li className="nav-item">
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/about">
                About!
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/portfolio">
                Portfolio!
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/contact">
                Contact!
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/resume">
                Resume!
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;