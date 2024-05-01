import React, { useState, useEffect } from 'react';
import Footer from './Homefooter';

const TechnologyPage = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Mock data with placeholder image URLs
    const mockCategories = [
      {
        id: 1,
        name: 'ETL & BI Tools',
        height: '100px',
        items: [
          { id: 9, imageUrl: 'tools_Talend.png' },
          { id: 10, imageUrl: 'Tools_IPC.png' },
          { id: 12, imageUrl: 'Tools_Apache_Hadoop.png' },
          { id: 13, imageUrl: 'Tools_Pentaho.png' },
          { id: 14, imageUrl: 'Tools_Apache_Airflow.png' },
          { id: 15, imageUrl: 'Tools_Airbyte.png' },
          { id: 16, imageUrl: 'Tools_PowerBI.png' },
          { id: 17, imageUrl: 'Tools_Tableau.png' },
          { id: 18, imageUrl: 'Tools_YellowfinBI.png' },
          { id: 19, imageUrl: 'Tools_Metabase.png' },
        ],
      },
      {
        id: 2,
        name: 'Databases',
        items: [
          { id: 1, imageUrl: 'Database_MongoDB.png' },
          { id: 2, imageUrl: 'Database_Amazon_Redshift.png' },
          { id: 3, imageUrl: 'Database_BigQuery.png' },
          { id: 4, imageUrl: 'Database_Snowflake.png' },
          { id: 5, imageUrl: 'Database_MariaDB.png' },
          { id: 6, imageUrl: 'Database_PostgreSQL.png' },
          { id: 7, imageUrl: 'Database_MySQL.png' },
          { id: 8, imageUrl: 'Database_Microsoft_SQL_Server.png' },
        ],
      },
      {
        id: 3,
        name: 'Manage & Control',
        items: [
          { id: 20, imageUrl: 'Manage_Jenkins.PNG' },
          { id: 21, imageUrl: 'Manage_bitbucket.png' },
          { id: 22, imageUrl: 'Manage_Docker.png' },
          { id: 23, imageUrl: 'Manage_GitHub.png' },
        ],
      },
      {
        id: 4,
        name: 'Programming Languages',
        items: [
          { id: 24, imageUrl: 'Languages_python.png' },
          { id: 25, imageUrl: 'Language_MIX.png' },
          { id: 28, imageUrl: 'Language_Vue.png' },
          { id: 29, imageUrl: 'Language_Node.png' },
          { id: 30, imageUrl: 'Languages_PHP.png' },
          { id: 32, imageUrl: 'Language_React.png' },
          { id: 35, imageUrl: 'Language_Salesforce.png' },
        ],
      },
      {
        id: 5,
        name: 'Cloud and Other Services',
        items: [
          { id: 36, imageUrl: 'Cloud_Amazon_Lambda.png' },
          { id: 37, imageUrl: 'Cloud_Git.png' },
          { id: 38, imageUrl: 'Cloud_AWSS3.png' },
          { id: 39, imageUrl: 'Cloud_AWS_RDS.png' },
          { id: 45, imageUrl: 'Cloud_AWS_SES.png' },
          { id: 46, imageUrl: 'Cloud_Selenium.png' },
        ],
      },
    ];

    setCategories(mockCategories);
  }, []); // Fix: Correct the dependency array

  const BlankPage = () => (
    <div style={{ position: 'relative' }}>
      <div
        style={{
          height: '40vh',
          backgroundImage: `url("tech1.jpg")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '20px',
          borderRadius: '5px',
          marginBottom: '20px',
          textAlign: 'left',
        }}
      >
        <h1 style={{ color: '#fff' }}>TECHNOLOGY</h1>
      </div>
      <Content />
    </div>
  );

  const Content = () => (
    <div style={{ color: '#000000', zIndex: 1 }}>
      <p>
        BitTwoByte Technology is a cutting-edge firm dedicated to pioneering solutions across various digital domains.
        Specializing in software development, data analytics, and cloud computing, BitTwoByte offers tailored services
        to streamline business operations. With a focus on innovation and efficiency, BitTwoByte empowers organizations
        to leverage technology effectively for enhanced productivity and growth. From creating custom software
        solutions to optimizing data analytics pipelines, BitTwoByte is committed to delivering top-notch services that
        align with clients' unique needs. With a team of skilled professionals and a customer-centric approach,
        BitTwoByte aims to drive digital transformation and propel businesses towards success in today's rapidly
        evolving technological landscape.
      </p>
    </div>
  );

  const pageContainerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
    color: '#000000', // Change text color to black
    backgroundColor: '#ffffff',
  };

  const containerStyle = {
    backgroundColor: '#ffffff',
    padding: '10px',
    borderRadius: '5px',
    borderBottom: '5px solid #000000',
    borderTop: 'none',
    textAlign: 'center',
    marginBottom: '20px', // Add margin bottom for spacing
  };

  const headingStyle = {
    color: '#000000', // Change heading color to black
    marginBottom: '10px', // Add margin bottom for spacing
  };

  const listStyle = {
    listStyleType: 'none',
    padding: '0',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  };

  const listItemStyle = {
    marginBottom: '10px',
    marginRight: '20px',
    width: '200px',
    height: '150px',
    transition: 'transform 0.3s ease-in-out',
  };

  const handleMouseEnter = (e) => {
    e.target.style.transform = 'scale(0.9)';
  };

  const handleMouseLeave = (e) => {
    e.target.style.transform = 'scale(1)';
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  };

   // Style for the footer
   const footerStyle = {
    height: '100px', // Adjust the height here
    backgroundColor: '#000000',
    color: '#ffffff',
    textAlign: 'center',
    paddingTop: '20px',
  };

  return (
    <div style={pageContainerStyle}>
      <BlankPage />
      <div style={{ marginTop: '20px' }}>
        {categories.map((category) => (
          <div key={category.id} style={containerStyle} className="technology-container">
            <h2 style={headingStyle}>{category.name}:</h2>
            <ul style={listStyle}>
              {category.items.map((item) => (
                <li
                  key={item.id}
                  style={listItemStyle}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <img src={item.imageUrl} alt={item.name} style={imageStyle} />
                  <p>{item.name}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <Footer />
    </div>
    
  );
};

export default TechnologyPage;
