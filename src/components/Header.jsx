import React, { useState } from "react";
import "./header.css";
import logo from "../images/logo.svg";
import burger from "../images/icon-hamburger.svg";
import close from "../images/icon-close.svg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="header">
      <img
        src={logo}
        className={`logo ${isOpen ? "open-menu-logo" : ""}`}
        alt=""
      />
      <div className={`menu ${isOpen ? "open" : ""}`}>
        <ul>
          <li>
            <a href="#About">About</a>
          </li>
          <li>
            <a href="#Careers">Careers</a>
          </li>
          <li>
            <a href="#Events">Events</a>
          </li>
          <li>
            <a href="#Products">Products</a>
          </li>
          <li>
            <a href="#Support">Support</a>
          </li>
        </ul>
        {isOpen && (
          <button className="close-btn" onClick={handleCloseMenu}>
            <span className="close-icon" aria-hidden="true">
              <img src={close} alt="" />
            </span>
          </button>
        )}
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        <img src={burger} className="bar" alt="" />
      </div>
      <div className="content">
        <div className="card-header">
          <h1>IMMERSIVE EXPERIENCES THAT DELIVER</h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
