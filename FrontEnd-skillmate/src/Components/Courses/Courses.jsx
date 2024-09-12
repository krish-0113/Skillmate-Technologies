/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Courses.css';
import card_img4 from '../../assets/card_img4.jpg';
import card_img5 from '../../assets/card_img5.jpg';
import card_img3 from '../../assets/card_img3.jpeg';
import card_img8 from '../../assets/card_img8.jpeg';
import card_img11 from '../../assets/card_img11.jpeg';
import card_img9 from '../../assets/card_img9.jpeg';
import card_img10 from '../../assets/card_img10.jpg';
import next_icon from '../../assets/next_icon.png';
import back_icon from '../../assets/back_icon.png';

const Courses = ({ isLoggedIn }) => {
  const slider = useRef();
  const navigate = useNavigate();
  let tx = 0;

  const slideForward = () => {
    if (tx > -75) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const handleBuyNow = async (course) => {
    if (!isLoggedIn) {
      navigate('/login');
    } else {
      try {
        await axios.post('http://localhost:3000/buy', { course });
        alert('Purchase successful!');
        navigate('/buy');
      } catch (err) {
        console.error('Buy Error:', err);
        alert('Buy Error: ' + err.message);
      }
    }
  };

  return (
    <div className="courses">
      <h1 className="text-center text-success">Courses</h1>
      <img src={next_icon} alt="Next" className="next-btn" onClick={slideForward} />
      <img src={back_icon} alt="Back" className="back-btn" onClick={slideBackward} />
      <div className="card-container">
        <div className="slider" ref={slider}>
          <div className="card-row">
            {[
              { img: card_img4, title: 'Course 1', text: 'Description for course 1' },
              { img: card_img5, title: 'Course 2', text: 'Description for course 2' },
              { img: card_img3, title: 'Course 3', text: 'Description for course 3' },
              { img: card_img11, title: 'Course 4', text: 'Description for course 4' },
              { img: card_img9, title: 'Course 5', text: 'Description for course 5' },
              { img: card_img10, title: 'Course 6', text: 'Description for course 6' },
              { img: card_img8, title: 'Course 7', text: 'Description for course 7' }
            ].map((course, index) => (
              <div className="card" style={{ width: '18rem' }} key={index}>
                <img src={course.img} className="card-img-top" alt={`${course.title} image`} />
                <div className="card-body">
                  <h5 className="card-title">{course.title}</h5>
                  <p className="card-text">{course.text}</p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">An item</li>
                </ul>
                <div className="card-body">
                  {isLoggedIn ? (
                    <button className="card-link" onClick={() => handleBuyNow(course)}>Buy Now</button>
                  ) : (
                    <Link to="/login" className="card-link">Buy Now</Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
