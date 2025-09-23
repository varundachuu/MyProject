import React, { useRef, useState } from "react";
import "../css-files/other-services.css"; // ✅ removed space in filename

const Services = () => {
  const otherServicesRef = useRef(null);
  const [showMore, setShowMore] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const services = [
    {
      title: "E-Shikshana",
      description: "A transformative learning programme.",
      icon: "📕",
      showReadMore: false,
    },
    {
      title: "Foundational Courses",
      description:
        "For beginners looking to build a strong base in technical and analytical thinking.",
      icon: "🧱",
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
    // ✅ Example: useRef in action (scroll to section)
    otherServicesRef.current?.scrollIntoView({ behavior: "smooth" });
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
            <div key={service.title + index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              {service.showReadMore && (
                <button
                  className="read-more-link"
                  onClick={() => openModal(service)}
                >
                  Read More
                </button>
              )}
            </div>
          ))}
        </div>
      )}

      {modalContent && (
        <div
          className="modal-overlay"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div className="modal-content">
            <h2 id="modal-title">{modalContent.title}</h2>
            <p>{modalContent.description}</p>
            <button className="close-modal" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;
