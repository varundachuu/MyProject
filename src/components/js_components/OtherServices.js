import React, {useRef}from "react";
import "../css-files/services.css";

const Services = () => {
  const service = useRef(null);

  const services = [
    {
      title: "E-Shikshana",
      description: "A transformative learning programme.",
      icon: "📕",
    }, 
  ];

  return (
    <section ref={OtherServices} id="OtherServices" className="services-section">
      <h2 className="services-heading">Our Other Programmes</h2>
      <p className="services-subheading">
        Our other range of programmes.
      </p>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
