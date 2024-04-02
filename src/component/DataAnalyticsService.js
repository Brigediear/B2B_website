import React from 'react';
import Footer from './Homefooter';

const DataAnalyticsService = () => {
  return (
    <div className='container-fluid' style={{ backgroundColor: 'white' }}>
      <div className='row'>
        <div className='col-md-12'>
          <div
            className='bg-primary text-white text-center p-5'
            style={{ backgroundImage: "url('dataAnalyticshome.png')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
          >
            <div className='h1'>
              Data Analytics <br />& Intelligence
            </div>
          </div>
        </div>
      </div>

      <div className='row mt-5'>
        <div className='col-md-12'>
          <p className='text-center'>
            Unlock the Power of Your Data with Our Advanced Analytics Solutions
            At BitTwoByte, we understand the critical role that data plays in today's business landscape.
            Our Data Analytics services empower organizations to harness the full potential of their data,
            transforming raw information into valuable insights.
            Whether you're looking to optimize operations, improve decision-making processes,
            or gain a competitive edge, our expert team is here to guide you through the world of data analytics.
          </p>
        </div>
      </div>

      <div className='row mt-5'>
        <div className='col-md-12 text-center'>
          <h2>Our Data Analytics Capabilities</h2>
        </div>

        <div className='col-md-4 mt-3'>
          <div className='card mb-4'style={{ border: '10px solid #02133805', backgroundColor: 'lightblue', transition: 'background-color 0.3s ease' }} onMouseOver={(e) => { e.currentTarget.style.backgroundColor = 'white'; }} onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'lightblue'; }}>
            <div className='card-body'>
              <h3 className='card-title'>Data Exploration and Visualization</h3>
              <p className='card-text'>Navigate through your data with ease using our advanced exploration and visualization. We help you uncover patterns, trends, and outliers, providing a clear and comprehensive view of your data landscape.</p>
            </div>
          </div>
        </div>

        <div className='col-md-4 mt-3'>
          <div className='card mb-4'style={{ border: '27px solid #02133805', backgroundColor: 'lightblue', transition: 'background-color 0.3s ease' }} onMouseOver={(e) => { e.currentTarget.style.backgroundColor = 'white'; }} onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'lightblue'; }}>
            <div className='card-body'>
              <h3 className='card-title'>Predictive Analytics</h3>
              <p className='card-text'>Stay ahead of the curve by leveraging predictive analytics. Our models analyze historical data to forecast future trends, enabling you to make informed decisions and proactively respond to changing market conditions.</p>
            </div>
          </div>
        </div>

        <div className='col-md-4 mt-3'>
          <div className='card mb-4' style={{ border: '27px solid #02133805', backgroundColor: 'lightblue', transition: 'background-color 0.3s ease' }} onMouseOver={(e) => { e.currentTarget.style.backgroundColor = 'white'; }} onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'lightblue'; }}>
            <div className='card-body'>
              <h3 className='card-title'>Real-time Analytics</h3>
              <p className='card-text'>React promptly to changing conditions with our real-time analytics capabilities. Monitor key metrics in real-time, enabling quick and agile decision-making to capitalize on emerging opportunities.</p>
            </div>
          </div>
        </div>

        <div className='col-md-4 mt-3'>
          <div className='card mb-4' style={{ border: '27px solid #02133805', backgroundColor: 'lightblue', transition: 'background-color 0.3s ease' }} onMouseOver={(e) => { e.currentTarget.style.backgroundColor = 'white'; }} onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'lightblue'; }}>
            <div className='card-body'>
              <h3 className='card-title'>Data Mining</h3>
              <p className='card-text'>Unearth hidden knowledge within your data through our data mining expertise. Identify patterns, correlations, and valuable information that may be overlooked, driving strategic decision-making.</p>
            </div>
          </div>
        </div>

        <div className='col-md-4 mt-3'>
          <div className='card mb-4' style={{ border: '27px solid #02133805', backgroundColor: 'lightblue', transition: 'background-color 0.3s ease' }} onMouseOver={(e) => { e.currentTarget.style.backgroundColor = 'white'; }} onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'lightblue'; }}>
            <div className='card-body'>
              <h3 className='card-title'>Prescriptive Analytics</h3>
              <p className='card-text'>Move beyond predicting outcomes with our prescriptive analytics solutions. We provide actionable insights and recommendations, guiding you on the optimal course of action to achieve your business objectives.</p>
            </div>
          </div>
        </div>
      </div>

      <div className='row mt-5'>
        <div className='col-md-12 text-center'>
          <h2>Why Choose Us for Data Analytics?</h2>
        </div>

        <div className='col-md-6 mt-3'>
          <div className='card mb-4'style={{ border: '3px solid #f5f4f375', transition: 'background-color 0.2s ease' }} onMouseOver={(e) => { e.currentTarget.style.backgroundColor = 'lightgreen'; e.currentTarget.style.color = 'white'; }} onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'white'; e.currentTarget.style.color = 'black'; }}>
            <div className='card-body'>
              <h5 className='card-title'>Expertise</h5>
              <p className='card-text'>Our team of skilled data analysts and scientists brings a wealth of experience to the table, ensuring the success of your analytics projects.</p>
            </div>
          </div>
        </div>

        <div className='col-md-6 mt-3'>
          <div className='card mb-4'style={{ border: '3px solid #f5f4f375', transition: 'background-color 0.2s ease' }} onMouseOver={(e) => { e.currentTarget.style.backgroundColor = 'lightgreen'; e.currentTarget.style.color = 'white'; }} onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'white'; e.currentTarget.style.color = 'black'; }}>
            <div className='card-body'>
              <h5 className='card-title'>Custom Solutions</h5>
              <p className='card-text'>Understand that each business is unique. Our tailored analytics solutions align with your specific goals and challenges.</p>
            </div>
          </div>
        </div>

        <div className='col-md-6 mt-3'>
          <div className='card mb-4'style={{ border: '3px solid #f5f4f375', transition: 'background-color 0.2s ease' }} onMouseOver={(e) => { e.currentTarget.style.backgroundColor = 'lightgreen'; e.currentTarget.style.color = 'white'; }} onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'white'; e.currentTarget.style.color = 'black'; }}>
            <div className='card-body'>
              <h5 className='card-title'>Scalability</h5>
              <p className='card-text'>Whether you're a startup or an enterprise, our scalable solutions grow with your business, adapting to evolving data needs.</p>
            </div>
          </div>
        </div>

        <div className='col-md-6 mt-3'>
          <div className='card mb-4'style={{ border: '3px solid #f5f4f375', transition: 'background-color 0.2s ease' }} onMouseOver={(e) => { e.currentTarget.style.backgroundColor = 'lightgreen'; e.currentTarget.style.color = 'white'; }} onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'white'; e.currentTarget.style.color = 'black'; }}>
            <div className='card-body'>
              <h5 className='card-title'>Data Security</h5>
              <p className='card-text'>Trust is paramount in the data domain. Rest assured, our robust security measures protect your data assets, maintaining confidentiality and integrity.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid" style={{ backgroundColor: '#012353', backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: 'auto', padding: '-1vw 0', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <div className="text-white" style={{ fontSize: '2.5vw', textAlign: 'center', fontStyle: 'lora', margin: '0 5vw' }}>
          Transform your data into actionable insights with us
        </div>
        <div className="text-white" style={{ fontSize: '1.5vw', textAlign: 'center', margin: '1vw 5vw' }}>
          <div style={{ fontSize: '2.5vw', marginTop: '1vw' }}>
            Where innovation meets analytics
          </div>
          <br />
          Contact us today to embark on your data-driven journey.
        </div>
        <div className="text-center">
          <button
            className="btn btn-light btn-lg"
            style={{
              padding: '1vw 2vw',
              fontSize: '1vw',
              backgroundColor: 'white',
              color: 'black',
              borderRadius: '2vw',
              cursor: 'pointer',
              transitionDuration: '0.2s',
              border: 'none',
              fontWeight: 'bold'
            }}
            onMouseOver={(e) => { e.target.style.backgroundColor = 'lightblue'; }}
            onMouseOut={(e) => { e.target.style.backgroundColor = 'white'; }}
          >
            Let's Talk
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DataAnalyticsService;
