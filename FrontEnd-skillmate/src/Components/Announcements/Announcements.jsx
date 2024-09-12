/* eslint-disable no-unused-vars */
import React from 'react';
import Marquee from 'react-fast-marquee';
import './Announcements.css';

const Announcements = () => {
  return (
    <div className="announcements-container">
      <div className="announcement-title">
        Announcements
      </div>
      <Marquee
        pauseOnHover={true}
        speed={50}
        gradient={false}
        className="scrolling-headlines"
      >
        <div className="headline">
          <a href="https://cetcell.mahacet.org/wp-content/uploads/2023/12/10052024Revised.pdf">Revised Schedule of CET A.Y. 2024-25</a>
        </div>
        <div className="headline">
          <a href="https://cetcell.mahacet.org/wp-content/uploads/2023/12/BBABCACET.pdf">Clarification regarding BCA/BBA/BMS/BMM CET 2024 <img decoding="async" src="https://cetcell.mahacet.org/wp-content/uploads/2023/12/blinknew.gif" alt="new"/></a>
        </div>
        {/* Add more headlines as needed */}
      </Marquee>
    </div>
  );
};

export default Announcements;
