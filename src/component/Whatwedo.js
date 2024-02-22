import React, { useState } from 'react';

const WhatWeDo = () => {
  const [hoveredBox, setHoveredBox] = useState(null);

  const handleHover = (box) => {
    setHoveredBox(box);
  };

  const handleLeave = () => {
    setHoveredBox(null);
  };

  return (
    <section className="what-we-do-area ptb-80 text-center">
      <style>
        {`
          .larger-icon {
            font-size: 2em; /* Adjust the font size to make the icon larger */
          }

          .single-what-we-do-box {
            margin: 0 15px 20px; /* Add some margin to the boxes for spacing */
            padding: 20px;
            transition: background-color 0.3s ease; /* Add transition for a smooth background color change */
            border: 2px solid #288939; /* Fixed border color */
          }

          .box-data-analytics {
            background: ${hoveredBox === 'dataAnalytics' ? 'linear-gradient(135deg, #012353, #43e794)' : '#fff'};
            color: ${hoveredBox === 'dataAnalytics' ? '#fff' : '#000'};
          }

          .box-technology {
            background: ${hoveredBox === 'technology' ? 'linear-gradient(135deg, #012353, #43e794)' : '#fff'};
            color: ${hoveredBox === 'technology' ? '#fff' : '#000'};
          }
        `}
      </style>
      <div className="container">
        <div className="section-title">
          <h2>What We Do</h2>
          <div className="bar"></div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className="row justify-content-center">
          {/* Data Analytics Section */}
          <div
            className="col-lg-4 col-md-6 col-sm-6 single-what-we-do-box box-data-analytics"
            onMouseEnter={() => handleHover('dataAnalytics')}
            onMouseLeave={handleLeave}
          >
            <div className="icon larger-icon">&#128161;</div>
            <h3><a href="/services/service-details/">Data Analytics</a></h3>
            <p>Lorem ipsum dolor sit consectetur, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
          </div>

          {/* Technology Section */}
          <div
            className="col-lg-4 col-md-6 col-sm-6 single-what-we-do-box box-technology"
            onMouseEnter={() => handleHover('technology')}
            onMouseLeave={handleLeave}
          >
            <div className="icon larger-icon">&#9881;</div>
            <h3><a href="/services/service-details/">Technology</a></h3>
            <p>Lorem ipsum dolor sit consectetur, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhatWeDo;
