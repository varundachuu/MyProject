import React from "react";
import styles from "../css-files/whyChooseUs.module.css"; // Import styles as a module

const WhyChooseUs = () => {
  const features = [
    {
      title: "Scalable Solutions",
      description:
        "Our platform grows with your business, ensuring you stay ahead of the competition.",
      icon: "🚀",
    },
    {
      title: "24/7 Support",
      description:
        "Round-the-clock assistance from our dedicated team to keep you running smoothly.",
      icon: "💡",
    },
    {
      title: "Affordable Pricing",
      description:
        "Get premium features at an unbeatable cost, tailored to your business needs.",
      icon: "💰",
    },
    {
      title: "Easy Integration",
      description:
        "Seamlessly integrate with your existing tools for a hassle-free experience.",
      icon: "🔧",
    },
  ];

  return (
    <div className={styles["why-choose-us"]}>
      <h2 className={styles.heading}>Why Choose Us?</h2>
      <p className={styles.subheading}>We bring unmatched value to your SaaS journey.</p>
      <div className={styles["features-container"]}>
        {features.map((feature, index) => (
          <div className={styles["feature-card"]} key={index}>
            <div className={styles.icon}>{feature.icon}</div>
            <h3 className={styles["feature-title"]}>{feature.title}</h3>
            <p className={styles["feature-description"]}>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
