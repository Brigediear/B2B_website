import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar, faTools, faGavel,faFlask } from '@fortawesome/free-solid-svg-icons';

// Define the styled component
const ServiceItemWrapper = styled.div`
  /* Add your styles here */
  .single-services-box-item {
    position: relative; /* Ensure positioning context for the image */
    border: 2px solid #288939;
    padding: 20px;
    border-radius: 10px;
    margin-bottom: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
  }

  .single-services-box-item:hover {
    transform: scale(1.1); /* Scale up on hover */
    z-index: 2;
  }

  .icon {
    color: #288939;
    font-size: 2rem;
  }

  h3 a {
    /* Add your link styles here */
    color: inherit;
    text-decoration: none;
  }

  /* Add the rest of your styles here... */
`;

const SingleServiceItem = ({ title, description, icon }) => {
  return (
    <ServiceItemWrapper className="col-lg-4 col-md-6 col-sm-12 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100" data-aos-duration="500" data-aos-once="true">
      <div className="single-services-box-item">
        {/* Image in the top right corner */}
        <img src="rectangle.png" alt="Service Image" style={{ position: 'absolute', top: 0, right: 0, width: '300px', height: '100px', borderRadius: '50%', zIndex: 1 }} />

        {/* FontAwesome icon */}
        <div className="icon">
          <FontAwesomeIcon icon={icon} />
        </div>
        <h3><a href="Data Analytics">{title}</a></h3>
        <p>{description}</p>
        <a className="learn-more-btn" href="/services/service-details/"></a>
        <div className="shape">

        </div>
      </div>
    </ServiceItemWrapper>
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
    <div className="bigdata-services-area ptb-80 bg-eef6fd text-center">
      <div className="container">
        <div className="section-title">
          <h2>Services We Can Help You With</h2>
          <div className="bar" style={{ height: '5px', width: '10%', background: '#cdf1d8', margin: '20px auto', position: 'relative', borderRadius: '30px', overflow: 'hidden' }}>
            <div
              className="pointer"
              style={{ width: '20px', height: '20px', background: '#288939', position: 'absolute', top: '-7.5px', left: `calc(${pointerPosition}%)`, borderRadius: '50%', transition: 'left 0.5s ease' }}
            ></div>
          </div>
          <p>Provide comprehensive services tailored to your needs, ranging from consulting and strategy development to implementation and support.</p>
        </div>

        <div className="row justify-content-center">
          {/* Service 1:  Data Analytics */}
          <SingleServiceItem
            title="Data Analytics"
            description="Analyze vast datasets to uncover patterns, trends, and insights that drive informed decision-making and strategic initiatives."
            icon={faChartBar}
            link="Data Analytics"
          />

          {/* Service 2: Data Engineering */}
          <SingleServiceItem
            title="Data Engineering"
            description="Condense intricate data into visually engaging formats to simplify comprehension and streamline communication within Data Engineering."
            icon={faTools}
            link="Data Engineering"
          />

          {/* Service 3: Data Governance */}
          <SingleServiceItem
            title="Data Governance"
            description="Establish robust data governance frameworks to ensure data quality, integrity, and compliance across the organization."
            icon={faGavel}
            link="Data Governance"
          />

           {/* Service 3: Data Science */}
           <SingleServiceItem
            title="Data Science"
            description="Develop rigorous data governance structures to maintain high standards of quality, integrity, and compliance throughout Data Science operations."
            icon={faFlask}
            link="Data Science"
          />

          {/* Add more services as needed */}
        </div>
      </div>
    </div>
  );
};

export default BigDataServicesArea;
