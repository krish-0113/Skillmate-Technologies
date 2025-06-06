/* eslint-disable no-unused-vars */
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './About.css';
import about_img4 from '../../assets/about_img4.jpeg';
// import play_icon from '../../assets/play_icon.png';
import about from '../../assets/about.png';

// eslint-disable-next-line react/prop-types
const About = ({ setPlayState }) => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about} alt="about_img"   
        />
      </div>
      <div className="about-right">
        <h3>ABOUT SKILLMATE TECHNOLOGIES</h3>
        <h2>Skillmate </h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla quae, veritatis, ullam sed saepe iure ex minus aliquid voluptatum
          tempora alias! Deserunt voluptatum, ratione ab excepturi molestias ad recusandae neque adipisci qui explicabo vitae omnis quisquam,
          itaque et dolore laudantium.
        </p>
      </div>
    </div>
  );
};

export default About;
