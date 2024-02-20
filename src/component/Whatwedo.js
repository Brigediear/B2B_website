import React from 'react';

const WhatWeDo = () => {
  return (
    <section className="what-we-do-area ptb-80 text-center">
      <style>
        {`
          .larger-icon {
            font-size: 2em; /* Adjust the font size to make the icon larger */
          }

          .single-what-we-do-box {
            margin-bottom: 20px; /* Add some margin to the boxes for spacing */
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
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="single-what-we-do-box">
              <div className="icon larger-icon">&#128161;</div>
              <h3><a href="/services/service-details/">Data Analytics</a></h3>
              <p>Lorem ipsum dolor sit consectetur, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
            </div>
          </div>

          {/* Technology Section */}
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="single-what-we-do-box">
              <div className="icon larger-icon">&#9881;</div>
              <h3><a href="/services/service-details/">Technology</a></h3>
              <p>Lorem ipsum dolor sit consectetur, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
           
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhatWeDo;
