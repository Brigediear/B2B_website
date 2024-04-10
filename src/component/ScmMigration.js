import React from 'react';
import Footer from './Homefooter';
const Upgrademigrationservices = () => {
  return (
    <div>
<div style={{ 
  backgroundImage: 'url("upgrade and migration services 1.png")', 
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
    <h1 style={{ color: '#000000',fontSize: '40px' }}>Seamless Upgrade and Migration Services: Empowering Your Transition with Expert Support</h1>
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
    <h2>Comprehensive Assessment</h2>
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
    <h2>Tailored Strategy Development</h2>
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
    <h2>Expert Execution and Support </h2>
</div>

    </div>
  </div>
</div>


      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ flex: 1, padding: '0 20px' }}>
          <h2>upgrade and migration services</h2>
          <p>
          Upgrade and migration services streamline the process of transitioning your existing systems
           to newer, more advanced technologies.  Our comprehensive approach begins with a
            detailed assessment of your current infrastructure, identifying areas for 
            improvement and potential challenges. We then tailor a strategy specifically 
            suited to your business needs, ensuring a smooth and efficient migration process. 
            Our experienced team manages the entire transition, from planning to execution, 
            providing expert support every step of the way. With our assistance, you can upgrade 
            your systems with confidence, knowing that your business operations will benefit 
            from enhanced performance and functionality
          </p>
        </div>
        <div style={{ flex: 1 }}>
          <img src="upgrade and migration services.png" alt="Management Consulting" style={{ maxWidth: '100%', height: 'auto' }} />
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '30px', background: '#ffffff' }}>
        <div style={{ textAlign: 'center' }}>
          <h1> EFFORTLESS SYSTEM ENHANCEMENT</h1>
        </div>
        <div className='Expertise' style={{ margin: '0px', textRendering: 'inherit', backgroundColor: 'white', transition: 'background-color 0.2s ease', rowGap: '50px', padding: '0 20px' }}>
          {/* Expertise */}
          <div className='heading' style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', justifyContent: 'center', columnGap: '12px', fontSize: '15px', color: '#000000' }} onMouseOver={(e) => { e.currentTarget.style.backgroundColor = '#012353'; e.currentTarget.style.color = 'white'; }} onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'white'; e.currentTarget.style.color = 'black'; }}>
            <h5>Comprehensive Assessment</h5>
            <span className="our">We conduct a thorough evaluation of your current systems, identifying areas for improvement and potential challenges in the migration process.</span>
          </div>
          {/* Scalability */}
          <div className='heading' style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', justifyContent: 'center', columnGap: '12px', fontSize: '15px', color: '#000000' }} onMouseOver={(e) => { e.currentTarget.style.backgroundColor = '#012353'; e.currentTarget.style.color = 'white'; }} onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'white'; e.currentTarget.style.color = 'black'; }}>
            <h5>Tailored Strategy Development</h5>
            <span className="our"> Our team crafts a customized migration plan that aligns with your unique business needs, ensuring minimal disruption and maximum efficiency during the upgrade process. </span>
          </div>
          {/* Reliability */}
          <div className='heading' style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', justifyContent: 'center', columnGap: '12px', fontSize: '15px', color: '#000000' }} onMouseOver={(e) => { e.currentTarget.style.backgroundColor = '#012353'; e.currentTarget.style.color = 'white'; }} onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'white'; e.currentTarget.style.color = 'black'; }}>
            <h5>Expert Execution and Support</h5>
            <span className="our"> With our experienced professionals leading the way, we execute the migration seamlessly, providing ongoing support and guidance to mitigate risks and optimize performance post-upgrade.</span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Upgrademigrationservices;
