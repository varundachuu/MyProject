import React, { useState, useEffect } from 'react';
import '../css-files/Founders.css';

const Founder = () => {
  const [isVisible, setIsVisible] = useState(false);

  const team = {
    executives: [
      { image: "./images/Profile-Images/varun1.jpg", name: 'Varun', title: 'Managing Director' },
      { image: "./images/Profile-Images/Yogesh4.jpg", name: 'Yogesh', title: 'Chief Executive Officer' },
    ],
    manager:{ image: "./images/Profile-Images/Ramya.jpg", name: 'Ramya', title: 'Chief Technology Officer' },
    employees: [
      { image: "./images/Profile-Images/Kishore.jpg",name: 'Kishore', title: 'Management Information System - Manager' },
      { image: "./images/Profile-Images/kiran.jpg", name: 'Kiran', title: 'Senior Developer - Manager' },
      { image: "./images/Profile-Images/madhu.jpg", name: 'Madhu Sudhan', title: 'QA Manager' },
      { image: "./images/Profile-Images/prasad1.jpg", name: 'Prasad', title: 'Digital Marketing Executive' },
      { image: "./images/Profile-Images/kavya.jpg", name: 'Kavya', title: 'Accountant Manager' },
    ],
  };

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 300);
  }, []);

  return (
    <div className={`founder-container ${isVisible ? 'visible' : ''}`}>
      <h1 className="founder-heading">Explore Our Team</h1>

      {/* CEO and CTO */}
      <div className="row executives">
        {team.executives.map((exec, index) => (
          <div key={index} className="team-card">
            <img src={exec.image} alt={exec.name} className="team-image" />
            <h3 className="team-name">{exec.name}</h3>
            <p className="team-title">{exec.title}</p>
            <div className="social-links">
              <a href="#" className="social-link">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" className="social-link">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Manager */}
      <div className="row manager">
        <div className="manager-card">
          <img src={team.manager.image} alt={team.manager.name} className="team-image" />
          <h3 className="team-name">{team.manager.name}</h3>
          <p className="team-title">{team.manager.title}</p>
          <div className="social-links">
            <a href="#" className="social-link">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" className="social-link">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Employees with Horizontal Scroll */}
      <div className="scroll-buttons">
        <button
          className="scroll-button left"
          onClick={() =>
            document.querySelector('.employees-scrollable').scrollBy({ left: -200, behavior: 'smooth' })
          }
        >
          &lt;
        </button>
        <div className="row employees-scrollable">
          {team.employees.map((employee, index) => (
            <div key={index} className="employee-card">
              <img src={employee.image} alt={employee.name} className="team-image" />
              <h3 className="team-name">{employee.name}</h3>
              <p className="team-title">{employee.title}</p>
              <div className="social-links">
                <a href="#" className="social-link">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="#" className="social-link">
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
        <button
          className="scroll-button right"
          onClick={() =>
            document.querySelector('.employees-scrollable').scrollBy({ left: 200, behavior: 'smooth' })
          }
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Founder;
