import React from 'react';

const DiscoverSection = () => {
  return (
    <div
      className="row align-items-center"
      style={{
        alignItems: 'center!important',
        position: 'relative',
        zIndex: '1',
        background: 'linear-gradient(135deg, #012353 , #43e794)',
        paddingTop: '50px',
        paddingBottom: '50px',
      }}
    >
      <div
        className="col-lg-6 col-md-12"
        style={{
          '--bs-gutter-x': '1.6rem',
          '--bs-gutter-y': '0.5',
          display: 'flex',
          flexWrap: 'wrap',
          marginTop: 'calc(-1 * var(--bs-gutter-y))',
          marginRight: 'calc(-.5 * var(--bs-gutter-x))',
          marginLeft: 'calc(-.5 * var(--bs-gutter-x))',
        }}
      >
        <div className="discover-image">
        <img
  alt="image"
  loading="lazy"
  width="320"
  height="320"
  decoding="async"
  data-nimg="1"
  style={{ marginLeft: '70px' }}  
  src="ImageAI.jpg"
/>
<img
  alt="image"
  loading="lazy"
  width="360"
  height="300"
  decoding="async"
  data-nimg="1"
  style={{ marginLeft: '250px', marginTop: '-150px' }}
  src="ImageAI2.jpg"
/>

        </div>
      </div>
      <div className="col-lg-6 col-md-12">
        <div className="discover-content">
          <h2>Engaging New Audiences through Smart Approach</h2>
          <p>
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
            in some form, by injected humour, or randomised words which don't look even slightly believable. If you are
            going to use a passage.
          </p>
          <a className="btn btn-primary" href="/bigdata-analytics/#">                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
            Discover More
          </a>
        </div>
      </div>
    </div>
  );
};

export default DiscoverSection;
