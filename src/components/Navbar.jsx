import React from 'react';
import './Navbar.css';
import logo from '../images/LOGO.svg'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <a href="#">
        <img src={logo} alt="Logo" />

        </a>
      </div>
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;