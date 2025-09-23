import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css-files/Header.css";
import { FaTimes, FaBars } from "react-icons/fa";
import logo from "../../images/logo6.jpg"; // ✅ import for React/Webpack

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Features", id: "features" },
    { name: "Services", id: "service" },
    { name: "Programmes", id: "Other-Services" },
    { name: "Products", id: "Products" },
    { name: "Contact Us", id: "contact" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    if (sectionId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const section = document.getElementById(sectionId);
      section?.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false); // close mobile menu after clicking
  };

  // Close menu on Esc key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <header className="header">
      {/* Logo Section */}
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>

      {/* Desktop Navigation */}
      <nav className={`nav-links ${isMenuOpen ? "active" : ""}`} role="navigation" aria-label="Main Menu">
        {navLinks.map((link) => (
          <button
            key={link.id}
            className="nav-button"
            onClick={() => scrollToSection(link.id)}
          >
            {link.name}
          </button>
        ))}
      </nav>

      {/* Mobile Menu Icon */}
      <div className="menu-icon" onClick={toggleMenu} aria-label="Menu" role="button" tabIndex={0}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile Slide-In Menu */}
      <div className={`side-modal ${isMenuOpen ? "visible" : ""}`}>
        <div className="modal-content">
          {navLinks.map((link) => (
            <button
              key={link.id}
              className="modal-nav-button"
              onClick={() => scrollToSection(link.id)}
            >
              {link.name}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Header;

