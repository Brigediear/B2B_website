import React from 'react';
import Footer from './Homefooter';
const Retail = () => {
  return (
    <div className='containerStyle' style={{ alignItems: 'center', backgroundColor: 'white' }}>
      <div style={{ backgroundImage: "url('RETAILL.png')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '60vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <div style={{ color: 'white', fontSize: 'calc(12px + 3vmin)', marginRight: '900px', textAlign: 'left', marginLeft: 'auto' }}>
          <h1>Retail</h1>
        </div>
      </div>


      <div style={{ marginTop: '30px', padding: '0 10px', fontSize: 'calc(8px + 4vmin)', fontStyle: 'normal' ,color:'#012353 ',textAlign:'center' }}>
<h>Welcome To BITTWOBYTE: Empowering Retailers With Next-Level IT Solutions</h>
</div>
<div style={{ marginTop: '20px', padding: '0 10px', fontSize: 'calc(8px + 2vmin)', fontStyle: 'normal' }}>
        <p>
        In today's dynamic retail landscape, globalization is reshaping the way businesses operate.
         As supply chains extend across borders and sales channels proliferate, retailers face the imperative to transform their IT capabilities. 
        At BITTWOBYTE, we understand the evolving needs of the retail sector and offer innovative solutions to address the challenges of modern retailing.
        </p>
      </div>


      <div style={{ backgroundColor: 'white', marginTop: '30px', padding: '0 10px', fontSize: 'calc(10px + 1vmin)', textAlign: 'center' }}>
        <h1>Our Solutions</h1>
        <div style={{ backgroundColor: 'white', marginTop: '20px', padding: '0 10px', fontSize: 'calc(10px + 2vmin)', textAlign: 'center' }}>

        <p>At BITTWOBYTE, we specialize in providing comprehensive IT management solutions tailored to the unique requirements of retailers. 
            Our suite of services is designed to streamline operations, enhance efficiency, and drive growth. Here's how we help retailers overcome their IT challenges:</p>
            </div>
      </div>



      <div style={{ justifyContent: 'center', columnGap: '11px', marginTop: '30px', backgroundColor: '#F2F3F4' }}>

        <div style={{ marginTop: '10px', padding: '20px', height: 'auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', textAlign: 'center' }}>
          <div className='Data-Exploration' style={{ color: 'black', height: 'auto', width: '180vmin', padding: '40px', fontSize: '20px', borderBottom: '1px solid #02133805', backgroundColor: 'white' }} onMouseOver={(e) => { e.currentTarget.style.border= '2px solid #012353'; }} onMouseOut={(e) => { e.currentTarget.style.border = '2px solid #02133805'; }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', alignItems: 'center' }}>
              <div style={{ width: 'calc(40px + 70vmin)', height: '40vh', backgroundImage: "url('End-to-End Data Management.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', borderRadius: '10px' }}></div>
              <div style={{ width: '50%', paddingLeft: '20px' }}>
                <h3>End-to-End Data Management </h3>
                <p>Managing vast amounts of data efficiently is crucial for retailers to make informed decisions and stay competitive.
                     BITTWOBYTE offers end-to-end data management solutions that enable retailers to collect, process, and analyze data seamlessly across their entire organization. 
                    From inventory management to customer insights, our solutions empower retailers to harness the full potential of their data assets.</p>
              </div>
            </div>
          </div>
        </div>

 <div style={{ marginTop: '10px', padding: '20px', height: 'auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', textAlign: 'center' }}>
  <div className='Data-Exploration' style={{ color: 'black', height: 'auto', width: '180vmin', padding: '40px', fontSize: '20px', borderBottom: '1px solid #02133805', backgroundColor: 'white' }} onMouseOver={(e) => { e.currentTarget.style.border = '2px solid #012353'; }} onMouseOut={(e) => { e.currentTarget.style.border= '2px solid #02133805'; }}>
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', alignItems: 'center' }}>
      <div style={{ width: '50%', paddingRight: '20px' }}>
        <h3> Global Data Synchronization </h3>
        <p>In a globalized retail environment, maintaining consistency and accuracy in product information is essential.
             BITTWOBYTE's global data synchronization services ensure that retailers can synchronize product data seamlessly across multiple channels and geographies.
             By centralizing product information and standardizing data formats, we help retailers enhance visibility, reduce errors, and improve customer satisfaction. </p>
      </div>
      <div style={{ width: 'calc(40px + 70vmin)', height: '40vh', backgroundImage: "url('Global Data Synchronization.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', borderRadius: '10px' }}></div>
    </div>
  </div>
</div>

<div style={{ justifyContent: 'center', columnGap: '11px', marginTop: '30px', backgroundColor: '#F2F3F4' }}>

    <div style={{ marginTop: '10px', padding: '20px', height: 'auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', textAlign: 'center' }}>
        <div className='Data-Exploration' style={{ color: 'black', height: 'auto', width: '180vmin', padding: '40px', fontSize: '20px', borderBottom: '1px solid #02133805', backgroundColor: 'white', transition: 'transform 0.3s', borderRadius: '10px' }} onMouseOver={(e) => { e.currentTarget.style.border = '2px solid #012353'; }} onMouseOut={(e) => { e.currentTarget.style.border= '2px solid #02133805'; }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', alignItems: 'center' }}>
                <div style={{ width: 'calc(40px + 70vmin)', height: '40vh', backgroundImage: "url('Data Security.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', borderRadius: '10px' }}></div>
                <div style={{ width: '50%', paddingLeft: '20px' }}>
                    <h3>Data Security </h3>
                    <p>With cyber threats on the rise, safeguarding sensitive customer data is a top priority for retailers.
                        BITTWOBYTE offers robust data security solutions that protect retailers' IT infrastructure and assets from unauthorized access, breaches, and cyber attacks.
                        From encryption and access controls to threat detection and incident response, we implement comprehensive security measures to safeguard retailers' data and maintain regulatory compliance.</p>
                </div>
            </div>
        </div>
    </div>
</div>

        </div>


        <div style={{ textAlign: 'center' }}>
        <h1> Why Choose BITTWOBYTE?</h1>
      </div>
      <div className='Expertise' style={{ margin: '0px', textRendering: 'inherit', backgroundColor: 'white', transition: 'background-color 0.2s ease', rowGap: '20px', padding: '0 20px' }}>
        {/* Greater Insights */}
        <div className='heading' style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', justifyContent: 'center', columnGap: '12px', fontSize: '15px', color: '#000000', }} onMouseOver={(e) => { e.currentTarget.style.backgroundColor = '#012353'; e.currentTarget.style.color = 'white'; }} onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'white'; e.currentTarget.style.color = 'black'; }}>
          <h4>Expertise</h4>
          <span className="our"> With years of experience in the retail industry, we have deep domain expertise and a thorough understanding of retailers' IT needs.</span>
        </div>
        {/* Enhanced Efficiency */}
        <div className='heading' style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', justifyContent: 'center', columnGap: '12px', fontSize: '15px', color: '#000000', }} onMouseOver={(e) => { e.currentTarget.style.backgroundColor = '#012353'; e.currentTarget.style.color = 'white'; }} onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'white'; e.currentTarget.style.color = 'black'; }}>
          <h4>Innovation</h4>
          <span className="our"> We leverage cutting-edge technologies and best practices to deliver innovative solutions that drive tangible results for our clients.</span>
        </div>
        {/* Agile Decision-Making */}
        <div className='heading' style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', justifyContent: 'center', columnGap: '12px', fontSize: '15px', color: '#000000', }} onMouseOver={(e) => { e.currentTarget.style.backgroundColor = '#012353'; e.currentTarget.style.color = 'white'; }} onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'white'; e.currentTarget.style.color = 'black'; }}>
          <h4>Reliability</h4>
          <span className="our"> Our commitment to quality, reliability, and customer satisfaction sets us apart as a trusted partner for retailers worldwide.</span>
        </div>
        {/* Seamless Integration */}
        <div className='heading' style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', justifyContent: 'center', columnGap: '12px', fontSize: '15px', color: '#000000', }} onMouseOver={(e) => { e.currentTarget.style.backgroundColor = '#012353'; e.currentTarget.style.color = 'white'; }} onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'white'; e.currentTarget.style.color = 'black'; }}>
          <h4>Scalability</h4>
          <span> Whether you're a small boutique or a multinational corporation, our solutions are scalable and adaptable to meet your evolving needs.</span>
        </div>
      </div>
      <div style={{ marginTop: '30px', backgroundColor: '#73C6B6', padding: '20px 10px', fontSize: 'calc(10px + 2vmin)', textAlign: 'center', color: '#34495E ' }}>
        <h1>Transform Your Retail IT with BITTWOBYTE</h1>
        <p>In today's fast-paced retail environment, staying ahead requires agile, robust IT capabilities. Partner with BITTWOBYTE and unlock the full potential of your retail business. Contact us today to learn more about our solutions and how we can help you thrive in the digital age.</p>
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
              fontWeight: 'bold' // corrected fontWeight syntax
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
export default Retail;