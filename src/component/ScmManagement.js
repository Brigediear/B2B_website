import React from 'react';
import Footer from './Homefooter';

const ManagementConsulting = () => {
  return (
    <div>
<div style={{ 
  backgroundImage: 'url("ManagementConsulting.jpg")', 
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
    <h1 style={{ color: '#ffffff',fontSize: '40px' }}>Management Consulting Services for Business Transformation</h1>
    <div style={{ marginTop: '50px' }}>
      <div style={{ display: 'inline-block', width: '210px', height: '200px', backgroundColor: '#ffffff', marginRight: '20px', textAlign: 'center' }}>
        <h2>Overview of Management Consulting</h2>
      </div>
      <div style={{ display: 'inline-block', width: '210px', height: '200px', backgroundColor: '#ffffff', marginRight: '20px', textAlign: 'center' }}>
        <h2>Key Functions of Management Consultants</h2>
      </div>
      <div style={{ display: 'inline-block', width: '210px', height: '200px', backgroundColor: '#ffffff', textAlign: 'center' }}>
        <h2>Challenges and Opportunities in Management </h2>
      </div>
    </div>
  </div>
</div>


      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ flex: 1, padding: '0 20px' }}>
          <h2>ManagementConsulting</h2>
          <p>
            Management consulting is a profession that focuses on helping organizations improve their 
            performance, efficiency, and profitability by providing expert advice and solutions
             to complex business challenges. Management consultants, also known as management analysts,
              work with clients across various industries and sectors, including government agencies,
               non-profit organizations, and private businesses.
          </p>
        </div>
        <div style={{ flex: 1 }}>
          <img src="Effective_Demand_Forecasting.png" alt="Management Consulting" style={{ maxWidth: '100%', height: 'auto' }} />
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '30px', background: '#ffffff' }}>
        <div style={{ textAlign: 'center' }}>
          <h1> Management Consulting</h1>
        </div>
        <div className='Expertise' style={{ margin: '0px', textRendering: 'inherit', backgroundColor: 'white', transition: 'background-color 0.2s ease', rowGap: '50px', padding: '0 20px' }}>
          {/* Expertise */}
          <div className='heading' style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', justifyContent: 'center', columnGap: '12px', fontSize: '15px', color: '#000000' }} onMouseOver={(e) => { e.currentTarget.style.backgroundColor = '#012353'; e.currentTarget.style.color = 'white'; }} onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'white'; e.currentTarget.style.color = 'black'; }}>
            <h5>Problem-Solving Expertise</h5>
            <span className="our">Management consultants are hired by organizations to provide expert advice and solutions to complex business problems.</span>
          </div>
          {/* Scalability */}
          <div className='heading' style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', justifyContent: 'center', columnGap: '12px', fontSize: '15px', color: '#000000' }} onMouseOver={(e) => { e.currentTarget.style.backgroundColor = '#012353'; e.currentTarget.style.color = 'white'; }} onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'white'; e.currentTarget.style.color = 'black'; }}>
            <h5>Objective External Perspective</h5>
            <span className="our"> Management consultants bring an objective and unbiased external perspective to the table.  </span>
          </div>
          {/* Reliability */}
          <div className='heading' style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', justifyContent: 'center', columnGap: '12px', fontSize: '15px', color: '#000000' }} onMouseOver={(e) => { e.currentTarget.style.backgroundColor = '#012353'; e.currentTarget.style.color = 'white'; }} onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'white'; e.currentTarget.style.color = 'black'; }}>
            <h5>Customized Solutions</h5>
            <span className="our"> Each consulting engagement is unique, and consultants tailor their approach and solutions to meet the specific needs and goals of their clients.</span>
          </div>
          {/* Seamless Integration */}
          <div className='heading' style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', justifyContent: 'center', columnGap: '12px', fontSize: '15px', color: '#000000' }} onMouseOver={(e) => { e.currentTarget.style.backgroundColor = '#012353'; e.currentTarget.style.color = 'white'; }} onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'white'; e.currentTarget.style.color = 'black'; }}>
            <h5>Change Management and Implementation Support</h5>
            <span>Management consultants not only develop recommendations but also support clients in implementing and managing change.</span>
          </div>
        </div>
      </div>
       {/* Footer */}
       <Footer />
    </div>
  );
}

export default ManagementConsulting;
