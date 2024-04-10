import React from 'react';
import Footer from './Homefooter';

const ImplementationServices = () => {
  return (
    <div>
<div style={{ 
  backgroundImage: 'url("ImplementationServices.jpg")', 
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  position: 'relative',
  height: '600px', // Adjust the height as needed
}}>
  <div style={{ 
    position: 'absolute', 
    top: '50%', 
    left: '50%', 
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
  }}>
    <h1 style={{ color: '#ffffff',fontSize: '40px' }}>Implementation Services Transforming Strategies into Action</h1>
    <div style={{ marginTop: '50px' }}>
      <div style={{ display: 'inline-block', width: '200px', height: '200px', backgroundColor: '#ffffff', marginRight: '20px', textAlign: 'center' }}>
        <h2>Strategy Execution</h2>
      </div>
      <div style={{ display: 'inline-block', width: '200px', height: '200px', backgroundColor: '#ffffff', marginRight: '20px', textAlign: 'center' }}>
        <h2>Project Management</h2>
      </div>
      <div style={{ display: 'inline-block', width: '200px', height: '200px', backgroundColor: '#ffffff', textAlign: 'center' }}>
        <h2>Performance Measurement </h2>
      </div>
    </div>
  </div>
</div>


      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ flex: 1, padding: '0 20px' }}>
          <h2>Implementation Services</h2>
          <p>
          Implementation services involve the practical execution of strategies and plans within an organization to achieve desired outcomes. This encompasses a range of activities focused on translating ideas into action and driving meaningful change. Key components of implementation services include strategy execution, project management, and performance measurement
          </p>
        </div>
        <div style={{ flex: 1 }}>
          <img src="implementation 1.png" alt="Management Consulting" style={{ maxWidth: '100%', height: 'auto' }} />
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '30px', background: '#ffffff' }}>
        <div style={{ textAlign: 'center' }}>
          <h1> Implementation Services</h1>
        </div>
        <div className='Expertise' style={{ margin: '0px', textRendering: 'inherit', backgroundColor: 'white', transition: 'background-color 0.2s ease', rowGap: '50px', padding: '0 20px' }}>
          {/* Expertise */}
          <div className='heading' style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', justifyContent: 'center', columnGap: '12px', fontSize: '15px', color: '#000000' }} onMouseOver={(e) => { e.currentTarget.style.backgroundColor = '#012353'; e.currentTarget.style.color = 'white'; }} onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'white'; e.currentTarget.style.color = 'black'; }}>
            <h5>Strategy Execution</h5>
            <span className="our">Implementation services ensure that strategic plans are effectively executed throughout the organization.</span>
          </div>
          {/* Scalability */}
          <div className='heading' style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', justifyContent: 'center', columnGap: '12px', fontSize: '15px', color: '#000000' }} onMouseOver={(e) => { e.currentTarget.style.backgroundColor = '#012353'; e.currentTarget.style.color = 'white'; }} onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'white'; e.currentTarget.style.color = 'black'; }}>
            <h5>Project Management</h5>
            <span className="our"> Effective project management is essential for successful implementation. It involves planning, organizing, and overseeing projects to ensure they are completed on time, within budget, and according to specifications. </span>
          </div>
          {/* Reliability */}
          <div className='heading' style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', justifyContent: 'center', columnGap: '12px', fontSize: '15px', color: '#000000' }} onMouseOver={(e) => { e.currentTarget.style.backgroundColor = '#012353'; e.currentTarget.style.color = 'white'; }} onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'white'; e.currentTarget.style.color = 'black'; }}>
            <h5>Performance Measurement</h5>
            <span className="our"> Implementation services include monitoring and measuring performance to track progress and evaluate the effectiveness of initiatives.</span>
          </div>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default ImplementationServices;
