import React from 'react';
import Footer from './Homefooter';
const Media   = () => {
  return (
    <div className='containerStyle' style={{ alignItems: 'center', backgroundColor: 'white' }}>
      <div style={{ backgroundImage: "url('Media and entertainment.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '60vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <div style={{ color: ' #012353', fontSize: 'calc(12px + 2vmin)', marginRight: '700px', textAlign: 'left', marginLeft: 'auto' }}>
          <h1>Media & entertainment </h1>
        </div>
      </div>

      <div style={{ marginTop: '30px', padding: '0 10px', fontSize: 'calc(8px + 4vmin)', fontStyle: 'normal' ,color:'#012353 ',textAlign:'center' }}>
<h>Welcome To BITTWOBYTE: Your Premier Partner In Media And Entertainment Solutions

</h>
</div>
<div style={{ marginTop: '20px', padding: '0 10px', fontSize: 'calc(8px + 2vmin)', fontStyle: 'normal' }}>
        <p>
        In today's digital age, the media and entertainment industry is experiencing unprecedented growth, fueled by the widespread adoption of technology and the internet. 
        At BITTWOBYTE, we recognize the immense potential and the evolving landscape of this dynamic industry.
         As a leading provider of outsourcing services to startups and media companies, we are committed to delivering cutting-edge solutions tailored to meet the unique needs of our clients.
        </p>
      </div>


      <div style={{ backgroundColor: 'white', marginTop: '30px', padding: '0 10px', fontSize: 'calc(10px + 1vmin)', textAlign: 'center' }}>
        <h1>Our Services</h1>
        
      </div>



      <div style={{ justifyContent: 'center', columnGap: '11px', marginTop: '30px', backgroundColor: '#F2F3F4' }}>

        <div style={{ marginTop: '10px', padding: '20px', height: 'auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', textAlign: 'center' }}>
          <div className='Data-Exploration' style={{ color: 'black', height: 'auto', width: '180vmin', padding: '40px', fontSize: '20px', borderBottom: '1px solid #02133805', backgroundColor: 'white' }} onMouseOver={(e) => { e.currentTarget.style.border= '2px solid #012353'; }} onMouseOut={(e) => { e.currentTarget.style.border = '2px solid #02133805'; }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', alignItems: 'center' }}>
              <div style={{ width: 'calc(40px + 70vmin)', height: '40vh', backgroundImage: "url('Digital Content Creation.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', borderRadius: '10px' }}></div>
              <div style={{ width: '50%', paddingLeft: '20px' }}>
                <h3>Digital Content Creation </h3>
                <p> From video production to graphic design, we specialize in creating engaging and compelling digital content that captivates audiences and drives results.</p>
              </div>
            </div>
          </div>
        </div>

 <div style={{ marginTop: '10px', padding: '20px', height: 'auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', textAlign: 'center' }}>
  <div className='Data-Exploration' style={{ color: 'black', height: 'auto', width: '180vmin', padding: '40px', fontSize: '20px', borderBottom: '1px solid #02133805', backgroundColor: 'white' }} onMouseOver={(e) => { e.currentTarget.style.border = '2px solid #012353'; }} onMouseOut={(e) => { e.currentTarget.style.border= '2px solid #02133805'; }}>
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', alignItems: 'center' }}>
      <div style={{ width: '50%', paddingRight: '20px' }}>
        <h3> Platform Development </h3>
        <p> Whether you need a custom-built website, mobile app, or streaming platform, we have the expertise to develop robust, scalable solutions that meet your unique requirements.</p>
      </div>
      <div style={{ width: 'calc(40px + 70vmin)', height: '40vh', backgroundImage: "url('Platform Development.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', borderRadius: '10px' }}></div>
    </div>
  </div>
</div>

<div style={{ justifyContent: 'center', columnGap: '11px', marginTop: '30px', backgroundColor: '#F2F3F4' }}>

    <div style={{ marginTop: '10px', padding: '20px', height: 'auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', textAlign: 'center' }}>
        <div className='Data-Exploration' style={{ color: 'black', height: 'auto', width: '180vmin', padding: '40px', fontSize: '20px', borderBottom: '1px solid #02133805', backgroundColor: 'white', transition: 'transform 0.3s', borderRadius: '10px' }} onMouseOver={(e) => { e.currentTarget.style.border = '2px solid #012353'; }} onMouseOut={(e) => { e.currentTarget.style.border= '2px solid #02133805'; }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', alignItems: 'center' }}>
                <div style={{ width: 'calc(40px + 70vmin)', height: '40vh', backgroundImage: "url('User Experience Design.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', borderRadius: '10px' }}></div>
                <div style={{ width: '50%', paddingLeft: '20px' }}>
                    <h3>User Experience Design </h3>
                    <p> We believe that great user experiences are the key to success in the digital world. Our UX design services focus on creating intuitive, user-friendly interfaces that enhance engagement and satisfaction.</p>
                </div>
            </div>
        </div>
    </div>
</div>


<div style={{ marginTop: '10px', padding: '20px', height: 'auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', textAlign: 'center' }}>
  <div className='Data-Exploration' style={{ color: 'black', height: 'auto', width: '180vmin', padding: '40px', fontSize: '20px', borderBottom: '1px solid #02133805', backgroundColor: 'white' }} onMouseOver={(e) => { e.currentTarget.style.border = '2px solid #012353'; }} onMouseOut={(e) => { e.currentTarget.style.border= '2px solid #02133805'; }}>
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', alignItems: 'center' }}>
      <div style={{ width: '50%', paddingRight: '20px' }}>
        <h3> Content Management Systems </h3>
        <p>  Our content management systems (CMS) empower you to manage and distribute your digital content with ease, streamlining your workflows and maximizing efficiency.</p>
      </div>
      <div style={{ width: 'calc(40px + 70vmin)', height: '40vh', backgroundImage: "url('Content Management Systems.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', borderRadius: '10px' }}></div>
    </div>
  </div>
</div>
        </div>


        <div style={{ textAlign: 'center' }}>
        <h1> Why Choose BITTWOBYTE?</h1>
      </div>
      <div className='Expertise' style={{ margin: '5px', textRendering: 'inherit', backgroundColor: 'white', transition: 'background-color 0.2s ease', rowGap: '20px', padding: '0 20px' }}>
        {/* Greater Insights */}
        <div className='heading' style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', justifyContent: 'center', columnGap: '12px', fontSize: '15px', color: '#000000', }} onMouseOver={(e) => { e.currentTarget.style.backgroundColor = '#012353'; e.currentTarget.style.color = 'white'; }} onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'white'; e.currentTarget.style.color = 'black'; }}>
          <h4>Expertise</h4>
          <span className="our"> With years of experience in the media and entertainment domain, our team possesses in-depth knowledge and understanding of the industry trends, technological advancements, and user preferences. We leverage this expertise to craft innovative solutions that drive success for our clients.</span>
        </div>
        {/* Enhanced Efficiency */}
        <div className='heading' style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', justifyContent: 'center', columnGap: '12px', fontSize: '15px', color: '#000000', }} onMouseOver={(e) => { e.currentTarget.style.backgroundColor = '#012353'; e.currentTarget.style.color = 'white'; }} onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'white'; e.currentTarget.style.color = 'black'; }}>
          <h4>Customized Services</h4>
          <span className="our">  We understand that every business is unique, with its own set of challenges and objectives. That's why we offer customizable services, allowing our clients to choose from a range of options, including end-to-end solutions or individual features, based on their specific requirements.</span>
        </div>
        {/* Agile Decision-Making */}
        <div className='heading' style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', justifyContent: 'center', columnGap: '12px', fontSize: '15px', color: '#000000', }} onMouseOver={(e) => { e.currentTarget.style.backgroundColor = '#012353'; e.currentTarget.style.color = 'white'; }} onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'white'; e.currentTarget.style.color = 'black'; }}>
          <h4>Comprehensive Solutions</h4>
          <span className="our"> Whether you're a startup looking to launch a groundbreaking media platform or an established company seeking to enhance your digital presence, we have the capabilities to deliver comprehensive solutions that empower your business to thrive in the competitive landscape.</span>
        </div>
        {/* Seamless Integration */}
        <div className='heading' style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', justifyContent: 'center', columnGap: '12px', fontSize: '15px', color: '#000000', }} onMouseOver={(e) => { e.currentTarget.style.backgroundColor = '#012353'; e.currentTarget.style.color = 'white'; }} onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'white'; e.currentTarget.style.color = 'black'; }}>
          <h4> Quality Assurance</h4>
          <span> At BITTWOBYTE, quality is our top priority. We adhere to stringent quality assurance processes to ensure that every project we undertake meets the highest standards of excellence, reliability, and performance.</span>
        </div>

        <div className='heading' style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', justifyContent: 'center', columnGap: '12px', fontSize: '15px', color: '#000000', }} onMouseOver={(e) => { e.currentTarget.style.backgroundColor = '#012353'; e.currentTarget.style.color = 'white'; }} onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'white'; e.currentTarget.style.color = 'black'; }}>
          <h4>  Client-Centric Approach</h4>
          <span> We believe in building strong, long-lasting partnerships with our clients. Our client-centric approach means that we prioritize your needs and objectives, working closely with you every step of the way to ensure that our solutions align with your vision and goals.</span>
        </div>
      </div>
      <div style={{ marginTop: '30px', backgroundColor: '#73C6B6', padding: '20px 10px', fontSize: 'calc(10px + 2vmin)', textAlign: 'center', color: '#34495E ' }}>
        <h1>Get in Touch with BITTWOBYTE</h1>
        <p>Ready to take your media and entertainment business to the next level? Contact us today to learn more about our services and how we can help you achieve your goals. Let BITTWOBYTE be your trusted partner in innovation and success.</p>
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
export default Media ;