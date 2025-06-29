// Footer.js
import React from 'react';
import '../css-files/Footer.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <h3>OneQuickSolutions</h3>
          <p>Unlock the Future of Business with Our Platform.</p>
        </div>
    </div>
<p>Unlock the Future of Business with Our Platform.</p>
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#" className="icon"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="#" className="icon"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="#" className="icon"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="#" className="icon"><FontAwesomeIcon icon={faLinkedin} /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 OneQuickSolutions. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
