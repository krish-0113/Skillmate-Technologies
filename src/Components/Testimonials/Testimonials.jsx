/* eslint-disable no-unused-vars */
import React, { useRef } from 'react';
import './Testimonials.css';
import next_icon from '../../assets/next_icon.png';
import back_icon from '../../assets/back_icon.png';
import krishna from '../../assets/krishna.jpg';
import kamlesh from '../../assets/kamlesh.jpg';
import sachin from '../../assets/sachin.jpg';
import gaju from '../../assets/gaju.png';

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -75) { // Adjusted for four slides, each 25% wide
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

  return (
    <div className='testimonials'>
      <img src={next_icon} alt="" className='next-btn' onClick={slideForward} />
      <img src={back_icon} alt="" className='back-btn' onClick={slideBackward} />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className='slide'>
              <div className="user-info">
                <img src={krishna} alt="" />
                <div>
                  <h3>Krishna Jadhav</h3>
                  <span>Skillmate Technologies</span>
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum deserunt tempore repudiandae alias incidunt quaerat dignissimos, sunt quasi delectus, dolorem beatae odio voluptatibus expedita assumenda, illo at? Iste, non. Sunt officia quos</p>
            </div>
          </li>
          <li>
            <div className='slide'>
              <div className="user-info">
                <img src={kamlesh} alt="" />
                <div>
                  <h3>Shiva</h3>
                  <span>Skillmate Technologies</span>
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum deserunt tempore repudiandae alias incidunt quaerat dignissimos, sunt quasi delectus, dolorem beatae odio voluptatibus expedita assumenda, illo at? Iste, non. Sunt officia quos</p>
            </div>
          </li>
          <li>
            <div className='slide'>
              <div className="user-info">
                <img src={sachin} alt="" />
                <div>
                  <h3>Gajanan Shinde</h3>
                  <span>Skillmate Technologies</span>
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum deserunt tempore repudiandae alias incidunt quaerat dignissimos, sunt quasi delectus, dolorem beatae odio voluptatibus expedita assumenda, illo at? Iste, non. Sunt officia quos</p>
            </div>
          </li>
          <li>
            <div className='slide'>
              <div className="user-info">
                <img src={gaju} alt="" />
                <div>
                  <h3>Saurabh Tikar</h3>
                  <span>Skillmate Technologies</span>
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum deserunt tempore repudiandae alias incidunt quaerat dignissimos, sunt quasi delectus, dolorem beatae odio voluptatibus expedita assumenda, illo at? Iste, non. Sunt officia quos</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
