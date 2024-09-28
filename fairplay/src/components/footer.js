import React from 'react';
import './footer.css'; // Make sure to create and import this CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <p>&copy; FairPlay</p>
      </div>
      <div className="footer-right">
        <a href="#privacy">Privacy Policy</a>
        <a href="#terms">Terms of Service</a>
        <a href="#contact">Contact Us</a>
      </div>
    </footer>
  );
};

export default Footer;
