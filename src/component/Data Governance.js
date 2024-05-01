import React, { useRef, useState } from 'react';
import Footer from './Homefooter';

const DataGovernanceService = () => {
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
                    <h1>Data Governance</h1>
                </div>
            </div>

            <div style={{ marginTop: '50px', fontSize: '20px', height: 'auto' }}>
                <p>
                    Ensure the Security and Integrity of Your Data Assets with Our Data Governance Solutions
                    At BitTwoByte, we recognize the importance of data governance in maintaining data quality, compliance, and security.
                    Our Data Governance services provide comprehensive frameworks and strategies to establish control over your data assets, ensuring they remain accurate, accessible, and secure.
                </p>
            </div>

            <div style={{ marginTop: '30px', padding: '0 10px', fontSize: 'calc(8px + 4vmin)', fontStyle: 'normal', color: '#012353 ', textAlign: 'center' }}>
                <h2>Our Data Governance Solutions</h2>
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
                        {/* Replace the path with the SVG data for the desired icon (data governance icon) */}
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
                        <h3>Data Compliance Management</h3>
                        <p>Ensure compliance with regulatory standards and internal policies through our robust data compliance management solutions. We help you implement effective controls and processes to safeguard sensitive data and mitigate risks.</p>
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
                        {/* Replace the path with the SVG data for the desired icon (data governance icon) */}
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
                        <h3>Data Access Control</h3>
                        <p>Control access to sensitive data with our data access control solutions. Implement role-based access controls and encryption mechanisms to ensure only authorized users can access and manipulate data.</p>
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
                        {/* Replace the path with the SVG data for the desired icon (data governance icon) */}
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
                        <h3>Data Quality Management</h3>
                        <p>Ensure the accuracy and consistency of your data with our data quality management solutions. We help you establish data quality standards, perform data profiling, and implement data cleansing techniques to enhance data reliability.</p>
                    </div>
                </div>

                {/* Add more boxes for additional data governance solutions as needed */}
            </div>

            
            <div style={{ backgroundSize: '10px' }}>
          <div style={{ textAlign: 'center' }}>
            <h1>Why Choose Us for Data Governance?</h1>
          </div>


          <div className='Expertise' style={{ margin: '0px', textRendering: 'inherit', backgroundColor: 'white', transition: 'background-color 0.2s ease' }}>
  
  <div className='heading' style={{ fontSize: '6px',
   color: '#000000', border: '3px solid #f5f4f375',
    fontSize: 'larger', justifyContent: 'space-between', display: 'flex', flexWrap: 'wrap', columnGap: '12px' }} onMouseOver={(e) => { e.currentTarget.style.backgroundColor = '#094409'; e.currentTarget.style.color = 'white'; }} onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'white'; e.currentTarget.style.color = 'black'; }}>
    <div>
      <h2>Expertise in Data Governance</h2>
    </div>
    <div style={{ width:'50%' }}>
      <p>Our team specializes in implementing comprehensive data governance frameworks, ensuring your data is managed, protected, and utilized effectively throughout its lifecycle.</p>
    </div>
  </div>
  
</div>



          <div className='Expertise' style={{ margin: '0px', textRendering: 'inherit', backgroundColor: 'white', transition: 'background-color 0.2s ease' }}  onMouseOver={(e) => { e.currentTarget.style.backgroundColor = '#094409';}}>
            <div className='heading' style={{ fontSize: '6px',
   color: '#000000', border: '3px solid #f5f4f375',
    fontSize: 'larger', justifyContent: 'space-between', display: 'flex', flexWrap: 'wrap', columnGap: '12px' }}  onMouseOver={(e) => {e.currentTarget.style.backgroundColor = '#094409';e.currentTarget.style.color = 'white';}}onMouseOut={(e) => {e.currentTarget.style.backgroundColor = 'white';e.currentTarget.style.color = 'black';}}>  
              <h2>Scalability </h2>
              <div style={{ width:'50%' }}>
              <p>We prioritize scalability and flexibility in our data governance solutions, ensuring they can adapt to your organization's evolving needs and data volumes.</p>
            </div> </div>
          </div>


          <div className='Expertise' style={{ margin: '0px', textRendering: 'inherit', backgroundColor: 'white', transition: 'background-color 0.2s ease' }}  onMouseOver={(e) => { e.currentTarget.style.backgroundColor = '#caa40b';}}>
            <div className='heading' style={{ fontSize: '6px',
   color: '#000000', border: '3px solid #f5f4f375',
    fontSize: 'larger', justifyContent: 'space-between', display: 'flex', flexWrap: 'wrap', columnGap: '12px'  }}   onMouseOver={(e) => {e.currentTarget.style.backgroundColor = '#094409';e.currentTarget.style.color = 'white';}}onMouseOut={(e) => {e.currentTarget.style.backgroundColor = 'white';e.currentTarget.style.color = 'black';}}>  
              <h2>Reliability</h2>
              <div style={{width:'50%'}}> 
              <p>Trust in our robust data governance practices to uphold data integrity, reliability, and security, safeguarding your sensitive information and ensuring compliance with regulations.</p>
            </div></div>
          </div>


          <div className='Expertise' style={{ margin: '0px', textRendering: 'inherit', backgroundColor: 'white', transition: 'background-color 0.2s ease' }}  onMouseOver={(e) => { e.currentTarget.style.backgroundColor = '#094409';}}>
            <div className='heading' style={{ display: 'flex', justifyContent: 'space-between',flexWrap:'wrap' ,columnGap: '12px',  fontSize: '6px', color: '#000000', border: '3px solid #f5f4f375', fontSize: 'larger' }}  onMouseOver={(e) => {e.currentTarget.style.backgroundColor = '#094409';e.currentTarget.style.color = 'white';}}onMouseOut={(e) => {e.currentTarget.style.backgroundColor = 'white';e.currentTarget.style.color = 'black';}}>  
              <h2>Seamless Integration</h2>
              <div style={{width:'50%'}}>
              <p>Our data governance solutions seamlessly integrate with your existing systems and processes, minimizing disruptions and maximizing the efficiency of your data management operations.</p>
            </div></div>
          </div>


           <div style={{ marginTop: '30px', backgroundColor: '#012353', padding: '20px 10px', fontSize: 'calc(10px + 2vmin)', textAlign: 'center', color: 'white' }}>
            <p>Empower your organization with effective data governance strategies and solutions from Bittwobyte Technologies Pvt. Ltd.
                    Whether you need to enhance data security, ensure regulatory compliance, or optimize data management processes, our expert team is ready to assist you.
                    Reach out to us today to discover how our data governance services can drive your organization towards greater data-driven success.</p>
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

export default DataGovernanceService;