/* eslint-disable no-unused-vars */

import React from 'react';
import './Hero.css';
import { Link as RouterLink } from 'react-router-dom';
import arrow from '../../assets/arrow.png';
import hero_img from '../../assets/Hero.jpg';
import Carousel from '../Carousel/Carousel';
import c_im1 from '../../assets/c1.jpeg';
import c_im2 from '../../assets/c2.jpg';
import c_im3 from '../../assets/c3.png';

const carouselData = [
  { src: c_im1, alt: 'First slide label' },
  { src: c_im3, alt: 'Second slide label' },
  { src: c_im2, alt: 'Third slide label' },
];

const Hero = () => {
  return (
    <div className="hero" style={{ backgroundImage: `linear-gradient(rgba(8, 0, 58, 0.8), rgba(8, 0, 58, 0.8)), url(${hero_img})` }}>
      {/* <Carousel data={carouselData} /> */}
      <div className="hero-text">
        <h1>Empowering Career Growth with Industry-Relevant Skill Development Programs</h1>
        <p>Skillmate Technologies provides in-demand skill development programs designed by industry professionals to boost job prospects and career growth in the Indian market.</p>
        <RouterLink to="/courses" className="btn">
          Explore more
          <img src={arrow} alt="arrow" />
        </RouterLink>
      </div>
      <div className="hero-right">
      <Carousel data={carouselData} />
    </div>
    </div>
    
  );
};

export default Hero;
