import React, { useRef, useState } from 'react';
import Footer from './Homefooter';

const DataScienceService = () => {
    const pathRef1 = useRef(null);
    const pathRef2 = useRef(null);
    const pathRef3 = useRef(null);
    const pathRef4 = useRef(null);
    const pathRef5 = useRef(null);
    const [isHovered1, setIsHovered1] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);
    const [isHovered3, setIsHovered3] = useState(false);
    const [isHovered4, setIsHovered4] = useState(false);
    const [isHovered5, setIsHovered5] = useState(false);

    const handleMouseEnter = (e, pathRef, setIsHovered) => {
        setIsHovered(true);
        e.currentTarget.style.background = 'linear-gradient(135deg, #43e794 , #012353)';
        const path = pathRef.current;
        if (path) {
            path.style.transition = 'none';
            path.style.strokeDashoffset = '1000';
            setTimeout(() => {
                path.style.transition = 'stroke-dashoffset 4.5s ease-in-out';
                path.style.strokeDashoffset = '0';
            }, 50);
        }
    };

    const handleMouseLeave = (e, pathRef, setIsHovered) => {
        setIsHovered(false);
        e.currentTarget.style.background = 'linear-gradient(#CBC3E3, #E6E6FA)';
        const path = pathRef.current;
        if (path) {
            path.style.transition = 'stroke-dashoffset 0.5s ease-in-out';
            path.style.strokeDashoffset = '1000';
        }
    };

    return (
        <div className='containerStyle' style={{ alignItems: 'center', backgroundColor: 'white', width: 'auto' }}>
            <div style={{
                backgroundImage: "url('Technology Solutions.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                height: '60vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column'
            }}>
                <div style={{ color: 'white', fontSize: 'calc(12px + 2vmin)', marginRight: '700px', textAlign: 'left', marginLeft: 'auto' }}>
                    <h1>Data Science</h1>
                </div>
            </div>

            <div style={{ marginTop: '50px', fontSize: '20px', height: 'auto' }}>
                <p>
                    Unlock the Power of Data Science to Drive Insights and Innovation
                    At BitTwoByte, we harness the potential of data science to uncover valuable insights, drive informed decision-making, and fuel innovation.
                    Our Data Science services encompass a range of advanced analytics, machine learning, and artificial intelligence techniques to extract actionable intelligence from your data.
                </p>
            </div>

            <div style={{ marginTop: '30px', padding: '0 10px', fontSize: 'calc(8px + 4vmin)', fontStyle: 'normal', color: '#012353 ', textAlign: 'center' }}>
                <h2>Our Data Science Solutions</h2>
            </div>

            <div style={{ marginTop: '10px', padding: '20px', height: 'auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', textAlign: 'center' }}>
                {/* First Box */}
                <div
                    className='Data-Exploration'
                    style={{
                        color: 'black',
                        height: 'auto',
                        width: '40vmin',
                        padding: '10px',
                        fontSize: '20px',
                        borderBottom: '1px solid #02133805',
                        boxShadow: '2px 2px 5px 2px rgba(0, 0, 0, 0.1)',
                        borderRadius: '10px',
                        background: 'linear-gradient(to right, #CBC3E3, #E6E6FA)',
                        position: 'relative',
                        overflow: 'hidden',
                        transition: 'background-color 0.3s ease',
                        marginLeft: '50px',
                    }}
                    onMouseEnter={(e) => handleMouseEnter(e, pathRef1, setIsHovered1)}
                    onMouseLeave={(e) => handleMouseLeave(e, pathRef1, setIsHovered1)}
                >
                    <svg
                        className="draw-icon"
                        xmlns="http://www.w3.org/2000/svg"
                        width="100"
                        height="100"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        {/* Replace the path with the SVG data for the desired icon (data science icon) */}
                        <path
                            ref={pathRef1}
                            d="M12 14l9-5-9-5-9 5 9 5z"
                            strokeDasharray={isHovered1 ? "1000" : "0"}
                            strokeDashoffset={isHovered1 ? "0" : "1000"}
                        />
                    </svg>

                    <div style={{
                        textAlign: 'center',
                        position: 'relative',
                        top: isHovered1 ? '-14px' : '0',
                        transition: 'top 0.3s ease',
                    }}>
                        <h3>Predictive Analytics</h3>
                        <p>Unlock insights and anticipate future trends with our predictive analytics solutions. Leverage advanced statistical models and machine learning algorithms to forecast outcomes and optimize decision-making.</p>
                    </div>
                </div>

                {/* Second Box */}
                <div
                    className='Data-Exploration'
                    style={{
                        color: 'black',
                        height: 'auto',
                        width: '40vmin',
                        padding: '10px',
                        fontSize: '20px',
                        borderBottom: '1px solid #02133805',
                        boxShadow: '2px 2px 5px 2px rgba(0, 0, 0, 0.1)',
                        borderRadius: '10px',
                        background: 'linear-gradient(to right, #CBC3E3, #E6E6FA)',
                        position: 'relative',
                        overflow: 'hidden',
                        transition: 'background-color 0.3s ease',
                        marginLeft: '50px',
                    }}
                    onMouseEnter={(e) => handleMouseEnter(e, pathRef2, setIsHovered2)}
                    onMouseLeave={(e) => handleMouseLeave(e, pathRef2, setIsHovered2)}
                >
                    <svg
                        className="draw-icon"
                        xmlns="http://www.w3.org/2000/svg"
                        width="100"
                        height="100"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        {/* Replace the path with the SVG data for the desired icon (data science icon) */}
                        <path
                            ref={pathRef2}
                            d="M21 6.75v10.5M17.25 19.5V4.5M12 17.25V2.25M7.5 14.25v-8.5M3 12h18"
                            strokeDasharray={isHovered2 ? "1000" : "0"}
                            strokeDashoffset={isHovered2 ? "0" : "1000"}
                        />
                    </svg>

                    <div style={{
                        textAlign: 'center',
                        position: 'relative',
                        top: isHovered2 ? '-14px' : '0',
                        transition: 'top 0.3s ease',
                    }}>
                        <h3>Machine Learning</h3>
                        <p>Harness the power of machine learning to extract valuable insights from your data. Our machine learning solutions enable you to build predictive models, automate tasks, and uncover hidden patterns.</p>
                    </div>
                </div>

                {/* Third Box */}
                <div
                    className='Data-Exploration'
                    style={{
                        color: 'black',
                        height: 'auto',
                        width: '40vmin',
                        padding: '10px',
                        fontSize: '20px',
                        borderBottom: '1px solid #02133805',
                        boxShadow: '2px 2px 5px 2px rgba(0, 0, 0, 0.1)',
                        borderRadius: '10px',
                        background: 'linear-gradient(to right, #CBC3E3, #E6E6FA)',
                        position: 'relative',
                        overflow: 'hidden',
                        transition: 'background-color 0.3s ease',
                        marginLeft: '50px',
                    }}
                    onMouseEnter={(e) => handleMouseEnter(e, pathRef3, setIsHovered3)}
                    onMouseLeave={(e) => handleMouseLeave(e, pathRef3, setIsHovered3)}
                >
                    <svg
                        className="draw-icon"
                        xmlns="http://www.w3.org/2000/svg"
                        width="100"
                        height="100"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        {/* Replace the path with the SVG data for the desired icon (data science icon) */}
                        <rect x="4" y="4" width="16" height="16" />
                        <polyline
                            points={isHovered3 ? "12 6 12 12 16 14" : "12 6 12 6 12 6"}
                            style={{
                                strokeDasharray: "100",
                                strokeDashoffset: isHovered3 ? "0" : "100",
                                transition: "stroke-dashoffset 1s ease",
                            }}
                        />
                    </svg>

                    <div style={{
                        textAlign: 'center',
                        position: 'relative',
                        top: isHovered3 ? '-14px' : '0',
                        transition: 'top 0.7s ease',
                    }}>
                        <h3>Data Visualization</h3>
                        <p>Transform complex data into intuitive visuals with our data visualization solutions. Communicate insights effectively and uncover actionable intelligence through interactive charts, graphs, and dashboards.</p>
                    </div>
                </div>

                {/* Add more boxes for additional data science solutions as needed */}
            </div>

            {/* Your code for additional sections and footer goes here */}
            <div style={{ backgroundSize: '10px' }}>
  <div style={{ textAlign: 'center' }}>
    <h1>Why Choose Us for Data Science?</h1>
  </div>

  <div className='Expertise' style={{ margin: '0px', textRendering: 'inherit', backgroundColor: 'white', transition: 'background-color 0.2s ease' }}>

    <div className='heading' style={{ fontSize: '6px',
      color: '#000000', border: '3px solid #f5f4f375',
      fontSize: 'larger', justifyContent: 'space-between', display: 'flex', flexWrap: 'wrap', columnGap: '12px' }} onMouseOver={(e) => { e.currentTarget.style.backgroundColor = '#094409'; e.currentTarget.style.color = 'white'; }} onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'white'; e.currentTarget.style.color = 'black'; }}>
      <div>
        <h2>Expertise in Data Science</h2>
      </div>
      <div style={{ width:'50%' }}>
        <p>Our team specializes in leveraging advanced data science techniques to extract insights, patterns, and predictions from your data, empowering your decision-making process.</p>
      </div>
    </div>

  </div>

  <div className='Expertise' style={{ margin: '0px', textRendering: 'inherit', backgroundColor: 'white', transition: 'background-color 0.2s ease' }}  onMouseOver={(e) => { e.currentTarget.style.backgroundColor = '#094409';}}>
    <div className='heading' style={{ fontSize: '6px',
      color: '#000000', border: '3px solid #f5f4f375',
      fontSize: 'larger', justifyContent: 'space-between', display: 'flex', flexWrap: 'wrap', columnGap: '12px' }}  onMouseOver={(e) => {e.currentTarget.style.backgroundColor = '#094409';e.currentTarget.style.color = 'white';}}onMouseOut={(e) => {e.currentTarget.style.backgroundColor = 'white';e.currentTarget.style.color = 'black';}}>  
      <h2>Scalability </h2>
      <div style={{ width:'50%' }}>
        <p>We prioritize scalable data science solutions that can handle large volumes of data and adapt to your organization's growth and changing needs.</p>
      </div>
    </div>
  </div>

  <div className='Expertise' style={{ margin: '0px', textRendering: 'inherit', backgroundColor: 'white', transition: 'background-color 0.2s ease' }}  onMouseOver={(e) => { e.currentTarget.style.backgroundColor = '#caa40b';}}>
    <div className='heading' style={{ fontSize: '6px',
      color: '#000000', border: '3px solid #f5f4f375',
      fontSize: 'larger', justifyContent: 'space-between', display: 'flex', flexWrap: 'wrap', columnGap: '12px'  }}   onMouseOver={(e) => {e.currentTarget.style.backgroundColor = '#094409';e.currentTarget.style.color = 'white';}}onMouseOut={(e) => {e.currentTarget.style.backgroundColor = 'white';e.currentTarget.style.color = 'black';}}>  
      <h2>Reliability</h2>
      <div style={{width:'50%'}}> 
        <p>Trust in our reliable data science methodologies to ensure accuracy, consistency, and integrity in the analysis and interpretation of your data.</p>
      </div>
    </div>
  </div>

  <div className='Expertise' style={{ margin: '0px', textRendering: 'inherit', backgroundColor: 'white', transition: 'background-color 0.2s ease' }}  onMouseOver={(e) => { e.currentTarget.style.backgroundColor = '#094409';}}>
    <div className='heading' style={{ display: 'flex', justifyContent: 'space-between',flexWrap:'wrap' ,columnGap: '12px',  fontSize: '6px', color: '#000000', border: '3px solid #f5f4f375', fontSize: 'larger' }}  onMouseOver={(e) => {e.currentTarget.style.backgroundColor = '#094409';e.currentTarget.style.color = 'white';}}onMouseOut={(e) => {e.currentTarget.style.backgroundColor = 'white';e.currentTarget.style.color = 'black';}}>  
      <h2>Seamless Integration</h2>
      <div style={{width:'50%'}}>
        <p>Our data science solutions seamlessly integrate with your existing infrastructure and workflows, ensuring smooth implementation and minimal disruption to your operations.</p>
      </div>
    </div>
  </div>

  <div style={{ marginTop: '30px', backgroundColor: '#012353', padding: '20px 10px', fontSize: 'calc(10px + 2vmin)', textAlign: 'center', color: 'white' }}>
    <p>Transform your organization with cutting-edge data science solutions from Bittwobyte Technologies Pvt. Ltd. Whether you need predictive analytics, machine learning models, or data-driven insights, our expert team is ready to empower your business.</p>
    <div className="text-center">
      <div className="text-center">
        <a href="/contact" className="btn btn-light btn-lg"
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
        </a>
      </div>
    </div>
  </div>
</div>

            <Footer />
        </div>
    );
};

export default DataScienceService;
