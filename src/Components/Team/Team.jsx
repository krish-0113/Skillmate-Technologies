/* eslint-disable no-unused-vars */
import React from 'react';
import './Team.css';
import teamMember1 from '../../assets/teamMember1.jpg';
import teamMember2 from '../../assets/teamMember2.jpg';
import teamMember3 from '../../assets/teamMember3.jpg';
import teamMember4 from '../../assets/teamMember4.jpg';

const Team = () => {
  const teamMembers = [
    {
      name: 'Gajanan Trikutwar',
      jobTitle: 'CEO',
      image: teamMember1,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat...',
    },
    {
      name: 'Jane Smith',
      jobTitle: 'COO',
      image: teamMember2,
      description: 'Integer rutrum ante eu lacus convallis, sit amet porta leo tincidunt...',
    },
    {
      name: 'Michael Johnson',
      jobTitle: 'CTO',
      image: teamMember3,
      description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada...',
    },
    {
      name: 'Emily Brown',
      jobTitle: 'Head of Marketing',
      image: teamMember4,
      description: 'Curabitur nec augue non ex cursus sodales ac eget lorem...',
    },
  ];

  return (
    <div className="team-container">
      <h2>Meet Our Team</h2>
      <div className="team-members">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <div className="member-card">
              <img src={member.image} alt={member.name} className="member-avatar" />
              <div className="member-details">
                <h3>{member.name}</h3>
                <p className="job-title">{member.jobTitle}</p>
                <p className="member-description">{member.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
