import React from 'react';
import Footer from './Homefooter';

function AboutUsComponent() {
  const styles = {
    section: {
      width: '100%',
    },
    aboutUsSection: {
      background: '#760d39',
      color: 'white',
    },
    whoWeAreSection: {
      background: 'linear-gradient(135deg, #012353, #43e794)',
      color: 'white', // Updated text color
    },
    imageContainer: {
      position: 'relative',
      height: '60vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    },
    imageText: {
      color: 'white',
      fontSize: 'calc(12px + 3vmin)',
      textAlign: 'left',
    },
    textContainer: {
      padding: '20px',
      textAlign: 'center',
      maxWidth: '800px',
      margin: '0 auto',
    },
    text: {
      color: 'white', // Updated text color
      textAlign: 'center',
    },
  };

  return (
    <div className='containerStyle' style={{ alignItems: 'center', backgroundColor: 'white' }}>
    <div style={{ backgroundImage: "url('About.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '50vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <div style={{ color: 'white', fontSize: 'calc(12px + 3vmin)', textAlign: 'left' }}>
        <h1>About Us</h1>
      </div>
    </div>
      {/* Who We Are Section */}
      <div style={{ ...styles.section, ...styles.whoWeAreSection }}>
        <div style={styles.textContainer}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ ...styles.circle, top: '-50px', left: '50px' }}>
              <svg style={styles.svg} className="about-us_topvector__iX6GI" xmlns="http://www.w3.org/2000/svg" width="176" height="112" viewBox="0 0 176 112" fill="none">
                <path d="M174.454 111.264L0.246582 110.191C1.24017 48.8377 79.7399 -0.388021 175.865 0.0727062L174.448 111.264" fill="#6F0934"></path>
              </svg>
            </div>
            <div style={{ ...styles.circle, top: '-50px', right: '50px' }}>
              <svg style={styles.svg} className="about-us_topvector__iX6GI" xmlns="http://www.w3.org/2000/svg" width="176" height="112" viewBox="0 0 176 112" fill="none">
                <path d="M174.454 111.264L0.246582 110.191C1.24017 48.8377 79.7399 -0.388021 175.865 0.0727062L174.448 111.264" fill="#6F0934"></path>
              </svg>
            </div>
          </div>
          <h1 style={{ textAlign: 'center' }}>Who We Are</h1>
          <p style={styles.text}>BitTwoByte is an IT services organization with the latest technology assets in the Banking, Healthcare, Retail, and Manufacturing domains. It helps organizations achieve frictionless business by transforming their applications, infrastructure, and data to provide operational efficiency, business scale, and an enhanced customer experience.</p>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ ...styles.circle, bottom: '-50px', left: '50px' }}>
              <svg style={styles.svg} className="about-us_bottomvector__nKh54" xmlns="http://www.w3.org/2000/svg" width="201" height="139" viewBox="0 0 201 139" fill="none">
                <path d="M0.513672 138.489V0C110.623 0.168209 199.825 62.069 200.061 138.484H0.513672" fill="#6F0934"></path>
              </svg>
            </div>
            <div style={{ ...styles.circle, bottom: '-50px', right: '50px' }}>
              <svg style={styles.svg} className="about-us_bottomvector__nKh54" xmlns="http://www.w3.org/2000/svg" width="201" height="139" viewBox="0 0 201 139" fill="none">
                <path d="M0.513672 138.489V0C110.623 0.168209 199.825 62.069 200.061 138.484H0.513672" fill="#6F0934"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
	   <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ flex: 1, padding: '0 20px' }}>
          <h2  style={{ textAlign: 'center' }}>Our Mission</h2>
          <p>
        
Our mission is to simplify and enhance data comprehension for all organizations, encompassing data engineering and data management. We are dedicated to delivering solutions driven by cutting-edge cloud technology and artificial intelligence, seamlessly integrating with conventional enterprise software. Our customized solutions enable enterprises to optimize productivity, enhance speed, ensure accuracy, and effectively manage and engineer their data assets.
          </p>
        </div>
        <div style={{ flex: 1, width: '50%' }}> {/* Adjusted width */}
          <img src="mission.jpg" style={{ width: '100%', height: 'auto' }}/> {/* Adjusted image size */}
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default AboutUsComponent;
