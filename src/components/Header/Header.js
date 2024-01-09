// Header.js

import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import './Header.css';

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  const handleNavLinkClick = () => {
    setShowMenu(false);
  };

  return (
    <div className="App-header">
      <div className="menu-icon" onClick={handleMenuClick}>
        {showMenu ? <FaTimes /> : <FaBars />} {/* Toggle between hamburger and close icons */}
      </div>
      <nav className={`App-nav ${showMenu ? 'show' : ''}`}>
        <ul>
          <li>
            <Link to="/" onClick={handleNavLinkClick}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={handleNavLinkClick}>
              About
            </Link>
          </li>
          <li>
            <Link to="/projects" onClick={handleNavLinkClick}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={handleNavLinkClick}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <div>
        <h1>Mridul Awasthi</h1>
        <p>Your tagline or description goes here.</p>
      </div>
    </div>
  );
}

export default Header;
