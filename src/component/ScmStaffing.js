import React from 'react';
import Footer from './Homefooter';

const Staffing_IS_IT = () => {
  return (
    <div>
      <div style={{ 
        backgroundImage: 'url("staffing_IS_IT1.jpg")', // Adjusted image file name
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        height: '350px',
      }}>
        <div style={{ 
          position: 'absolute', 
          top: '50%', 
          left: '50%', 
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
        }}>
          <h1 style={{ color: '#000000', fontSize: '40px' }}>Empower Your Business with Staffing Solutions</h1>
          <div style={{ marginTop: '50px' }}>
            <div style={{ 
              display: 'inline-block', 
              width: '200px', 
              height: '100px', 
              backgroundColor: '#ffffff', 
              marginRight: '20px', 
              textAlign: 'center',
              cursor: 'pointer',
            }}>
              <h2>Customized Staffing </h2>
            </div>
            <div style={{ 
              display: 'inline-block', 
              width: '200px', 
              height: '100px', 
              backgroundColor: '#ffffff', 
              marginRight: '20px', 
              textAlign: 'center',
              cursor: 'pointer',
            }}>
              <h2>Streamlined Recruitment </h2>
            </div>
            <div style={{ 
              display: 'inline-block', 
              width: '200px', 
              height: '100px', 
              backgroundColor: '#ffffff', 
              textAlign: 'center',
              cursor: 'pointer',
            }}>
              <h2>Dedicated Support </h2>
            </div>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'top' }}>
        <div style={{ flex: 1, padding: '0 20px', fontSize: 15 }}>
          <h2>Staffing/IS/IT</h2>
          <p>
            In the competitive landscape of IT, having the right talent can make all the difference. Our staffing solutions for IT offer comprehensive services tailored to your specific needs, ensuring that you have the expertise required to drive your projects forward. Whether you need short-term contractors, long-term placements, or specialized skills for a particular project, we've got you covered.

            Our approach to staffing is focused on understanding your unique requirements and providing customized solutions that align with your goals. We leverage our extensive network and industry expertise to source top talent, rigorously vetting candidates to ensure they meet your standards
          </p>  
        </div>
        <div>
        </div>
        <div style={{ flex: 1 }}>
          {/* Use the correct file name and extension */}
          <img src="staffing_IS_IT.png" alt="Management Consulting" style={{ maxWidth: '100%', height: 'auto' }} />
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '30px', background: '#ffffff' }}>
        <div style={{ textAlign: 'center' }}>
          <h1>Optimize Your Workforce with Tailored Staffing Solutions</h1>
        </div>
        <div className='Expertise' style={{ margin: '0px', textRendering: 'inherit', backgroundColor: 'white', transition: 'background-color 0.2s ease', rowGap: '50px', padding: '0 20px' }}>
          {/* Expertise */}
          <div className='heading' style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', justifyContent: 'center', columnGap: '12px', fontSize: '15px', color: '#000000' }} onMouseOver={(e) => { e.currentTarget.style.backgroundColor = '#012353'; e.currentTarget.style.color = 'white'; }} onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'white'; e.currentTarget.style.color = 'black'; }}>
            <h5>Customized Staffing Solutions</h5>
            <span className="our">We offer tailored staffing services designed to meet the specific needs of your business, ensuring the right fit for every role and project.</span>
          </div>
          {/* Scalability */}
          <div className='heading' style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', justifyContent: 'center', columnGap: '12px', fontSize: '15px', color: '#000000' }} onMouseOver={(e) => { e.currentTarget.style.backgroundColor = '#012353'; e.currentTarget.style.color = 'white'; }} onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'white'; e.currentTarget.style.color = 'black'; }}>
            <h5>Streamlined Recruitment Process</h5>
            <span className="our"> Our efficient recruitment process saves you time and resources by swiftly identifying and onboarding top talent, keeping your projects on track.</span>
          </div>
          {/* Reliability */}
          <div className='heading' style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', justifyContent: 'center', columnGap: '12px', fontSize: '15px', color: '#000000' }} onMouseOver={(e) => { e.currentTarget.style.backgroundColor = '#012353'; e.currentTarget.style.color = 'white'; }} onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'white'; e.currentTarget.style.color = 'black'; }}>
            <h5>Dedicated Support and Expertise</h5>
            <span className="our">With our experienced team by your side, you receive dedicated support and industry expertise.</span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Staffing_IS_IT;
