import React from "react";
import "../css-files/Products.css"; // keep CSS path correct

const Products = () => {
  return (
    <section id="Products" className="services-section">
      <h2 className="services-heading">Our Product</h2>
      <p className="services-subheading">A glimpse of our product offering.</p>

      <div className="services-grid">
        <div className="service-card">
          <div className="service-icon">📦</div>
          <h3 className="service-title">Product</h3>
          <p className="service-description">
            This is our flagship product designed to deliver value and solve key business challenges.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Products;
