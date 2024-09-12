/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// /* eslint-disable react/prop-types */
// /* eslint-disable no-unused-vars */
// import React, { useState, useEffect } from "react";
// import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
// import "./Carousel.css";

// export const Carousel = ({ data, autoScroll = true, interval = 3000 }) => {
//   const [slide, setSlide] = useState(0);

//   // Function to move to the next slide
//   const nextSlide = () => {
//     setSlide((slide + 1) % data.length);
//   };

//   // Function to move to the previous slide
//   const prevSlide = () => {
//     setSlide(slide === 0 ? data.length - 1 : slide - 1);
//   };

//   // Effect to handle automatic scrolling
//   useEffect(() => {
//     let slideInterval = null;
//     if (autoScroll) {
//       slideInterval = setInterval(() => {
//         nextSlide();
//       }, interval);
//     }
//     return () => {
//       if (slideInterval) {
//         clearInterval(slideInterval);
//       }
//     };
//   }, [slide, autoScroll, interval]);

//   return (
//     <div className="carousel">
//       <BsArrowLeftCircleFill onClick={prevSlide} className="arrow arrow-left" />
//       {data.map((item, idx) => (
//         <img
//           key={idx}
//           src={item.src}
//           alt={item.alt}
//           className={slide === idx ? "slide" : "slide slide-hidden"}
//         />
//       ))}
//       <BsArrowRightCircleFill onClick={nextSlide} className="arrow arrow-right" />
//       <span className="indicators">
//         {data.map((_, idx) => (
//           <button
//             key={idx}
//             className={slide === idx ? "indicator" : "indicator indicator-inactive"}
//             onClick={() => setSlide(idx)}
//           ></button>
//         ))}
//       </span>
//     </div>
//   );
// };

import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Carousel.css'
import c_im1 from '../../assets/c1.jpeg';
import c_im2 from '../../assets/c2.jpg';
import c_im3 from '../../assets/c3.png';

const Carousel = ({data}) => {
  return (
    <div className='Carousel-container'>
        <div id="carouselExampleCaptions" className="carousel slide" >
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={c_im1} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={c_im3} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={c_im2} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
    </div>
    </div>
  )
}

export default Carousel