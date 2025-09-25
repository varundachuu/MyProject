import React, { useRef } from "react";
import "./css-files/other-services.css";

const OtherServices = () => {
  const otherServicesRef = useRef(null);

  const services = [
    {
      title: "E-Shikshana",
      description: "A transformative learning programme.",
      icon: "📕",
    },
    {
      title: "Foundational Courses",
      description:
        "For beginners looking to build a strong base in technical and analytical thinking.",
      icon: "🧱",
    },
    {
      title: "Custom SaaS Development",
      description:
        "Transform your business with our SaaS expertise—streamlined, scalable, and user-focused solutions.",
      icon: "🔧",
    },
  ];

  return (
    <section
      ref={otherServicesRef}
      id="other-services"
      className="services-section"
    >
      <h2 className="services-heading">Our Other Programmes</h2>
      <p className="services-subheading">Our other range of programmes.</p>

      <div className="services-grid">
        {services.map((service, index) => (
          <div key={service.title + index} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Other-Services;
