// Contact.js
import React from 'react';
import Footer from './Homefooter';

const Contact = () => {
  const containerStyle = {
    minHeight: '113vh', // Set minimum height to full viewport height
    display: 'flex',
    flexDirection: 'column',
    backgroundImage: 'url("https://img.freepik.com/free-photo/green-texture_1160-721.jpg?size=626&ext=jpg&ga=GA1.1.448000883.1707674317&semt=ais")',
    backgroundRepeat: 'repeat-x',
    padding: '1px', // Adjust padding as needed
  };

  return (
    <div style={containerStyle}>
      <h1>CONTACT</h1>
      {/* Other content goes here */}
      <h6>CONTACT US</h6>
      <p>Get in touch with BitTowByte</p>
      <div style={{ flexGrow: 1 }}></div>
      <Footer />
    </div>
  );
};

export default Contact;
