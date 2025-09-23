import React, { useRef, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Components
import Header from "./components/js_components/Header.js";
import Footer from "./components/js_components/Footer.js";
import Features from "./components/js_components/Features.js";
import Founders from "./components/js_components/Founders.js";
import AboutUs from "./components/js_components/About.js";
import ContactUs from "./components/js_components/ContactUs.js";
import Services from "./components/js_components/Services.js";
import OtherServices from "./components/js_components/OtherServices.js";
import WhyChooseUs from "./components/js_components/WhyChooseUs.js";
import ScrollToTop from "./components/js_components/ScrollToTop.js";

// Assets
import heroBackground from "./Hero-Background_image/background.jpg";

function App() {
  const aboutRef = useRef(null);
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  // Handle scroll events (parallax + scroll-to-top)
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroElement = document.querySelector(".hero");
      if (heroElement) {
        heroElement.style.backgroundPosition = `center ${scrollY * 0.5}px`;
      }

      setShowScrollToTop(scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Router>
      <div id="home" className="App">
        <Header />

        <main>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  {/* Hero Section */}
                  <section
                    className="hero"
                    style={{
                      backgroundImage: `url(${heroBackground})`,
                      backgroundSize: "cover",
                      backgroundAttachment: "fixed",
                    }}
                  >
                    <div className="hero-overlay">
                      <div className="hero-content">
                        <h1 className="animated-title">
                          Welcome to{" "}
                          <span className="brand-gradient">
                            OneQuickSolutions
                          </span>
                        </h1>
                        <p className="animated-description">
                          Transform your business with{" "}
                          <span className="highlight">SaaS platforms</span>, web
                          development, and tailored digital solutions.
                        </p>
                        <button className="cta-button" onClick={scrollToAbout}>
                          Explore Now
                        </button>
                      </div>
                    </div>
                  </section>

                  {/* Other Sections */}
                  <WhyChooseUs />
                  <div ref={aboutRef}>
                    <AboutUs />
                  </div>
                  <Features />
                  <Services />
                  {/* <OtherServices /> */}
                  <Founders />
                  <ContactUs />
                </>
              }
            />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </main>

        {/* ScrollToTop Component */}
        {showScrollToTop && <ScrollToTop />}

        <Footer />
      </div>
    </Router>
  );
}

export default App;
