import React, { useRef, useState } from "react";
import "../css-files/services.css";

const Services = () => {
  const otherServicesRef = useRef(null);
  const [showMoreServices, setShowMoreServices] = useState(false);
  const [isEnlarged, setIsEnlarged] = useState(false);

  // Always visible card
  const mainService = {
    title: "E-Shikshana",
    description: "A transformative learning programme.",
    icon: "📕",
  };

  // Additional cards (hidden by default)
  const extraServices = [
    {
      title: "SkillUp",
      description: "Upgrade your skills with practical workshops.",
      icon: "🎓",
    },
    {
      title: "TechConnect",
      description: "Connecting tech with your career goals.",
      icon: "💻",
    },
  ];

  const handleButtonClick = () => {
    setIsEnlarged(true);
    setShowMoreServices(true);

    // Optional: shrink effect
    setTimeout(() => {
      setIsEnlarged(false);
    }, 300);
  };

  return (
    <section
      ref={otherServicesRef}
      id="OtherServices"
      className="services-section"
    >
      <h2 className="services-heading">Our Other Programmes</h2>
      <p className="services-subheading">Our other range of programmes.</p>

      <div className="services-grid">
        <div className="service-card">
          <div className="service-icon">{mainService.icon}</div>
          <h3 className="service-title">{mainService.title}</h3>
          <p className="service-description">{mainService.description}</p>
        </div>
      </div>

      <h3 className="services-know-more-heading">
        Want to Know More? About our courses
      </h3>

      {!showMoreServices && (
        <button
          className={`know-more-button ${isEnlarged ? "enlarged" : ""}`}
          onClick={handleButtonClick}
        >
          Find here
        </button>
      )}

      {showMoreServices && (
        <div className="services-grid">
          {extraServices.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Services;
