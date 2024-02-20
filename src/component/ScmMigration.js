// UpgradeMigrationServices.js

import React, { useState } from 'react';
import Footer from './Homefooter'; // Placeholder for the Footer component, update the path based on your file structure

const serviceOptions = {
  'Supply Chain': {
    title: 'Supply Chain',
    description: "The first step in upgrade and migration services is to assess the current system or software and plan the transition. This includes understanding the existing infrastructure, identifying compatibility issues, and creating a comprehensive roadmap for the upgrade or migration process.",
    image: 'Upgrade and Migration Services.jpg',
  },
};

const UpgradeMigrationServices = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const styles = {
    serviceBox: {
      margin: '20px',
      padding: '20px',
      border: '1px solid #ccc',
    },
    service: {
      /* Add styles for the service container */
    },
    options: {
      listStyle: 'none',
      padding: '0',
    },
    optionItem: {
      display: 'inline-block',
      margin: '5px',
      cursor: 'pointer',
      padding: '8px',
      backgroundColor: '#eee',
      borderRadius: '5px',
    },
    serviceDetails: {
      marginTop: '20px',
    },
    description: {
      maxWidth: '500px',
      marginRight: '20px',
    },
    image: {
      img: {
        maxWidth: '100%',
        height: 'auto',
      },
    },
    footer: {
      marginTop: 'auto',
    },
  };

  return (
    <div style={styles.serviceBox}>
      <div style={styles.service}>
        <ul style={styles.options}>
          {Object.keys(serviceOptions).map((option) => (
            <li key={option} style={styles.optionItem} onClick={() => setSelectedOption(option)}>
              {option}
            </li>
          ))}
        </ul>
        {selectedOption && (
          <div style={styles.serviceDetails}>
            <div style={styles.description}>
              <h3>{serviceOptions[selectedOption].title}</h3>
              <p>{serviceOptions[selectedOption].description}</p>
            </div>
            <div style={styles.image}>
              <img src={process.env.PUBLIC_URL + '/' + serviceOptions[selectedOption].image} alt="Service Image" style={styles.image.img} />
            </div>
          </div>
        )}
      </div>
      <div style={styles.footer}>
        {/* Your Footer Component Goes Here */}
        <Footer />
      </div>
    </div>
  );
};

export default UpgradeMigrationServices;
