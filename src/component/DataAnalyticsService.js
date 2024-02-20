import React from 'react';


const DataAnalyticsService = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div>
        <img
          src={process.env.PUBLIC_URL + '/dataAnalytics.jpg'}
          alt="Data Analytics"
          style={{ maxWidth: '60%' }}
        />
      </div>
      <div style={{ marginRight: '0px' }}>
        <h5>Data Analytics</h5>
        <p>World’s Leading AI & Machine Learning Company. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntut labore et dolore magna aliqua. Quis ipsum suspendisse ultricesgravida. </p>
      </div>
    </div>
  );
};

export default DataAnalyticsService;
