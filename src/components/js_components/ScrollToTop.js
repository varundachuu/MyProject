import React, { useState, useEffect } from "react";
import "../css-files/ScrollToTop.css";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 20) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <button
      onClick={scrollToTop}
      style={{
        position: "fixed",
        bottom: "40px",
        right: "40px",
        zIndex: 99,
        border: "none",
        outline: "none",
        backgroundColor: "#333",
        color: "white",
        cursor: "pointer",
        padding: "15px",
        borderRadius: "50%",
        fontSize: "18px",
        display: isVisible ? "block" : "none",
      }}
      title="Go to top"
    >
      &#8679;
    </button>
  );
};

export default ScrollToTop;

