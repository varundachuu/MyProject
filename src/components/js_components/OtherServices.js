import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloud,
  faTools,
  faCode,
  faSyncAlt,
  faRobot,
  faMobileAlt,
  faChartBar,
  faShieldAlt,
} from "@fortawesome/free-solid-svg-icons";
import "../css-files/services.css";

const Services = () => {
  const otherServicesRef = useRef(null);
  const [isEnlarged, setIsEnlarged] = useState(false);

  const services = [
    {
      id: 1,
      icon: faCloud,
      title: "Cloud Integration",
      description:
        "Scale effortlessly with secure, cost-effective cloud solutions tailored to your business needs.",
    },
    {
      id: 2,
      icon: faTools,
      title: "Custom SaaS Development",
      description:
        "Transform your business with our SaaS expertise—streamlined, scalable, and user-focused solutions.",
    },
    {
      id: 3,
      icon: faCode,
      title: "Web Development",
      description:
        "Elevate your online presence with responsive, fast, and captivating websites tailored to your brand and goals.",
    },
    {
      id: 4,
      icon: faSyncAlt,
      title: "Digital Transformation",
      description:
        "Boost efficiency with our automation services—saving time, reducing errors, and optimizing workflows.",
    },
    {
      id: 5,
      icon: faRobot,
      title: "AI & ML Solutions",
      description:
        "Unlock AI’s potential with solutions for smarter decisions, improved outcomes, and enhanced efficiency.",
    },
    {
      id: 6,
      icon: faMobileAlt,
      title: "Mobile App Development",
      description:
        "Stay connected with custom iOS and Android apps—secure, user-friendly, and designed to engage users anywhere.",
    },
    {
      id: 7,
      icon: faChartBar,
      title: "Data Analytics",
      description:
        "Turn data into insights with our analytics services, driving smarter decisions and optimizing operations.",
    },
    {
      id: 8,
      icon: faShieldAlt,
      title: "Cybersecurity",
      description:
        "Protect your business with our web security solutions, ensuring your digital assets are safe from threats.",
    },
  ];

  const handleButtonClick = () => {
    setIsEnlarged(true);
    setTimeout(() => {
      setIsEnlarged(false);
    }, 1000);
  };

  return (
    <section ref={otherServicesRef} id="OtherServices" className="services-section">
      <h2 className="services-heading">Our Other Programmes</h2>
      <p className="services-subheading">Our other range of programmes.</p>

      <div className="services-grid">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <div className="service-icon">
              <FontAwesomeIcon icon={service.icon} />
            </div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>

      <h3 className="services-know-more-heading">Want to Know More? About our courses</h3>
      <button
        className={`know-more-button ${isEnlarged ? "enlarged" : ""}`}
        onClick={handleButtonClick}
      >
        Find here
      </button>
    </section>
  );
};

export default Services;
