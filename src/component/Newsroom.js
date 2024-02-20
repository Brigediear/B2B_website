import React from 'react';
import Footer from './Homefooter';

const Newsroom = () => {
  const containerStyle = {
    minHeight: '110vh', // Set minimum height to full viewport height
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'gray',
    padding: '1px', // Adjust padding as needed
  };

  return (
    <div style={containerStyle}>
      <h6>COMPANY NEWSROOM</h6>
      {/* Other content goes here */}
      <h1>NEWSROOM</h1>
      <div style={{ flexGrow: 1 }}></div>
      <Footer />
    </div>
  );
};

export default Newsroom;
