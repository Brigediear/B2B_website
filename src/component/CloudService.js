import React from 'react';
import Footer from './Homefooter';

const Cloud = () => {
  return (
    <div className='container-fluid' style={{ backgroundColor: 'white' }}>
      <style>
        {`
          .GradientContainer {
            background: #ffffff;
            padding: 20px;
           
          }

          .GradientContainer p {
            color: #333333;
            font-size: 16px;
          }

          .GradientContainer p.text-center {
            text-align: center;
            margin-top: 20px;
          }

          .box-container {
            border: 2px solid #021338;
            padding: 20px;
            border-radius: 10px;
            background-color: #f0f0f0;
          }

          .box-container p {
            font-weight: bold;
          }

          .circle-container {
            border-radius: 50%;
            width: 250px;
            height: 250px;
            border: 30px solid #02133805;
            background-color: lightblue;
            transition: background-color 0.3s ease;
          }

          .circle-container:hover {
            background-color: white;
          }

          .card-body {
            text-align: left;
          }
        `}
      </style>

      <div className='row' style={{ marginBottom: '50px' }}>
        <div className='col-md-12'>
        <div
  className='bg-primary text-white text-center p-5'
  style={{ backgroundImage: "url('cloud.png')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
>
  <div className='h1'>
    <br /> 
    <span style={{ fontSize: '3rem', textAlign: 'left', display: 'block' }}>Empower Your Business with</span>
    <span style={{ fontSize: '3rem', textAlign: 'left', display: 'block' }}> Bittwobyte Technologies Pvt. Ltd</span>
  </div>  Empower Your Business with Bittwobyte Technologies Pvt. Ltd Cloud Solutions
</div>
        </div>
      </div>



<div className="line">
  <hr />
  <p className="text-center" >
    Elevate your business operations with Bittwobyte Technologies Pvt. Ltd.'s innovative cloud solutions. Our comprehensive suite of cloud services enables seamless scalability, enhanced collaboration, and improved efficiency. From cloud migration and infrastructure management to data storage and security, we offer tailored solutions to meet your unique business needs. With Bittwobyte's expertise in cloud technology, businesses can unlock new opportunities, reduce costs, and accelerate growth. Experience the agility, flexibility, and reliability of cloud computing with Bittwobyte Technologies Pvt. Ltd.
  </p>
  <hr />
</div>







      <div className='row mt-5'>
    <div className='col-md-12 text-center '>
        <h2>Our Solutions:</h2>
    </div>

    <div className='col-md-4 mt-3' style={{textAlign: 'center',padding:'Right'}}>
        <div 
            className='circle-container'  
            style={{
                borderRadius: '50%',
                width: '250px',
                height: '250px',
                border: '30px solid #02133805',
                backgroundColor: 'lightblue',
                transition: 'background-color 0.3s ease'
            }} 
            onMouseOver={(e) => { e.currentTarget.style.backgroundColor = 'white'; }} 
            onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'lightblue'; }}
        >
            <div className='card-body text-center'style={{textAlign: 'left'}}>
                <h3 className='card-title'>Cloud Migration</h3>
                <p className='card-text'> Seamlessly transition your applications and data to the cloud with our expert migration services.</p>
            </div>
        </div>
    </div>

    <div className='col-md-4 mt-3'>
        <div 
            className='circle-container' 
            style={{
                borderRadius: '50%',
                width: '250px',
                height: '250px',
                border: '30px solid #02133805',
                backgroundColor: 'lightblue',
                transition: 'background-color 0.3s ease'
            }} 
            onMouseOver={(e) => { e.currentTarget.style.backgroundColor = 'white'; }} 
            onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'lightblue'; }}
        >
            <div className='card-body text-center'>
                <h3 className='card-title'>Infrastructure Management</h3>
                <p className='card-text'> Optimize your cloud infrastructure for performance, scalability, and cost-efficiency.</p>
            </div>
        </div>
    </div>

    <div className='col-md-4 mt-3'>
        <div 
            className='circle-container' 
            style={{
                borderRadius: '50%',
                width: '250px',
                height: '250px',
                border: '30px solid #02133805',
                backgroundColor: 'lightblue',
                transition: 'background-color 0.3s ease'
            }} 
            onMouseOver={(e) => { e.currentTarget.style.backgroundColor = 'white'; }} 
            onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'lightblue'; }}
        >
            <div className='card-body text-center'>
                <h3 className='card-title'>Data Storage</h3>
                <p className='card-text'>Securely store and manage your data in the cloud, ensuring accessibility and reliability.</p>
            </div>
        </div>
    </div>

    <div className='col-md-4 mt-3'>
        <div 
            className='circle-container' 
            style={{
                borderRadius: '50%',
                width: '250px',
                height: '250px',
                border: '30px solid #02133805',
                backgroundColor: 'lightblue',
                transition: 'background-color 0.3s ease'
            }} 
            onMouseOver={(e) => { e.currentTarget.style.backgroundColor = 'white'; }} 
            onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'lightblue'; }}
        >
            <div className='card-body text-center'>
                <h3 className='card-title'>Security Solutions</h3>
                <p className='card-text'> Protect your cloud environment with advanced security measures, including encryption, access.</p>
            </div>
        </div>
    </div>

    <div className='col-md-4 mt-3'>
        <div 
            className='circle-container' 
            style={{
                borderRadius: '50%',
                width: '250px',
                height: '250px',
                border: '30px solid #02133805',
                backgroundColor: 'lightblue',
                transition: 'background-color 0.3s ease'
            }} 
            onMouseOver={(e) => { e.currentTarget.style.backgroundColor = 'white'; }} 
            onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'lightblue'; }}
        >
            <div className='card-body text-center'>
                <h3 className='card-title'>Collaboration Tools</h3>
                <p className='card-text'> Facilitate seamless collaboration and communication with cloud-based productivity.</p>
            </div>
        </div>
    </div>
</div>


    

      <div className='row mt-5'>
        <div className='col-md-12 text-center'>
          <h2>Why Choose Us for Cloud Solutions?</h2>
        </div>

        <div className='col-md-6 mt-3'>
          <div className='card mb-4'style={{ border: '3px solid #f5f4f375', transition: 'background-color 0.2s ease' }} onMouseOver={(e) => { e.currentTarget.style.backgroundColor = 'lightgreen'; e.currentTarget.style.color = 'white'; }} onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'white'; e.currentTarget.style.color = 'black'; }}>
            <div className='card-body'>
              <h5 className='card-title'>Proven Expertise</h5>
              <p className='card-text'>Benefit from our extensive experience and expertise in cloud technology implementation and management.</p>
            </div>
          </div>
        </div>

        <div className='col-md-6 mt-3'>
          <div className='card mb-4'style={{ border: '3px solid #f5f4f375', transition: 'background-color 0.2s ease' }} onMouseOver={(e) => { e.currentTarget.style.backgroundColor = 'lightgreen'; e.currentTarget.style.color = 'white'; }} onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'white'; e.currentTarget.style.color = 'black'; }}>
            <div className='card-body'>
              <h5 className='card-title'>Tailored Solutions</h5>
              <p className='card-text'>Receive customized cloud solutions tailored to your specific business requirements and objectives.</p>
            </div>
          </div>
        </div>

        <div className='col-md-6 mt-3'>
          <div className='card mb-4'style={{ border: '3px solid #f5f4f375', transition: 'background-color 0.2s ease' }} onMouseOver={(e) => { e.currentTarget.style.backgroundColor = 'lightgreen'; e.currentTarget.style.color = 'white'; }} onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'white'; e.currentTarget.style.color = 'black'; }}>
            <div className='card-body'>
              <h5 className='card-title'>Cost Optimization</h5>
              <p className='card-text'> Maximize cost savings with our efficient cloud solutions, optimizing resource utilization and minimizing expenses.</p>
            </div>
          </div>
        </div>

        <div className='col-md-6 mt-3'>
          <div className='card mb-4'style={{ border: '3px solid #f5f4f375', transition: 'background-color 0.2s ease' }} onMouseOver={(e) => { e.currentTarget.style.backgroundColor = 'lightgreen'; e.currentTarget.style.color = 'white'; }} onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'white'; e.currentTarget.style.color = 'black'; }}>
            <div className='card-body'>
              <h5 className='card-title'>Scalability and Flexibility</h5>
              <p className='card-text'>Scale your infrastructure up or down according to your evolving business needs, ensuring flexibility and agility.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid" style={{ backgroundColor: '#012353', backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: 'auto', padding: '5vw 0', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <div className="text-white" style={{ fontSize: '1.2vw', textAlign: 'left', fontStyle: 'lora', margin: '0 5vw' }}>
                            Elevate your business with Bittwobyte Technologies Pvt. Ltd.'s cloud solutions.
                    From cloud migration and infrastructure management to data storage and security,
                    our comprehensive offerings enable seamless scalability, enhanced collaboration, 
                    and improved efficiency. Unlock the power of cloud computing to drive innovation and growth.
                    Contact us now to learn more about our tailored cloud solutions and take your business to new heights.
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

export default Cloud;
