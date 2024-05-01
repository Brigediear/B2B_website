import React from 'react';

const DiscoverSection = () => {
  return (
    <div
      className="container-fluid" // Use container-fluid to make the width full-screen
      style={{
        position: 'relative',
        zIndex: '1',
        background: 'linear-gradient(135deg, #012353 , #43e794)',
        paddingTop: '50px',
        paddingBottom: '50px',
        paddingLeft: '20px', // Adjust left padding
        paddingRight: '20px', // Adjust right padding
      }}
    >
      <div
        className="row align-items-center"
        style={{
          alignItems: 'center!important',
          '--bs-gutter-x': '1.6rem',
          '--bs-gutter-y': '0.5',
          display: 'flex',
          flexWrap: 'wrap',
          marginTop: 'calc(-1 * var(--bs-gutter-y))',
          marginRight: 'calc(-.5 * var(--bs-gutter-x))',
          marginLeft: 'calc(-.5 * var(--bs-gutter-x))',
        }}
      >
        <div className="col-lg-6 col-md-12">
          <div className="discover-image">
            <img
              alt="image"
              loading="lazy"
              width="500"
              height="500"
              decoding="async"
              data-nimg="1"
              style={{ marginLeft: '8px' }}  
              src="ImageAI.png"
            />
          </div>
        </div>
        <div className="col-lg-6 col-md-12">
          <div className="discover-content">
            <h2 style={{ color: '#ffffff' }}>Engaging New Audiences through Smart Approach</h2>
            <p style={{ color: '#ffffff' }}>
            Captivate and enchant burgeoning audiences with masterful finesse, intricately weaving connections through insightful engagement.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscoverSection;
