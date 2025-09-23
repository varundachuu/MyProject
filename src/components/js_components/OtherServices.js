import React, { useRef, useState } from "react";
import "../css-files/other-services.css"; // ✅ clean filename

const Services = () => {
  const otherServicesRef = useRef(null);
  const [showMore, setShowMore] = useState(false);

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

  const handleKnowMoreClick = () => {
    setShowMore(true);
    // ✅ scroll to section when clicked
    otherServicesRef.current?.scrollIntoView({ behavior: "smooth" });
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
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Services;
