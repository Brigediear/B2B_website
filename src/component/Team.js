import React, { useState, useEffect } from 'react';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import Footer from './Homefooter';

function importAll(r) {
  return r.keys().map(key => ({ name: key.split('/').pop().split('.')[0], src: r(key) }));
}

const images = importAll(require.context('./', false, /\.(png|jpg|svg)$/));

const Team = () => {
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    // Mock data for team members
    const mockTeamMembers = [
      { name: 'Vijay Patel', designation: 'Co-Founder | Sr. V.P.', imageSrc: 'Vijay.png', description: 'Some description for Vijay Patel.' }
    ];
    setTeamMembers(mockTeamMembers);
  }, []);

  const blankPageStyle = {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '20px',
    borderRadius: '5px',
    marginBottom: '10px',
    textAlign: 'left',
    height: '5vh', // Adjust the height as per your requirement
  };

  const BlankPage = () => (
    <div>
      <div className="background-image"></div>
      <div style={blankPageStyle}></div>
    </div>
  );

  const SortableTeamMember = SortableElement(({ member }) => (
    <div className="team-member">
      <img src={member.imageSrc} alt={member.name} />
      <div className="team-member-info">
        <h3>{member.name}</h3>
        <p>{member.designation}</p>
      </div>
    </div>
  ));

  const SortableTeamContainer = SortableContainer(({ teamMembers }) => (
    <div className="team-container">
      {teamMembers.map((member, index) => (
        <SortableTeamMember key={index} index={index} member={member} />
      ))}
    </div>
  ));

  const cssStyles = `
    /* Styles for the container of team members */
    .team-container {
      display: flex;
      justify-content: center; /* Center horizontally */
    }

    .team-member {
      text-align: center;
      margin: auto; /* Center horizontally */
      margin-top: 50px; /* Adjust top margin as needed */
      width: calc(33.33% - 30px);
      box-sizing: border-box;
      background-color: hsl(0, 0%, 100%);
      padding: 15px;
      position: relative;
      overflow: hidden;
      border-radius: 15px;
      transition: transform 0.3s;
    }

    /* Hover effect on team member boxes */
    .team-member:hover {
      transform: scale(1.05);
    }

    /* Styling for team member images */
    .team-member img {
      width: 150px;
      height: 150px;
      border-radius: 60%;
      object-fit: cover;
    }

    /* Styles for team member names */
    .team-member h3 {
      margin-top: 20px; /* Adjust the margin to your preference */
      font-size: 1.5rem;
      color: #000000;
      line-height: 1;
    }

    /* Styles for team member descriptions */
    .team-member p {
      color: #000000;
      font-weight: bold;
    }

    /* SeniorTeam.css */
    .background-image {
      background-image: url('founder.png'); 
      background-size: cover;
      background-position: center;
      height: 300px; /* Set the height as needed */
      width: 100%;
    }

    .blank-page {
      background-color: #ffff;
      padding: 20px;
      border-radius: 5px;
      margin-bottom: 10px;
      text-align: left;
      height: 5vh; /* Adjust the height as per your requirement */
    }

    .team-members-wrapper {
      background-color: rgb#ffff; /* Set the background color for the team members' wrapper */
      padding: 20px; /* Set padding as needed */
      border-radius: 15px; /* Optional: Add border-radius for a rounded look */
      box-shadow: 0 4px 12px rgba(151, 13, 13, 0.1); /* Optional: Add box-shadow for a subtle effect */
    }
  `;

  return (
    <>
      <style>{cssStyles}</style>
      <BlankPage />
      <div className="blank-page">
        <h1 style={{ textAlign: 'center', color: '#000000', background: 'none', padding: 0 }}>Leadership</h1>
        <p style={{ textAlign: 'center', color: '#000000' }}>
         <h5> The team at BitTwoBye believes in empowering teams to deliver their most impactful work, by building a culture
          of innovation & growth, where everyone can thrive.</h5>
        </p>
        <div className="team-members-wrapper">
          <SortableTeamContainer teamMembers={teamMembers} />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Team;
