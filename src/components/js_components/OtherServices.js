import React, { useRef, useState } from "react";
import "../css-files/services.css";

const Services = () => {
  const otherServicesRef = useRef(null);
  const [isEnlarged, setIsEnlarged] = useState(false);

  const services = [
    {
      title: "E-Shikshana",
      description: "A transformative learning programme.",
      icon: "📕",
    },
  ];

  const handleButtonClick = () => {
    setIsEnlarged(true);

    // Optional: shrink back after a delay
    setTimeout(() => {
      setIsEnlarged(false);
    }, 1000);
  };

  return (
    <section ref={otherServicesRef} id="OtherServices" className="services-section">
      <h2 className="services-heading">Our Other Programmes</h2>
      <p className="services-subheading">Our other range of programmes.</p>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>

            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>

      <h3 className="services-know-more-heading">Want to Know More? about our courses</h3>
      <button
        className={`know-more-button ${isEnlarged ? "enlarged" : ""}`}
        onClick={handleButtonClick}
      >
        Know More
      </button>
    </section>
  );
};

export default Services;
