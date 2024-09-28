import React, { useState } from 'react';
import './Navbar.css'; // Import the CSS file for styling

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobile(!isMobile);
  };

  return (
    <nav className={`navbar ${isMobile ? 'mobile' : ''}`}>
      <div className="navbar-brand">FairPlay</div>
      <div className={`navbar-links ${isMobile ? 'active' : ''}`}>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/Login">Login</a></li>
          <li><a href="/Signup">SignUp</a></li>
          <li><a href="/blog">Blogs</a></li>
          <li><a href="/dashboard">Dashboard</a></li>
          <li><a href="/wallet">Wallet</a></li>
          <li><a href="/profile">Profile</a></li>
          
        </ul>
      </div>
      <div className="hamburger" onClick={toggleMobileMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;