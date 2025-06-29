import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css-files/Header.css";
import { FaTimes } from "react-icons/fa";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate(); // Hook to navigate programmatically {{inbuilt function}}

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Scroll function for smooth scrolling
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Handle home navigation with smooth scroll
  const navigateHome = () => {
    // Scroll to the top of the page
    window.scrollTo({ top: 0, behavior: "smooth" });
    // Close the menu if it's open
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      {/* Logo Section */}
      <div className="logo">
        <img src="./images/logo5.png" alt="logo" />
      </div>

      {/* Navigation Links */}
      <nav className={`nav-links ${isMenuOpen ? "active" : ""}`}>
        {/* Home link with scroll to top and closing menu */}
        <Link to="/" onClick={navigateHome}>Home</Link>
        <Link onClick={() => { scrollToSection("about"); setIsMenuOpen(false); }}>About</Link>
        <Link onClick={() => { scrollToSection("features"); setIsMenuOpen(false);}}>Features</Link>
        <Link onClick={() => { scrollToSection("service"); setIsMenuOpen(false);}}>Services</Link>
        <Link onClick={() => { scrollToSection("contact"); setIsMenuOpen(false);}}>Contact Us</Link>
      </nav>

      {/* Menu Icon */}
      <div className="menu-icon" onClick={toggleMenu}>
        <span className={`bar ${isMenuOpen ? "open" : ""}`}></span>
        <span className={`bar ${isMenuOpen ? "open" : ""}`}></span>
        <span className={`bar ${isMenuOpen ? "open" : ""}`}></span>
      </div>

      {/* Slide-In Modal */}
      <div className={`side-modal ${isMenuOpen ? "visible" : ""}`}>
        <div className="close-icon" onClick={toggleMenu}>
          <FaTimes />
        </div>
        <div className="modal-content">
          {/* Home link with scroll to top and closing modal */}
          <Link to="/" onClick={navigateHome}>Home</Link>
          <Link onClick={() => { scrollToSection("about"); setIsMenuOpen(false); }}>About</Link>
        <Link onClick={() => { scrollToSection("features"); setIsMenuOpen(false);}}>Features</Link>
        <Link onClick={() => { scrollToSection("service"); setIsMenuOpen(false);}}>Services</Link>
        <Link onClick={() => { scrollToSection("contact"); setIsMenuOpen(false);}}>Contact Us</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
