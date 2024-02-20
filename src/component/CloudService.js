import React from 'react';

const CloudService = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div style={{ marginRight: '20px' }}>
        <h3>Cloud</h3>
        <p>Cloud services are application and infrastructure resources that exist on the Internet. Third-party providers contract with subscribers for these services, allowing customers to leverage powerful computing resources without having to purchase or maintain hardware and software.</p>
      </div>
      <div>
        <img src={process.env.PUBLIC_URL + '/cloud.jpg'} alt="Cloud" style={{ maxWidth: '100%' }} />
      </div>
    </div>
  );
};

export default CloudService;
