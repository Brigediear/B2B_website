// QualityEngineeringService.js
import React from 'react';

const QualityEngineeringService = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div>
        <img src={process.env.PUBLIC_URL + '/dataEngineer.jpg'} alt="Quality Engineering" style={{ maxWidth: '100%' }} />
      </div>
      <div style={{ marginLeft: '20px' }}>
        <h6>Quality Engineering</h6>
        <p>A Quality Engineer is a professional who monitors and tests the quality of products in industries such as manufacturing and automotive. They ensure compliance with standards, identify issues, recommend solutions, and create quality documentation. Skills include knowledge of ISO standards, problem-solving, attention to detail, and a degree in engineering.</p>
      </div>
    </div>
  );
};

export default QualityEngineeringService;

