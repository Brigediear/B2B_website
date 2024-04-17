import React, { useState, useEffect, useRef } from 'react';
import Footer from './Homefooter';
import WhatWeDo from './Whatwedo';
import DiscoverSection from './DiscoverSection';
import BigDataServicesArea from './BigDataServicesArea';

const Home = () => {
  const [backgroundIndex, setBackgroundIndex] = useState(0);
  const [showBanner, setShowBanner] = useState(false);
  const [nextImage, setNextImage] = useState(null); // <-- Add nextImage state
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedDot, setSelectedDot] = useState(0);
  const bannerRef = useRef(null);

  const backgrounds = [
    '/Image2.jpg',
    '/Image3.jpg',
    '/Image4.jpg',
    '/Image6.jpg',
    // Add more image paths here
  ];

  const textContents = [
    '"Navigating the digital frontier with cloud-powered innovation."',
    'Unleashing the potential of AI to redefine possibilities',
    'Turning data into insights, driving decisions that matter.',
    'Harnessing the power of data analytics for smarter, more agile businesses.',
    // Add more text content here
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setShowBanner(scrollPosition <= 100);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedImage((prevIndex) => (prevIndex + 1) % backgrounds.length);
      setSelectedDot((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 3000); // Change the image every 3 seconds

    return () => clearInterval(interval);
  }, [backgrounds.length]);

  useEffect(() => {
    // Preload the next image
    const image = new Image();
    const nextIndex = (selectedImage + 1) % backgrounds.length;
    image.src = `${process.env.PUBLIC_URL}${backgrounds[nextIndex]}`;
    image.onload = () => {
      setNextImage(image.src);
    };
  }, [selectedImage, backgrounds]);
  const handleDotClick = (index) => {
    setSelectedImage(index);
    setBackgroundIndex(index);
    setSelectedDot(index);
  };

  const textContainerStyle = {
    textAlign: 'left',
    color: '#ffffff',
    padding: '20px',
    width: '50%',
    position: 'absolute',
    top: '40%',
    left: '30%',
    transform: 'translate(-50%, -50%)',
    zIndex: 1,
    transition: 'opacity 0.5s ease-in-out',
    opacity: showBanner ? 1 : 0,
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
  };

  const bannerBoxesStyle = {
    position: 'absolute',
    bottom: '0',
    left: '0',
    width: '100%',
    background: 'transparent',
    padding: '20px 0',
    zIndex: 3, // Ensure banner boxes are above the navigation buttons
    display: showBanner ? 'block' : 'none',
  };

  const navbarStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 4, // Ensure navbar is above the banner boxes
    // Add additional styling as needed
  };

  useEffect(() => {
    const handleScroll = () => {
      if (bannerRef.current) {
        const scrollPosition = window.scrollY;
        const bannerTop = bannerRef.current.getBoundingClientRect().top;
        if (bannerTop <= 100) {
          setShowBanner(true);
        } else {
          setShowBanner(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

    return (
    <>
      {/* Your Header Component */}
      <header style={navbarStyle}>
        {/* Include your header component code here */}
      </header>

      {/* Banner Boxes */}
      <div ref={bannerRef} style={bannerBoxesStyle}>
        <div className="banner-boxes-container">
<style>
  {`
    .banner-boxes-container {
      background-position: 50%;
      background-size: cover;
      background-repeat: no-repeat;
      padding-top: 280px; /* Change this value to adjust the height */
      padding-bottom: 25px;
      display: flex;
      justify-content: space-between; /* Align banner boxes horizontally */
    }

    .single-banner-boxes {
      background-color: transparent;
      border: 1px solid #ccc;
      padding: 20px;
      border-radius: 10px;
      text-align: center;
      flex: 1; /* Equal width for all banner boxes */
      height: 100%; /* Set height to fill the container */
    }

    .single-banner-boxes:hover {
      background: linear-gradient(135deg, #012353, #43e794);
    }

    .single-banner-boxes:hover h3,
    .single-banner-boxes:hover p {
      color: #ffffff;
    }
  `}
</style>

          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-sm-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100" data-aos-duration="500" data-aos-once="true">
                <div className="single-banner-boxes">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
                    <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
                    <line x1="6" y1="6" x2="6.01" y2="6" />
                    <line x1="6" y1="18" x2="6.01" y2="18" />
                  </svg>
                  <h3>Analyze Your Data</h3>
                  <p>Analyze the data systematically by conducting exploratory data analysis, identifying patterns, and deriving actionable insights to inform decision-making.</p>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100" data-aos-duration="500" data-aos-once="true">
                <div className="single-banner-boxes">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                  </svg>
                  <h3>Customized Plan</h3>
                  <p>Develop a tailored data analysis plan by assessing specific objectives, identifying relevant data sources, and applying appropriate analytical techniques to derive actionable insights.</p>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100" data-aos-duration="500" data-aos-once="true">
                <div className="single-banner-boxes">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                  <h3>Implement Solution</h3>
                  <p>Execute the solution by systematically deploying strategies, monitoring progress, and adapting approaches to achieve desired outcomes.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ height: '100vh', overflow: 'hidden', position: 'relative' }}>
        <div
          style={{
            backgroundImage: `url('${process.env.PUBLIC_URL}${backgrounds[selectedImage]}')`,
            backgroundSize: 'cover',
            height: '100%',
            position: 'relative',
          }}
        >
          {/* Preload next image */}
          {nextImage && (
            <img
              src={`${process.env.PUBLIC_URL}${nextImage}`}
              alt={`Preload ${nextImage}`}
              style={{ display: 'none' }}
            />
          )}

          {/* Text Container */}
          <div style={textContainerStyle}>
            <h1>{textContents[selectedImage]}</h1>
          </div>

          {/* Dots for pagination */}
          <div style={{ position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '10px', zIndex: 2 }}>
            {backgrounds.map((_, index) => (
              <div
                key={index}
                onClick={() => handleDotClick(index)}
                style={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  backgroundColor: index === selectedDot ? '#00b300' : '#cccccc',
                  cursor: 'pointer',
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* WhatWeDo */}
      <WhatWeDo />
      <DiscoverSection />
      <BigDataServicesArea />
      {/* Footer */}
      <Footer />
    </>
  );
};

export default Home;