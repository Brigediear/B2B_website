import React from 'react';
import Footer from './Homefooter';

const Banking = () => {
  return (
    <div className='containerStyle' style={{ alignItems: 'center', backgroundColor: 'white' }}>
    <div style={{ backgroundImage: "url('banking.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '50vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
    <div style={{ color: '#012353', fontSize: 'calc(12px + 3vmin)', marginRight: '600px', textAlign: 'left', marginLeft: '50px', }}>
  <h1>Banking </h1>
</div>

      </div>

      <div style={{ marginTop: '30px', padding: '0 10px', fontSize: 'calc(8px + 2vmin)',fontStyle:'forum '  }}>
        <p>
        At BITTWOBYTE, we understand the pivotal role that Information Technology plays in the banking sector. As technology continues to evolve,
         it has become imperative for banking institutions to embrace innovative IT solutions to enhance their services and stay ahead in the competitive market.
        </p>
      </div>

      <div style={{ backgroundColor: 'white', marginTop: '30px', padding: '0 10px', fontSize: 'calc(10px + 1vmin)', textAlign: 'center' }}>
        <h1>Our Services</h1>
      </div>

      <div style={{ marginTop: '30px', padding: '0 10px', fontSize: 'calc(8px + 2vmin)',fontStyle:'forum '  }}>
        <p>
        BITTWOBYTE specializes in providing a comprehensive IT environment tailored specifically for banking institutions. Our range of services includes:
        </p>
      </div>
      

      <div style={{ justifyContent: 'center', columnGap: '11px', marginTop: '30px', backgroundColor: '#F2F3F4' }}>

<div style={{ marginTop: '10px', padding: '20px', height: 'auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', textAlign: 'center' }}>
  <div className='Data-Exploration' style={{ color: 'black', height: 'auto', width: '180vmin', padding: '40px', fontSize: '20px', borderBottom: '1px solid #02133805', backgroundColor: 'white' }} onMouseOver={(e) => { e.currentTarget.style.border= '2px solid #012353'; }} onMouseOut={(e) => { e.currentTarget.style.border = '2px solid #02133805'; }}>
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', alignItems: 'center' }}>
      <div style={{ width: 'calc(40px + 70vmin)', height: '40vh', backgroundImage: "url('Platform Development.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', borderRadius: '10px' }}></div>
      <div style={{ width: '50%', paddingLeft: '20px' }}>
        <h3> Product Development </h3>
        <p> Product Development: Our team of highly skilled technical and functional experts collaborates with banking institutions to develop cutting-edge products and solutions tailored to their unique needs. From conceptualization to implementation, we ensure that our clients have access to the latest technological advancements.</p>
      </div>
    </div>
  </div>
</div>

<div style={{ marginTop: '10px', padding: '20px', height: 'auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', textAlign: 'center' }}>
  <div className='Data-Exploration' style={{ color: 'black', height: 'auto', width: '180vmin', padding: '40px', fontSize: '20px', borderBottom: '1px solid #02133805', backgroundColor: 'white' }} onMouseOver={(e) => { e.currentTarget.style.border = '2px solid #012353'; }} onMouseOut={(e) => { e.currentTarget.style.border= '2px solid #02133805'; }}>
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', alignItems: 'center' }}>
      <div style={{ width: '50%', paddingRight: '20px' }}>
        <h3> Data Management </h3>
        <p>  In today's data-driven world, effective data management is crucial for banking institutions to make informed decisions and provide personalized services to their customers. BITTWOBYTE offers robust data management solutions that help banks organize, analyze, and secure their data efficiently.</p>
      </div>
      <div style={{ width: 'calc(40px + 70vmin)', height: '40vh', backgroundImage: "url('Data Management.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', borderRadius: '10px' }}></div>
    </div>
  </div>
</div>

<div style={{ marginTop: '10px', padding: '20px', height: 'auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', textAlign: 'center' }}>
  <div className='Data-Exploration' style={{ color: 'black', height: 'auto', width: '180vmin', padding: '40px', fontSize: '20px', borderBottom: '1px solid #02133805', backgroundColor: 'white' }} onMouseOver={(e) => { e.currentTarget.style.border= '2px solid #012353'; }} onMouseOut={(e) => { e.currentTarget.style.border = '2px solid #02133805'; }}>
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', alignItems: 'center' }}>
      <div style={{ width: 'calc(40px + 70vmin)', height: '40vh', backgroundImage: "url('Technical and Functional Resources.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', borderRadius: '10px' }}></div>
      <div style={{ width: '50%', paddingLeft: '20px' }}>
        <h3>Technical and Functional Resources </h3>
        <p>  At BITTWOBYTE, we pride ourselves on our team of talented professionals who possess a deep understanding of both technical and functional aspects of banking IT. Whether it's software development, system integration, or business analysis, our experts are equipped with the skills and knowledge to meet our clients' requirements.</p>
      </div>
    </div>
  </div>
</div>
<div style={{ marginTop: '10px', padding: '20px', height: 'auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', textAlign: 'center' }}>
  <div className='Data-Exploration' style={{ color: 'black', height: 'auto', width: '180vmin', padding: '40px', fontSize: '20px', borderBottom: '1px solid #02133805', backgroundColor: 'white' }} onMouseOver={(e) => { e.currentTarget.style.border = '2px solid #012353'; }} onMouseOut={(e) => { e.currentTarget.style.border= '2px solid #02133805'; }}>
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', alignItems: 'center' }}>
      <div style={{ width: '50%', paddingRight: '20px' }}>
        <h3> Technology Solutions: </h3>
        <p>  We leverage the latest technologies such as artificial intelligence, machine learning, blockchain, and cloud computing to develop innovative solutions that drive operational efficiency, enhance customer experience, and ensure regulatory compliance for banking institutions.</p>
      </div>
      <div style={{ width: 'calc(40px + 70vmin)', height: '40vh', backgroundImage: "url('Technology Solutions.png')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', borderRadius: '10px' }}></div>
    </div>
  </div>
</div>
</div>






     

<div style={{ backgroundSize: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center' ,margin:'50px'}}>
  <div style={{ textAlign: 'center' }}>
    <h1> Why Choose BITTWOBYTE?</h1>
  </div>
  <div className='Expertise' style={{ margin: '0px', textRendering: 'inherit', backgroundColor: 'white', transition: 'background-color 0.2s ease', rowGap: '20px', padding: '0 20px' }}>

    {/* Greater Insights */}
            <div className='heading' style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', justifyContent: 'center', columnGap: '12px', fontSize: '15px', color: '#000000', }}  onMouseOver={(e) => {e.currentTarget.style.backgroundColor = '#012353';e.currentTarget.style.color = 'white';}}onMouseOut={(e) => {e.currentTarget.style.backgroundColor = 'white';e.currentTarget.style.color = 'black';}}>  
      <h4>Expertise</h4>
      <span className="our"> With years of experience in the banking IT sector, we have a proven track record of delivering high-quality solutions that exceed our clients' expectations.</span>
    </div>
    {/* Enhanced Efficiency */}
    <div className='heading' style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', justifyContent: 'center', columnGap: '12px', fontSize: '15px', color: '#000000', }}  onMouseOver={(e) => {e.currentTarget.style.backgroundColor = '#012353';e.currentTarget.style.color = 'white';}}onMouseOut={(e) => {e.currentTarget.style.backgroundColor = 'white';e.currentTarget.style.color = 'black';}}>  
      <h4>Customization</h4>
      <span className="our">We understand that every banking institution is unique, which is why we offer customizable solutions tailored to specific requirements and objectives.</span>
    </div>
    {/* Agile Decision-Making */}
    <div className='heading' style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', justifyContent: 'center', columnGap: '12px', fontSize: '15px', color: '#000000', }}  onMouseOver={(e) => {e.currentTarget.style.backgroundColor = '#012353';e.currentTarget.style.color = 'white';}}onMouseOut={(e) => {e.currentTarget.style.backgroundColor = 'white';e.currentTarget.style.color = 'black';}}>  
      <h4>Security</h4>
      <span className="our"> Security is paramount in the banking industry, and we prioritize the implementation of robust security measures to safeguard sensitive data and protect against cyber threats.</span>
    </div>
    {/* Seamless Integration */}
    <div className='heading' style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', justifyContent: 'center', columnGap: '12px',  fontSize: '15px', color: '#000000',}}  onMouseOver={(e) => {e.currentTarget.style.backgroundColor = '#012353';e.currentTarget.style.color = 'white';}}onMouseOut={(e) => {e.currentTarget.style.backgroundColor = 'white';e.currentTarget.style.color = 'black';}}>  
      <h4>Client Satisfaction</h4>
      <span> Our commitment to client satisfaction is unwavering, and we strive to build long-lasting partnerships based on trust, transparency, and mutual success.</span>
    </div>
  </div>
</div>

          
          <div style={{ marginTop: '30px', backgroundColor: '#73C6B6', padding: '20px 10px', fontSize: 'calc(10px + 2vmin)', textAlign: 'center', color: '#34495E' }}>
          <h1>Get in Touch with BITTWOBYTE</h1>
            <p>Ready to take your banking institution to the next level with our IT services?
                 Contact us today to learn more about how BITTWOBYTE can help you achieve your goals.</p>
 <div style={{ textAlign: 'center' }}>
              <button 
                style={{ 
                  padding: '10px 5px', // Adjust padding for button size
                  fontSize: '19px', // Adjust font size for button text
                  backgroundColor: 'white', 
                  color: 'black',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  transitionDuration: '0.2s',
                  border: 'none', // Remove border
                  fontStyle:'bold'
                }}
                // Adding hover effect
                onMouseOver={(e) => { e.target.style.backgroundColor = 'lightblue'; }}
                onMouseOut={(e) => { e.target.style.backgroundColor = 'white'; }}
              >
                Let's Talk
               
                
              </button>
            </div>
          </div>

  {/* Footer */}
  <Footer />
          
        </div>


  );
};

export default Banking;