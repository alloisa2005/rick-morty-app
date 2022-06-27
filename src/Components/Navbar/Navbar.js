import React from "react";
import "./Navbar.css";

import logo from "../../assets/logo.png";

function Navbar() {
  return (
    <header className="header">
      <div className="container d-flex justify-content-between align-items-center">
        <img className="logo_img" src={logo} alt="logo" />
        <nav>
          <ul>
            <li>Personajes</li>
            <li>Episodios</li>
            <li>Lugares</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
