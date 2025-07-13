import React, { useRef, useState } from "react";
import "../css-files/services.css";

const Services = () => {
  const otherServicesRef = useRef(null);
  const [showMore, setShowMore] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const services = [
    {
      title: "Cloud Integration",
      description:
        "Scale effortlessly with secure, cost-effective cloud solutions tailored to your business needs.",
      icon: "☁️",
      showReadMore: true,
    },
    {
      title: "Custom SaaS Development",
      description:
        "Transform your business with our SaaS expertise—streamlined, scalable, and user-focused solutions.",
      icon: "🔧",
      showReadMore: true,
    },
    {
      title: "Custom SaaS Development",
      description:
        "Transform your business with our SaaS expertise—streamlined, scalable, and user-focused solutions.",
      icon: "🔧",
      showReadMore: true,
    },
    {
      title: "Custom SaaS Development",
      description:
        "Transform your business with our SaaS expertise—streamlined, scalable, and user-focused solutions.",
      icon: "🔧",
      showReadMore: true,
    },
  ];

  const handleKnowMoreClick = () => {
    setShowMore(true);
  };

  const openModal = (service) => {
    setModalContent(service);
  };

  const closeModal = () => {
    setModalContent(null);
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
          <div className="service-icon">📕</div>
          <h3 className="service-title">E-Shikshana</h3>
          <p className="service-description">
            A transformative learning programme.
          </p>
        </div>
      </div>

      <h3 className="services-know-more-heading">
        Want to Know More? About our courses
      </h3>

      {!showMore && (
        <button className="know-more-button" onClick={handleKnowMoreClick}>
          Find here
        </button>
      )}

      {showMore && (
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              {service.showReadMore && (
                <a
                  className="read-more-link"
                  onClick={() => openModal(service)}>
                  Read More
                </a>
              )}
            </div>
          ))}
        </div>
      )}

      {modalContent && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>{modalContent.title}</h2>
            <p>{modalContent.description} (Detailed content goes here...)</p>
            <button className="close-modal" onClick={closeModal}>
              Find here
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;
