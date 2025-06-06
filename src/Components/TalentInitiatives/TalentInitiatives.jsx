/* eslint-disable no-unused-vars */
import React from 'react';
import './TalentInitiatives.css'; 
import certificate from '../../assets/certificate.png';
import course from '../../assets/course.png';
import skill from '../../assets/skill.png';

const TalentInitiatives = () => {
  return (
    <div className="container">
      {/* Our Talent Initiatives Section */}
      <div className="row">
        <div className="col">
          <div className="talent-initiatives-container">
            <div className="talent-initiatives">
              <h2>Our Talent Initiatives</h2>
              <p>
                Each talent-focused initiative strives to equip students with the necessary technical and professional competencies for job roles. Through industry-endorsed, project-based learning and mentorship, students acquire skills and valuable credentials essential for a successful career journey.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Cards Section using Bootstrap */}
      <div className="row no-wrap">
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="card shadow">
            <img className="card-img-top" src={course} alt="Card image cap" />
            <div className="card-body">
              <h3 className="card-title">Internship & Job</h3>
              <p className="card-text">
                Gain practical experience through internships and job placements in collaboration with industry partners.
              </p>
              <a href="#" className="btn btn-primary">Know More</a>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="card shadow">
            <img className="card-img-top" src={skill} alt="Card image cap" />
            <div className="card-body">
              <h3 className="card-title">Industry Program</h3>
              <p className="card-text">
                Participate in industry-driven programs that bridge academic knowledge with practical skills demanded by employers.
              </p>
              <a href="#" className="btn btn-primary">Know More</a>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="card shadow">
            <img className="card-img-top" src={certificate} alt="Card image cap" />
            <div className="card-body">
              <h3 className="card-title">Placement Courses</h3>
              <p className="card-text">
                Enroll in courses designed to enhance employability, focusing on skills required for placement in top companies.
              </p>
              <a href="#" className="btn btn-primary">Know More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TalentInitiatives;
