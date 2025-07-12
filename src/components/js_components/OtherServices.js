import React, { useRef, useState } from "react";
import "../css-files/services.css";

const Services = () => {
  const otherServicesRef = useRef(null);

  const [showMore, setShowMore] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [showModal, setShowModal] = useState(false);

  const mainService = {
    title: "E-Shikshana",
    description: "A transformative learning programme.",
    icon: "📕",
  };

  const otherServices = [
    {
      title: "Digital Literacy",
      description: "Empowering communities with digital skills.",
      icon: "💻",
      more: "Our Digital Literacy programme helps bridge the digital divide by offering training in basic computer skills, internet usage, and online safety.",
    },
    {
      title: "Skill Development",
      description: "Building skills for better employability.",
      icon: "🎓",
      more: "The Skill Development initiative provides vocational training, soft skills, and industry-relevant certifications to enhance job opportunities.",
    },
  ];

  const handleButtonClick = () => {
    setShowMore(true);
  };

  const openModal = (content) => {
    setModalContent(content);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <section ref={otherServicesRef} id="OtherServices" className="services-section">
      <h2 className="services-heading">Our Other Programmes</h2>
      <p className="services-subheading">Our other range of programmes.</p>

      {/* Always visible main service */}
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

      {/* Show button only if more services are hidden */}
      {!showMore && (
        <button className="know-more-button" onClick={handleButtonClick}>
          Find here
        </button>
      )}

      {/* Display other cards BELOW the heading when revealed */}
      {showMore && (
        <div className="services-grid">
          {otherServices.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <button
                className="read-more-button"
                onClick={() => openModal(service.more)}
              >
                Read More
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="modal-close" onClick={closeModal}>
              &times;
            </span>
            <p>{modalContent}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;
