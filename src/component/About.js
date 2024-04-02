import React from 'react';

const AboutUs = () => {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1>About Us</h1>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ marginBottom: '40px' }}>
          <h2 style={{ color: '#760d39', marginBottom: '10px' }}>Who We Are</h2>
          <p style={{ lineHeight: '1.6' }}>Celebal Technologies is a premier software services company specializing in digital transformation and enterprise reinvention, delivering end-to-end results to clients across diverse sectors. Our dynamic suite of advanced solutions built on Generative AI, Machine Learning, Data Science, Industry Data Models, Infrastructure & Database Migration, SAP Extend & Innovate, App Modernization, and Enterprise Cloud Integration, positions us at the nexus of traditional enterprise systems and modern cloud innovation. With a global presence spanning the USA, India, APAC, UAE, Europe, and Canada, Celebal Technologies boasts a dedicated workforce of over 2000+ professionals that serve up an impressive client base, including 90% of Fortune 500 companies, guiding them through their transformative digital journeys.</p>
        </div>
        <div style={{ marginBottom: '40px' }}>
          <h2 style={{ color: '#760d39', marginBottom: '10px' }}>Our Mission</h2>
          <p style={{ lineHeight: '1.6' }}>Our mission is to make data simple and easy to understand for all organizations. We are committed to providing solutions powered by modern cloud and artificial intelligence that integrate with traditional enterprise software. Our tailor-made solutions help enterprises maximise productivity, improve speed and accuracy.</p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
