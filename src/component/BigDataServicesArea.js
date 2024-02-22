// BigDataServicesArea.js

import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase, faChartBar, faGavel } from '@fortawesome/free-solid-svg-icons';

const SingleServiceItem = ({ title, description, icon }) => {
  const boxContainerStyle = {
    border: '2px solid #288939',
    padding: '20px',
    borderRadius: '10px',
    marginBottom: '20px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  };

  return (
    <div className="col-lg-4 col-md-6 col-sm-12 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100" data-aos-duration="500" data-aos-once="true">
      <div style={boxContainerStyle}>
        <div className="single-services-box-item">
          {/* FontAwesome icon */}
          <div className="icon">
            <FontAwesomeIcon icon={icon} style={{ color: '#288939', fontSize: '2rem' }} />
          </div>
          <h3><a href="/services/service-details/">{title}</a></h3>
          <p>{description}</p>
          <a className="learn-more-btn" href="/services/service-details/"></a>
          <div className="shape">
            <img alt="image" loading="lazy" width="500" height="300" decoding="async" data-nimg="1" style={{ color: 'transparent' }} src="/images/bigdata-analytics/rectangle.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

const BigDataServicesArea = () => {
  const [pointerPosition, setPointerPosition] = useState(0);

  useEffect(() => {
    const animatePointer = () => {
      const newPointerPosition = (pointerPosition + 1) % 100;
      setPointerPosition(newPointerPosition);
    };

    const interval = setInterval(animatePointer, 50); // Adjust the interval for the desired speed
    return () => clearInterval(interval);
  }, [pointerPosition]);

  return (
    <div
      className="bigdata-services-area ptb-80 bg-eef6fd text-center"
      style={{ '--bs-gutter-x': '1.5rem', '--bs-gutter-y': 0, width: '100%', padding: '0 calc(var(--bs-gutter-x) * .5)', margin: '0 auto' }}
    >
      <div className="container">
        <div className="section-title">
          <h2>Services We Can Help You With</h2>
          <div className="bar" style={{ height: '5px', width: '10%', background: '#cdf1d8', margin: '20px auto', position: 'relative', borderRadius: '30px', overflow: 'hidden' }}>
            <div
              className="pointer"
              style={{ width: '20px', height: '20px', background: '#288939', position: 'absolute', top: '-7.5px', left: `calc(${pointerPosition}%)`, borderRadius: '50%', transition: 'left 0.5s ease' }}
            ></div>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>

        <div className="row justify-content-center">
          {/* Service 1: Big Data Analysis */}
          <SingleServiceItem
            title="Big Data Analysis"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ut labore et dolore magna aliqua."
            icon={faDatabase}
          />

          {/* Service 2: Data Visualization */}
          <SingleServiceItem
            title="Data Visualization"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ut labore et dolore magna aliqua."
            icon={faChartBar}
          />

          {/* Service 3: Data Governance */}
          <SingleServiceItem
            title="Data Governance"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ut labore et dolore magna aliqua."
            icon={faGavel}
          />

          {/* Add more services as needed */}
        </div>
      </div>
    </div>
  );
};

export default BigDataServicesArea;
