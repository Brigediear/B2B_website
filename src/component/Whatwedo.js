import React, { useState, useEffect } from 'react';

const WhatWeDo = () => {
  const [hoveredBox, setHoveredBox] = useState(null);
  const [pointerPosition, setPointerPosition] = useState(0);

  useEffect(() => {
    const animatePointer = () => {
      const newPointerPosition = (pointerPosition + 1) % 100;
      setPointerPosition(newPointerPosition);
    };

    const interval = setInterval(animatePointer, 50); // Adjust the interval for the desired speed
    return () => clearInterval(interval);
  }, [pointerPosition]);

  const handleHover = (box) => {
    setHoveredBox(box);
    // Set the pointer position based on the hovered box
    if (box === 'dataAnalytics') {
      setPointerPosition(0);
    } else if (box === 'technology') {
      setPointerPosition(50); // Assuming there are two boxes and pointer moves halfway
    }
  };

  const handleLeave = () => {
    setHoveredBox(null);
    setPointerPosition(0); // Reset pointer position when leaving
  };

  return (
    <section className="what-we-do-area ptb-80 text-center">
      <style>
        {`
          .pointer {
            width: 20px;
            height: 20px;
            background: #288939;
            position: absolute;
            top: -7.5px;
            border-radius: 50%;
            transition: left 0.5s ease;
          }

          .larger-icon {
            font-size: 2em;
          }

          .single-what-we-do-box {
            margin: 0 15px 20px;
            padding: 20px;
            transition: background-color 0.3s ease;
            border: 2px solid #288939;
            position: relative;
          }

          .box-data-analytics {
            background: ${hoveredBox === 'dataAnalytics' ? 'linear-gradient(135deg, #012353, #43e794)' : '#fff'};
            color: ${hoveredBox === 'dataAnalytics' ? '#fff' : '#000'};
          }

          .box-technology {
            background: ${hoveredBox === 'technology' ? 'linear-gradient(135deg, #012353, #43e794)' : '#fff'};
            color: ${hoveredBox === 'technology' ? '#fff' : '#000'};
          }

          /* Additional styles to remove underline and set text color for links */
          .single-what-we-do-box a {
            text-decoration: none; /* Remove underline */
            color: inherit; /* Inherit the color from the parent element */
          }
        `}
      </style>
      <div className="container">
        <div className="section-title">
          <h2>What We Do</h2>
          <div className="bar" style={{ height: '5px', width: '10%', background: '#cdf1d8', margin: '20px auto', position: 'relative', borderRadius: '30px', overflow: 'hidden' }}>
            <div
              className="pointer"
              style={{ left: `${pointerPosition}%` }} // Set left position dynamically
            ></div>
          </div>
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
