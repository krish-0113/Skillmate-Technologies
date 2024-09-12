/* eslint-disable no-unused-vars */
import React from 'react';
import './InfoCard.css';

// Import images for background
import studentsImage from '../assets/students.png';
import collegesImage from '../assets/colleges.png';
import companiesImage from '../assets/companies.jpg';
import internsImage from '../assets/interns.png';
import projectsImage from '../assets/projects.png';

const InfoCard = () => {
  return (
    <div className="info-cards-container">
      <div className="info-card" style={{ backgroundImage: `url(${studentsImage})` }}>
        <div className="info-content">
          <div className="info-icon">
            <i className="fas fa-graduation-cap"></i>
          </div>
          <div className="info-details">
            <h2>800000+</h2>
            <p>STUDENTS</p>
          </div>
        </div>
      </div>

      <div className="info-card" style={{ backgroundImage: `url(${collegesImage})` }}>
        <div className="info-content">
          <div className="info-icon">
            <i className="fas fa-university"></i>
          </div>
          <div className="info-details">
            <h2>2500+</h2>
            <p>COLLEGES</p>
          </div>
        </div>
      </div>

      <div className="info-card" style={{ backgroundImage: `url(${companiesImage})` }}>
        <div className="info-content">
          <div className="info-icon">
            <i className="fas fa-building"></i>
          </div>
          <div className="info-details">
            <h2>50+</h2>
            <p>COMPANIES</p>
          </div>
        </div>
      </div>

      <div className="info-card" style={{ backgroundImage: `url(${internsImage})` }}>
        <div className="info-content">
          <div className="info-icon">
            <i className="fas fa-user-graduate"></i>
          </div>
          <div className="info-details">
            <h2>300000+</h2>
            <p>INTERNS</p>
          </div>
        </div>
      </div>

      <div className="info-card" style={{ backgroundImage: `url(${projectsImage})` }}>
        <div className="info-content">
          <div className="info-icon">
            <i className="fas fa-project-diagram"></i>
          </div>
          <div className="info-details">
            <h2>2000+</h2>
            <p>PROJECTS</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
