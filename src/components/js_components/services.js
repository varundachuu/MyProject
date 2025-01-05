import React, {useRef}from "react";
import "../css-files/services.css";

const Services = () => {
  const service = useRef(null);

  const services = [
    {
      title: "Web Application Development",
      description: "Building responsive and robust websites for your business.",
      icon: "🌐",
    },
    {
      title: "Software Products & Custumization",
      description: "Customized SaaS platforms to streamline your operations.",
      icon: "☁️",
    },
    {
      title: "Reporting and Analytics Services",
      description: "Insights through detailed reports and analytics.",
      icon: "📊", // Bar Chart for data aggregation representation
    },
    {
      title: "Digital Marketing & Lead Generation",
      description: "Boost your online presence with tailored marketing strategies.",
      icon: "📈",
    },
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications.",
      icon: "📱",
    },
    {
      title: "Data Aggregation Services",
      description: "Tools for collecting and organizing data effectively.",
      icon: "📊", // Bar Chart for data aggregation representation
    },
    {
      title: "BIM, LiDAR, GIS Photogrammetry",
      description: "Integrated solutions for spatial data and analysis.",
      icon: "🌍", // Globe for spatial analysis representation
    },
    
  ];

  return (
    <section ref={service} id="service" className="services-section">
      <h2 className="services-heading">Our Services</h2>
      <p className="services-subheading">
        We offer a range of services designed to help your business thrive.
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
