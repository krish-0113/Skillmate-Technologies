/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './Collaborations.css'; 
import academiaImage1 from '../../assets/academia1.png'; // Adjust the path and image names as per your project structure
import academiaImage2 from '../../assets/academia2.png'; 
import academiaImage3 from '../../assets/academia3.png'; 
import academiaImage4 from '../../assets/academia4.png'; 
import industriesImage1 from '../../assets/industries1.png'; 
import industriesImage2 from '../../assets/industries2.png'; 
import industriesImage3 from '../../assets/industries3.png'; 
import industriesImage4 from '../../assets/industries4.png'; 

const Collaborations = () => {
  const [selectedOption, setSelectedOption] = useState(null); // State to track selected option

  // Data structure for options and corresponding images
  const options = [
    { id: 'academia', name: 'ACADEMIA', images: [academiaImage1, academiaImage2, academiaImage3, academiaImage4] },
    { id: 'industries', name: 'INDUSTRIES', images: [industriesImage1, industriesImage2, industriesImage3, industriesImage4] }
  ];

  // Function to handle option selection
  const handleOptionSelect = (optionId) => {
    setSelectedOption(optionId); // Update state with selected option id
  };

  return (
    <div className="collaborations-container">
      <h2>Our Collaborations</h2>

      {/* Container for options (ACADEMIA and INDUSTRIES) */}
      <div className="options-container">
        {/* Render options dynamically */}
        {options.map(option => (
          <div
            key={option.id}
            className={`option ${selectedOption === option.id ? 'selected' : ''}`} // Conditional class based on selection
            onClick={() => handleOptionSelect(option.id)} // Click handler for option
          >
            {option.name}
          </div>
        ))}
      </div>

      {/* Container for displaying collaboration images */}
      <div className="collaboration-image">
        {/* Display images based on selected option */}
        {selectedOption && (
          options.find(option => option.id === selectedOption).images.map((image, index) => (
            <img key={index} src={image} alt={`Collaboration ${index + 1}`} />
          ))
        )}

        {/* Display message when no option is selected */}
        {!selectedOption && (
          <p>Select an option to view collaborations</p>
        )}
      </div>
    </div>
  );
};

export default Collaborations;
