import React, { useState, useEffect } from 'react';
import Footer from './Homefooter';
import BannerBoxes from './BannerBox';
import WhatWeDo from './Whatwedo';
import DiscoverSection from './DiscoverSection';
import BigDataServicesArea from './BigDataServicesArea';

const Home = () => {
  const [backgroundIndex, setBackgroundIndex] = useState(0);
  const [showBanner, setShowBanner] = useState(true);
  const [nextImage, setNextImage] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedDot, setSelectedDot] = useState(0);

  const backgrounds = [
    '/Image1.jpg',
    '/Image2.jpg',
    '/Image3.jpg',
    '/Image4.jpg',
    '/Image6.jpg',
    // Add more image paths here
  ];

  const textContents = [
    'Transforming businesses with cutting-edge IT solutions for a brighter tomorrow.',
    '"Navigating the digital frontier with cloud-powered innovation."',
    'Unleashing the potential of AI to redefine possibilities',
    'Turning data into insights, driving decisions that matter.',
    'Harnessing the power of data analytics for smarter, more agile businesses.',
    // Add more text content here
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setShowBanner(scrollPosition <= 200);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setNextImage(backgrounds[(backgroundIndex + 1) % backgrounds.length]);
      setTimeout(() => {
        setBackgroundIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
        setNextImage(null);
      }, 1000); // Adjust the timeout duration as needed
    }, 5000);

    return () => clearInterval(interval);
  }, [backgroundIndex, backgrounds.length]);

  const handleDotClick = (index) => {
    setSelectedImage(index);
    setBackgroundIndex(index);
    setSelectedDot(index);
  };

  const handleNavigation = (direction) => {
    const newIndex = direction === 'left'
      ? (selectedImage - 1 + backgrounds.length) % backgrounds.length
      : (selectedImage + 1) % backgrounds.length;

    setSelectedImage(newIndex);
    setBackgroundIndex(newIndex);
    setSelectedDot(newIndex);
  };

  const textContainerStyle = {
    textAlign: 'left',
    color: '#ffffff',
    padding: '20px',
    width: '50%',
    position: 'absolute',
    top: '50%',
    left: '30%',
    transform: 'translate(-50%, -50%)',
    zIndex: 1,
    transition: 'opacity 0.5s ease-in-out',
    opacity: showBanner ? 1 : 0,
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
  };

  const navigationButtonStyle = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    background: 'none',
    border: 'none',
    fontSize: '24px',
    color: '#ffffff',
    cursor: 'pointer',
  };

  return (
    <>
      {/* Your Header Component */}
      <header>
        {/* Include your header component code here */}
      </header>

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

          {/* Banner Boxes */}
          {showBanner && <BannerBoxes />}

          {/* Dots for pagination */}
          <div style={{ position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '10px' }}>
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

          {/* Navigation buttons */}
          <button onClick={() => handleNavigation('left')} style={{ ...navigationButtonStyle, left: '10px' }}>
            {'<'}
          </button>
          <button onClick={() => handleNavigation('right')} style={{ ...navigationButtonStyle, right: '10px' }}>
            {'>'}
          </button>
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
