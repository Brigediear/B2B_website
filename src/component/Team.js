import React from 'react';
import Footer from './Homefooter';

const Team = () => {
  return (
    <div style={{ position: 'relative' }}>
      <video 
        autoPlay
        loop
        muted
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      >
        <source src="C:\Users\khusb\Documents\React_File\video (2160p).mp4" type="video/mp4" />
        {/* Add additional source elements for different video formats if needed */}
      </video>
      <div className="Team">
        <h1>BitTwoByte Team</h1>
        <p>Thought Leadership | Excellence | Impactful</p>
        <p>Get To Know The Team</p>
        <p>The team at bittwobyte believes in empowering teams to deliver their most impactful work, by building a culture
          of innovation & growth, where everyone can thrive.</p>
      </div>

      <h2 style={{ textAlign: 'center' }}>Our Team</h2>

      <div className="row">
        {/* Your team member cards */}
        <div className="column">
          {/* Team member card example */}
          <div className="card">
            <img src="..." alt="Team Member" style={{ width: '100%' }} />
            <div className="container">
              <h2>Team Member Name</h2>
              <p className="title">Team Member Title</p>
              <p>Some text that describes the team member.</p>
            </div>
          </div>
        </div>
        {/* Repeat similar structure for other team members */}
      </div>

      {/* Your actual Footer component */}
      <Footer />
    </div>
  );
};

export default Team;
