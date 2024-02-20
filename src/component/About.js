import React from 'react';
import Footer from './Homefooter';

const About = () => {
  const containerStyle = {
    width: '100%',
    minHeight: '149vh', // Set minimum height to full viewport height
    display: 'flex',
    flexDirection: 'column',
    backgroundImage: 'url("https://img.freepik.com/free-photo/perfect-green-grass_1122-632.jpg?w=996&t=st=1707674793~exp=1707675393~hmac=655d4ec485d672cb8905d0d28fafc00c5ff7ea5f3cb89189dbb4593e4a23aeba")',
    backgroundRepeat: 'repeat-x',
    padding: '1px', // Adjust padding as needed
  };

  return (
    <div style={containerStyle}>
      <h3>ABOUT</h3>
      {/* Other content goes here */}
      <p>
        <h1>
          EXPLORE. ENGAGE. EXPERIENCE.
          Our mission is to empower businesses with products & solutions to achieve more – to create a positive impact on people, and society at large.
        </h1>
      </p>
      <div style={{ flexGrow: 1 }}></div>
      <Footer />
    </div>
  );
};

export default About;
