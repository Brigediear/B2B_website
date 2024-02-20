import React, { useEffect } from 'react';
import Footer from './Homefooter';

const Careers = () => {
  useEffect(() => {
    // Select the element using querySelector
    const targetElement = document.querySelector("#post-2323 > div > div > section.elementor-section.elementor-top-section.elementor-element.elementor-element-4a69cd0a.elementor-section-full_width.elementor-section-content-middle.inner-page-banner.elementor-section-height-default.elementor-section-height-default > div.elementor-container.elementor-column-gap-default > div > div");

    // Check if the element is found before manipulating its content
    if (targetElement) {
      // Set the inner HTML or text content as needed
      targetElement.innerHTML = `
        <h1>CAREERS</h1>
        <h6>CAREERS @ BITTWOBYTE</h6>
        <p>Join Us. Build your career, live your life.</p>
        <!-- Other content goes here -->
      `;
    }
  }, []); // Empty dependency array to run the effect only once when the component mounts

  const containerStyle = {
    minHeight: '120vh', // Set minimum height to full viewport height
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'powderblue',
    padding: '1px', // Adjust padding as needed
  };

  return (
    <div style={containerStyle}>
      {/* Content will be set dynamically using the useEffect hook */}
      <h1>CAREERS</h1>
      <h6>CAREERS @ BITTWOBYTE</h6>
      <p>Join Us. Build your career, live your life.</p>
      <div style={{ flexGrow: 1 }}></div>
      <Footer />
    </div>
  );
};

export default Careers;
