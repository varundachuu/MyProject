import React, { useRef, useState } from "react";
import "../css-files/About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const AboutUs = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const aboutRef = useRef(null);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section ref={aboutRef} id="about" className="about-main-container">
      <h2 className="about-title">About Us</h2>
      <div className="about-us-container">
        <div className="about-us">
          <div className="about-us-left">
            <img
              src="./images/About.jpg"
              alt="Office environment of our company"
              className="about-image"
            />
          </div>
          <div className="about-us-right">
            <h2 className="about-title">Get to Know About Our Company</h2>
            <p>
              Our specialty at OneQuickSolutions is providing businesses with
              innovative IT solutions that enable them to prosper in the current
              digital environment. With a committed group of professionals and
              an enthusiasm for creativity, we customize our offerings to
              perfectly fit your particular goals, guaranteeing consistently
              significant outcomes..
            </p>
            <ul className="features-list">
              <li>
                <FontAwesomeIcon className="icon-check" icon={faCheck} />{" "}
                Innovative IT Solutions
              </li>
              <li>
                <FontAwesomeIcon className="icon-check" icon={faCheck} />{" "}
                Tailored Services
              </li>
              <li>
                <FontAwesomeIcon className="icon-check" icon={faCheck} /> Fully
                Dedicated Expertise
              </li>
              <li>
                <FontAwesomeIcon className="icon-check" icon={faCheck} /> Office
                Focus On Creativity
              </li>
              <li>
                <FontAwesomeIcon className="icon-check" icon={faCheck} /> Fully
                Guaranteed Impact
              </li>
            </ul>
            <button className="book-tour" onClick={() => { scrollToSection("contact"); setIsMenuOpen(false);}} type="button">
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
