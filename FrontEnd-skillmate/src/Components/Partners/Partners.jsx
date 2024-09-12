/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './Partners.css';

// Sample industry partner logos (adjust paths as per your project structure)
import partner1 from '../../assets/partner1.png';
import partner2 from '../../assets/partner2.png';
import partner3 from '../../assets/partner3.png';
import partner4 from '../../assets/partner4.png';
import partner5 from '../../assets/partner5.png';
// Add more partner logos as needed

const Partners = () => {
  const [scrolling, setScrolling] = useState(false);

  // Sample industry partners data
  const partners = [
    { id: 1, logo: partner1, name: 'Partner 1' },
    { id: 2, logo: partner2, name: 'Partner 2' },
    { id: 3, logo: partner3, name: 'Partner 3' },
    { id: 4, logo: partner4, name: 'Partner 4' },
    { id: 5, logo: partner5, name: 'Partner 5' },
    // Add more partners as needed
  ];

  const toggleScroll = () => {
    setScrolling(!scrolling);
  };

  return (
    <div className="partners-container">
      <h2>Industry Partners</h2>
      <div className="partners-logos">
        <div className={`scrolling-logos ${scrolling ? 'scrolling' : ''}`}>
          {partners.map((partner) => (
            <img
              key={partner.id}
              src={partner.logo}
              alt={partner.name}
              onClick={toggleScroll}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
