import React, { useRef } from "react";
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
import styles from "../css-files/Features.module.css";

function Features() {
  const featuresRef = useRef(null);

  const features = [
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

  return (
    <div ref={featuresRef} id="features" className={styles["features-section"]}>
      <h2>Our Features</h2>
      <div className={styles["features-row"]}>
        {features.map((feature) => (
          <div key={feature.id} className={styles["feature-card"]}>
            <div className={styles["feature-icon"]}>
              <FontAwesomeIcon icon={feature.icon} />
            </div>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Features;
