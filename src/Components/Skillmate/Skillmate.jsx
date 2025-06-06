/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import about_img1 from '../../assets/about_img1.jpg';
import about_img2 from '../../assets/about_img2.jpg';
import about_img3 from '../../assets/about_img3.jpg';
import learn_img from '../../assets/learn_img.png';
import practice_img from '../../assets/practice_img.png';
import intern_img from '../../assets/intern_img.png';
import './Skillmate.css';

const Skillmate = () => {
  const [index, setIndex] = useState(0);

  // Mock data for carousel images
  const carouselImages = [
    { id: 1, src: about_img1, alt: 'about_img1' },
    { id: 2, src: about_img2, alt: 'about_img2' },
    { id: 3, src: about_img3, alt: 'about_img3' },
    // Add more carousel images here as needed
  ];

  // Function to handle index change for carousel
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  // Automatically scroll the carousel every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [carouselImages.length]);

  return (
    <div className="methodology">
      {/* Left Side Carousel */}
      <div className="carousel-container">
        <Carousel activeIndex={index} onSelect={handleSelect} interval={null} pause={false}>
          {carouselImages.map((image) => (
            <Carousel.Item key={image.id}>
              <img src={image.src} alt={image.alt} className="carousel-image" />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      {/* Right Side Section with Connecting Lines */}
      <div className="methodology-details">
        <div className="section">
          <img src={learn_img} alt="Learn Icon" className="icon" />
          <div>
            <h3>Learn</h3>
            <p>
              Project based learning environment to understand the practical application of
              theoretical concepts by deeply engaging the students.
            </p>
          </div>
        </div>
        <hr className="line" /> {/* Connecting Line */}
        <div className="section">
          <img src={practice_img} alt="Practice Icon" className="icon" />
          <div>
            <h3>Practice</h3>
            <p>
              Practice through problem-solving and project building can make a student an expert in
              their field of interest.
            </p>
          </div>
        </div>
        <hr className="line" /> {/* Connecting Line */}
        <div className="section">
          <img src={intern_img} alt="Intern Icon" className="icon" />
          <div>
            <h3>Intern</h3>
            <p>
              Collaborative working environment with industry mentorship to make young talent ready
              for real world challenges.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skillmate;
