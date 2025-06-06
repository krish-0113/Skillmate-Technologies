/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import about_img4 from '../../assets/about_img4.jpeg';
import play2_icon from '../../assets/play2_icon.png';
import learn_img from '../../assets/learn_img.png';
import practice_img from '../../assets/practice_img.png';
import intern_img from '../../assets/intern_img.png';
import video_player from '../../assets/video_player.mp4';
import './Methodology.css';

const Methodology = () => {
  const [playVideo, setPlayVideo] = useState(false);

  return (
    <div className="about">
      <div className="about-left">
        {playVideo ? (
          <video className="about_video" controls autoPlay>
            <source src={video_player} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <>
            <img src={about_img4} alt="about_img" className="about_img" />
            <img
              src={play2_icon}
              alt="play_icon"
              className="play_icon"
              onClick={() => setPlayVideo(true)}
            />
          </>
        )}
      </div>
      <div className="about-right">
        <div className="item">
          <img src={learn_img} alt="Learn Icon" />
          <div>
            <h3>Learn</h3>
            <p>Project based learning environment to understand the practical application of theoretical concepts by deeply engaging the students.</p>
          </div>
        </div>
        <div className="item">
          <img src={practice_img} alt="Practice Icon" />
          <div>
            <h3>Practice</h3>
            <p>Practice through problem-solving and project building can make a student an expert in their field of interest.</p>
          </div>
        </div>
        <div className="item">
          <img src={intern_img} alt="Intern Icon" />
          <div>
            <h3>Intern</h3>
            <p>Collaborative working environment with industry mentorship to make young talent ready for real world challenges.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Methodology;
