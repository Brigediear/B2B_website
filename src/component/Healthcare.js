import React from 'react';
import Footer from './Homefooter';

const Healthcare = () => {
  return (
    <div className='containerStyle' style={{ alignItems: 'center', backgroundColor: 'white' }}>
      <div style={{ backgroundImage: "url('health.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '50vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <div style={{ color: 'white', fontSize: 'calc(12px + 3vmin)', marginRight: '800px', textAlign: 'left', marginLeft: 'auto' }}>
          <h1>Healthcare</h1>
        </div>
      </div>

      <div style={{ marginTop: '30px', padding: '0 10px', fontSize: 'calc(8px + 2vmin)', fontStyle: 'normal' }}>
        <p>
          In today's rapidly evolving healthcare landscape, the demand for intelligent solutions to provide value-based care has never been higher. However, the efficacy of these solutions hinges on the effective management of healthcare data. Incorrect data management can impede the delivery of optimal care, leading to inefficiencies and suboptimal patient outcomes.

          At BITTWOBYTE, we specialize in providing comprehensive data management solutions tailored specifically for the healthcare industry. Our expertise spans the entire data lifecycle, from analysis and requirement gathering to data quality assurance, transformation, and cataloging. By leveraging cutting-edge technologies and industry best practices, we empower healthcare organizations to harness the full potential of their data to deliver on promises and drive meaningful outcomes.
        </p>
      </div>

      <div style={{ backgroundColor: 'white', marginTop: '30px', padding: '0 10px', fontSize: 'calc(10px + 1vmin)', textAlign: 'center' }}>
        <h1>Our Services</h1>
      </div>

      <div style={{ justifyContent: 'center', columnGap: '11px', marginTop: '30px', backgroundColor: '#F2F3F4' }}>
        <div style={{ marginTop: '10px', padding: '20px', height: 'auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', textAlign: 'center' }}>
          <div className='Data-Exploration' style={{ color: 'black', height: 'auto', width: '180vmin', padding: '40px', fontSize: '20px', borderBottom: '1px solid #02133805', backgroundColor: 'white' }}  onMouseOver={(e) => { e.currentTarget.style.border = '2px solid #012353'; }} onMouseOut={(e) => { e.currentTarget.style.border= '2px solid #02133805'; }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', alignItems: 'center' }}>
              <div style={{ width: 'calc(40px + 70vmin)', height: '40vh', backgroundImage: "url('Data Analysis.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', borderRadius: '10px' }}></div>
              <div style={{ width: '50%', paddingLeft: '20px' }}>
                <h3>Data Analysis</h3>
                <p>We employ advanced analytics techniques to extract actionable insights from healthcare data, enabling informed decision-making and proactive care management.</p>
              </div>
            </div>
          </div>
        </div>

        <div style={{ marginTop: '10px', padding: '20px', height: 'auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', textAlign: 'center' }}>
  <div className='Data-Exploration' style={{ color: 'black', height: 'auto', width: '180vmin', padding: '40px', fontSize: '20px', borderBottom: '1px solid #02133805', backgroundColor: 'white' }} onMouseOver={(e) => { e.currentTarget.style.border = '2px solid #012353'; }} onMouseOut={(e) => { e.currentTarget.style.border= '2px solid #02133805'; }}>
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', alignItems: 'center' }}>
      <div style={{ width: '50%', paddingRight: '20px' }}>
        <h3>Requirement Gathering </h3>
        <p> Our team works closely with stakeholders to understand their unique data needs and objectives, ensuring alignment with organizational goals.</p>
      </div>
      <div style={{ width: 'calc(40px + 70vmin)', height: '40vh', backgroundImage: "url('Requirement Gathering.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', borderRadius: '10px' }}></div>
    </div>
  </div>
</div>


        <div style={{ marginTop: '10px', padding: '20px', height: 'auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', textAlign: 'center' }}>
          <div className='Data-Exploration' style={{ color: 'black', height: 'auto', width: '180vmin', padding: '40px', fontSize: '20px', borderBottom: '1px solid #02133805', backgroundColor: 'white' }}  onMouseOver={(e) => { e.currentTarget.style.border = '2px solid #012353'; }} onMouseOut={(e) => { e.currentTarget.style.border= '2px solid #02133805'; }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', alignItems: 'center' }}>
              <div style={{ width: 'calc(40px + 70vmin)', height: '40vh', backgroundImage: "url('Data Quality Assurance.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', borderRadius: '10px' }}></div>
              <div style={{ width: '50%', paddingLeft: '20px' }}>
                <h3>Data Quality Assurance</h3>
                <p> We implement robust processes and protocols to maintain the integrity and accuracy of healthcare data, mitigating the risk of errors and inconsistencies.</p>
              </div>
            </div>
          </div>
        </div>
        <div style={{ marginTop: '10px', padding: '20px', height: 'auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', textAlign: 'center' }}>
  <div className='Data-Exploration' style={{ color: 'black', height: 'auto', width: '180vmin', padding: '40px', fontSize: '20px', borderBottom: '1px solid #02133805', backgroundColor: 'white' }}  onMouseOver={(e) => { e.currentTarget.style.border = '2px solid #012353'; }} onMouseOut={(e) => { e.currentTarget.style.border= '2px solid #02133805'; }}>
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', alignItems: 'center' }}>
      <div style={{ width: '50%', paddingRight: '20px' }}>
        <h3> Data Transformation</h3>
        <p> Leveraging state-of-the-art tools and methodologies, we streamline the transformation of raw data into valuable assets, optimizing interoperability and usability.</p>
      </div>
      <div style={{ width: 'calc(40px + 70vmin)', height: '40vh', backgroundImage: "url('Data Transformation.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', borderRadius: '10px' }}></div>
    </div>
  </div>
</div>


        <div style={{ marginTop: '10px', padding: '20px', height: 'auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', textAlign: 'center' }}>
          <div className='Data-Exploration' style={{ color: 'black', height: 'auto', width: '180vmin', padding: '40px', fontSize: '20px', borderBottom: '1px solid #02133805', backgroundColor: 'white' }} onMouseOver={(e) => { e.currentTarget.style.border = '2px solid #012353'; }} onMouseOut={(e) => { e.currentTarget.style.border= '2px solid #02133805'; }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', alignItems: 'center' }}>
              <div style={{ width: 'calc(40px + 70vmin)', height: '40vh', backgroundImage: "url('Data Cataloging.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', borderRadius: '10px' }}></div>
              <div style={{ width: '50%', paddingLeft: '20px' }}>
                <h3>Data Cataloging</h3>
                <p> We establish comprehensive data catalogs that provide a centralized repository of healthcare data assets, facilitating easy discovery, access, and utilization.</p>
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
          <h4>Deep Industry Understanding</h4>
          <span className="our">With years of experience in the healthcare sector, we possess a deep understanding of its unique challenges, regulations, and requirements.</span>
        </div>
        {/* Enhanced Efficiency */}
        <div className='heading' style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', justifyContent: 'center', columnGap: '12px', fontSize: '15px', color: '#000000', }} onMouseOver={(e) => { e.currentTarget.style.backgroundColor = '#012353'; e.currentTarget.style.color = 'white'; }} onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'white'; e.currentTarget.style.color = 'black'; }}>
          <h4>End-to-End Solutions</h4>
          <span className="our">From initial assessment to ongoing support, we offer end-to-end data management solutions tailored to your organization's specific needs and objectives.</span>
        </div>
        {/* Agile Decision-Making */}
        <div className='heading' style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', justifyContent: 'center', columnGap: '12px', fontSize: '15px', color: '#000000', }} onMouseOver={(e) => { e.currentTarget.style.backgroundColor = '#012353'; e.currentTarget.style.color = 'white'; }} onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'white'; e.currentTarget.style.color = 'black'; }}>
          <h4>Focus on Quality and Timeliness</h4>
          <span className="our">We prioritize quality delivery within promised timelines, ensuring that our solutions meet the highest standards of excellence and reliability.</span>
        </div>
        {/* Seamless Integration */}
        <div className='heading' style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', justifyContent: 'center', columnGap: '12px', fontSize: '15px', color: '#000000', }} onMouseOver={(e) => { e.currentTarget.style.backgroundColor = '#012353'; e.currentTarget.style.color = 'white'; }} onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'white'; e.currentTarget.style.color = 'black'; }}>
          <h4>Innovation and Expertise</h4>
          <span>Our team of skilled professionals stays at the forefront of technological advancements and industry trends, continuously innovating to deliver best-in-class solutions.</span>
        </div>
      </div>
      <div style={{ marginTop: '30px', backgroundColor: '#73C6B6', padding: '20px 10px', fontSize: 'calc(10px + 2vmin)', textAlign: 'center', color: '#34495E ' }}>
        <h1>Transform Your Healthcare Data with BITTWOBYTE</h1>
        <p>Unlock the true potential of your healthcare data and drive meaningful outcomes with BITTWOBYTE's comprehensive data management solutions. Contact us today to learn more about how we can help your organization thrive in the digital age of healthcare.</p>
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

export default Healthcare;
