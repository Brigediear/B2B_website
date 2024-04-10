import React from 'react';
import Footer from './Homefooter';
const Managed_services = () => {
  return (
    <div>
<div style={{ 
  backgroundImage: 'url("manage_services.jpg")', 
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  position: 'relative',
  height: '350px', // Adjust the height as needed
}}>
  <div style={{ 
    position: 'absolute', 
    top: '50%', 
    left: '50%', 
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
  }}>
    <h1 style={{ color: '#000000',fontSize: '40px' }}>Empower Your Business with Managed Services</h1>
    <div style={{ marginTop: '50px' }}>
    <div style={{ 
    display: 'inline-block', 
    width: '200px', 
    height: '100px', 
    backgroundColor: '#ffffff', 
    marginRight: '20px', 
    textAlign: 'center',
    cursor: 'pointer'
}}
    onMouseOver={(e) => e.target.style.backgroundColor = 'blue'} // Jab hover hota hai, background color blue ho jata hai
    onMouseOut={(e) => e.target.style.backgroundColor = '#ffffff'} // Jab hover se bahar jaata hai, original color me wapas aa jata hai
>
    <h2>Proactive Maintenance </h2>
</div>
<div style={{ 
    display: 'inline-block', 
    width: '200px', 
    height: '100px', 
    backgroundColor: '#ffffff', 
    marginRight: '20px', 
    textAlign: 'center',
    cursor: 'pointer'
}}
    onMouseOver={(e) => e.target.style.backgroundColor = 'blue'} // Jab hover hota hai, background color blue ho jata hai
    onMouseOut={(e) => e.target.style.backgroundColor = '#ffffff'} // Jab hover se bahar jaata hai, original color me wapas aa jata hai
>
    <h2>Scalable Solutions   </h2>
</div>
<div style={{ 
    display: 'inline-block', 
    width: '200px', 
    height: '100px', 
    backgroundColor: '#ffffff', 
    textAlign: 'center',
    cursor: 'pointer'
}}
    onMouseOver={(e) => e.target.style.backgroundColor = 'blue'} // Jab hover hota hai, background color blue ho jata hai
    onMouseOut={(e) => e.target.style.backgroundColor = '#ffffff'} // Jab hover se bahar jaata hai, original color me wapas aa jata hai
>
    <h2>24/7 Support and Expert Guidance</h2>
</div>

    </div>
  </div>
</div>


      <div style={{ display: 'flex', alignItems: 'top' }}>
        <div style={{ flex: 1, padding: '0 20px',fontSize:20, fontWeight: 'bold' }}>
          <h2>upgrade and migration services</h2>
          <p>
          Managed services offer a comprehensive solution for businesses seeking to optimize their
           IT operations and streamline efficiency. Our services encompass proactive maintenance,
            real-time monitoring, and expert support to ensure the smooth functioning of your systems.
             We tailor our offerings to meet your specific needs, providing scalable solutions that 
             evolve alongside your business. With 24/7 support from our experienced team, you can
              entrust the management of your IT infrastructure to us, allowing you to focus on 
              driving your business forward with confidence.
          </p>  
        </div>   
        <div>
            
        </div>
        <div style={{ flex: 1 }}>
          <img src="Managed_services.png" alt="Management Consulting" style={{ maxWidth: '100%', height: 'auto' }} />
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '30px', background: '#ffffff' }}>
        <div style={{ textAlign: 'center' }}>
          <h1> ENHANCED MANAGED SERVICES</h1>
        </div>
        <div className='Expertise' style={{ margin: '0px', textRendering: 'inherit', backgroundColor: 'white', transition: 'background-color 0.2s ease', rowGap: '50px', padding: '0 20px' }}>
          {/* Expertise */}
          <div className='heading' style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', justifyContent: 'center', columnGap: '12px', fontSize: '15px', color: '#000000' }} onMouseOver={(e) => { e.currentTarget.style.backgroundColor = '#012353'; e.currentTarget.style.color = 'white'; }} onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'white'; e.currentTarget.style.color = 'black'; }}>
            <h5>Proactive Maintenance and Monitoring</h5>
            <span className="our">Our managed services include continuous monitoring of your systems, preemptively identifying and addressing potential issues before they impact your operations.</span>
          </div>
          {/* Scalability */}
          <div className='heading' style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', justifyContent: 'center', columnGap: '12px', fontSize: '15px', color: '#000000' }} onMouseOver={(e) => { e.currentTarget.style.backgroundColor = '#012353'; e.currentTarget.style.color = 'white'; }} onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'white'; e.currentTarget.style.color = 'black'; }}>
            <h5>Scalable Solutions Tailored to Your Needs</h5>
            <span className="our"> We offer customizable managed service packages designed to fit your specific requirements, ensuring that your IT infrastructure.</span>
          </div>
          {/* Reliability */}
          <div className='heading' style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', justifyContent: 'center', columnGap: '12px', fontSize: '15px', color: '#000000' }} onMouseOver={(e) => { e.currentTarget.style.backgroundColor = '#012353'; e.currentTarget.style.color = 'white'; }} onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'white'; e.currentTarget.style.color = 'black'; }}>
            <h5>24/7 Support and Expert Guidance</h5>
            <span className="our">With round-the-clock support from our team of experienced professionals, you can rest assured that any issues will be promptly resolved.</span>
          </div>
        </div>
      </div>
            {/* Footer */}
            <Footer />
    </div>
  );
}

export default Managed_services;
