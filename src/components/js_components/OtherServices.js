import React, { useRef, useState } from "react";
import "../css-files/services.css";

const Services = () => {
  const otherServicesRef = useRef(null);
  const [isEnlarged, setIsEnlarged] = useState(false);
  const [showMoreCards, setShowMoreCards] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const services = [
    {
      title: "E-Shikshana",
      description: "A transformative learning programme.",
      details:
        "E-Shikshana is an innovative digital education programme designed to deliver quality learning to students in remote areas. It includes interactive lessons, assessments, and mentorship to transform the way students learn.",
      icon: "📕",
    },
    {
      title: "Skill Up",
      description: "Upskill with industry-relevant courses.",
      details:
        "Skill Up helps professionals and students gain new skills through certified courses, expert mentoring, and practical projects to boost employability.",
      icon: "🎓",
    },
    {
      title: "Tech Connect",
      description: "Connecting technology with learning.",
      details:
        "Tech Connect bridges the gap between technology and education by providing schools with smart classrooms, training for teachers, and digital resources.",
      icon: "💻",
    },
  ];

  const handleButtonClick = () => {
    setIsEnlarged(true);
    setTimeout(() => {
      setIsEnlarged(false);
      setShowMoreCards(true);
    }, 500);
  };

  const handleReadMore = (details) => {
    setModalContent(details);
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
        {services
          .filter((_, index) => index === 0 || showMoreCards)
          .map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <button
                className="read-more-button"
                onClick={() => handleReadMore(service.details)}
              >
                Read More
              </button>
            </div>
          ))}
      </div>

      {!showMoreCards && (
        <>
          <h3 className="services-know-more-heading">
            Want to Know More? About our courses
          </h3>
          <button
            className={`know-more-button ${isEnlarged ? "enlarged" : ""}`}
            onClick={handleButtonClick}
          >
            Find Here
          </button>
        </>
      )}

      {modalContent && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
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
