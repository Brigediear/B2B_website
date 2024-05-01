import React, { useRef, useState } from 'react';
import Footer from './Homefooter';

const ImplementationServices = () => {
    // Refs for SVG paths and state for hover effects
    const pathRef1 = useRef(null);
    const pathRef2 = useRef(null);
    const pathRef3 = useRef(null);
    const [isHovered1, setIsHovered1] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);
    const [isHovered3, setIsHovered3] = useState(false);

    // Function to handle mouse enter event
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

    // Function to handle mouse leave event
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
            {/* Banner section */}
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
                    <h1>Implementation Services</h1>
                </div>
            </div>

            {/* Introduction */}
            <div style={{ marginTop: '50px', fontSize: '20px', height: 'auto' }}>
                <p>
                    Empower Your Business with Expert Implementation Services
                    At BitTwoByte, we understand that successful technology implementation is crucial for business growth.
                    Our Implementation Services cover the entire spectrum from planning to execution, ensuring seamless integration and optimal performance of your solutions.
                </p>
            </div>

            {/* Service offerings */}
            <div style={{ marginTop: '30px', padding: '0 10px', fontSize: 'calc(8px + 4vmin)', fontStyle: 'normal', color: '#012353 ', textAlign: 'center' }}>
                <h2>Our Implementation Services</h2>
            </div>

            <div style={{ marginTop: '10px', padding: '20px', height: 'auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', textAlign: 'center' }}>
                {/* Box 1: Service 1 */}
                <div
                    className='Service-Box'
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
                    {/* SVG Icon */}
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
                        {/* Icon for Custom Solution Deployment */}
                        <path
                            ref={pathRef1}
                            d="M12 14l9-5-9-5-9 5 9 5z"
                            strokeDasharray={isHovered1 ? "1000" : "0"}
                            strokeDashoffset={isHovered1 ? "0" : "1000"}
                        />
                    </svg>

                    {/* Service Details */}
                    <div style={{
                        textAlign: 'center',
                        position: 'relative',
                        top: isHovered1 ? '-14px' : '0',
                        transition: 'top 0.3s ease',
                    }}>
                        <h3>Custom Solution Deployment</h3>
                        <p>Tailored deployment strategies to fit your unique business requirements, ensuring maximum efficiency and performance.</p>
                    </div>
                </div>

                {/* Box 2: Service 2 */}
                <div
                    className='Service-Box'
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
                    {/* SVG Icon */}
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
                        {/* Icon for Integration Support */}
                        <path
                            ref={pathRef2}
                            d="M21 6.75v10.5M17.25 19.5V4.5M12 17.25V2.25M7.5 14.25v-8.5M3 12h18"
                            strokeDasharray={isHovered2 ? "1000" : "0"}
                            strokeDashoffset={isHovered2 ? "0" : "1000"}
                        />
                    </svg>

                    {/* Service Details */}
                    <div style={{
                        textAlign: 'center',
                        position: 'relative',
                        top: isHovered2 ? '-14px' : '0',
                        transition: 'top 0.3s ease',
                    }}>
                        <h3>Integration Support</h3>
                        <p>Seamless integration with existing systems and processes, minimizing disruptions and ensuring smooth operation.</p>
                    </div>
                </div>

                {/* Box 3: Service 3 */}
                <div
                    className='Service-Box'
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
                    {/* SVG Icon */}
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
                        {/* Icon for Training and Support */}
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

                    {/* Service Details */}
                    <div style={{
                        textAlign: 'center',
                        position: 'relative',
                        top: isHovered3 ? '-14px' : '0',
                        transition: 'top 0.7s ease',
                    }}>
                        <h3>Training and Support</h3>
                        <p>Comprehensive training programs and ongoing support to ensure effective adoption and utilization of implemented solutions.</p>
                    </div>
                </div>
            </div>
            <div className='containerStyle' style={{ alignItems: 'center', backgroundColor: 'white', width: 'auto' }}>
            {/* Banner section */}
            <div style={{ textAlign: 'center', marginTop: '50px' }}>
                <h1>Why Choose Us for Implementation Services?</h1>
            </div>

            {/* Expertise in Implementation Services */}
            <div className='Expertise' style={{ margin: '0px', textRendering: 'inherit', backgroundColor: 'white', transition: 'background-color 0.2s ease' }}>
                <div className='heading' style={{ fontSize: '6px', color: '#000000', border: '3px solid #f5f4f375', fontSize: 'larger', justifyContent: 'space-between', display: 'flex', flexWrap: 'wrap', columnGap: '12px' }} onMouseOver={(e) => { e.currentTarget.style.backgroundColor = '#094409'; e.currentTarget.style.color = 'white'; }} onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'white'; e.currentTarget.style.color = 'black'; }}>
                    <div>
                        <h2>Expertise in Implementation Services</h2>
                    </div>
                    <div style={{ width: '50%' }}>
                        <p>Our team specializes in providing comprehensive implementation services, ensuring seamless integration and optimal performance of your solutions. From planning to execution, we cover the entire spectrum to meet your unique business requirements.</p>
                    </div>
                </div>
            </div>

            {/* Scalability */}
            <div className='Expertise' style={{ margin: '0px', textRendering: 'inherit', backgroundColor: 'white', transition: 'background-color 0.2s ease' }} onMouseOver={(e) => { e.currentTarget.style.backgroundColor = '#094409'; }}>
                <div className='heading' style={{ fontSize: '6px', color: '#000000', border: '3px solid #f5f4f375', fontSize: 'larger', justifyContent: 'space-between', display: 'flex', flexWrap: 'wrap', columnGap: '12px' }} onMouseOver={(e) => { e.currentTarget.style.backgroundColor = '#094409'; e.currentTarget.style.color = 'white'; }} onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'white'; e.currentTarget.style.color = 'black'; }}>
                    <h2>Scalability</h2>
                    <div style={{ width: '50%' }}>
                        <p>We prioritize scalability and flexibility in our implementation services, ensuring they can adapt to your organization's evolving needs and scale along with your business growth.</p>
                    </div>
                </div>
            </div>

            {/* Reliability */}
            <div className='Expertise' style={{ margin: '0px', textRendering: 'inherit', backgroundColor: 'white', transition: 'background-color 0.2s ease' }} onMouseOver={(e) => { e.currentTarget.style.backgroundColor = '#094409'; }}>
                <div className='heading' style={{ fontSize: '6px', color: '#000000', border: '3px solid #f5f4f375', fontSize: 'larger', justifyContent: 'space-between', display: 'flex', flexWrap: 'wrap', columnGap: '12px' }} onMouseOver={(e) => { e.currentTarget.style.backgroundColor = '#094409'; e.currentTarget.style.color = 'white'; }} onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'white'; e.currentTarget.style.color = 'black'; }}>
                    <h2>Reliability</h2>
                    <div style={{ width: '50%' }}>
                        <p>Trust in our reliable implementation practices to ensure the successful deployment and operation of your solutions, meeting deadlines and exceeding expectations.</p>
                    </div>
                </div>
            </div>

            {/* Seamless Integration */}
            <div className='Expertise' style={{ margin: '0px', textRendering: 'inherit', backgroundColor: 'white', transition: 'background-color 0.2s ease' }} onMouseOver={(e) => { e.currentTarget.style.backgroundColor = '#094409'; }}>
                <div className='heading' style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', columnGap: '12px', fontSize: '6px', color: '#000000', border: '3px solid #f5f4f375', fontSize: 'larger' }} onMouseOver={(e) => { e.currentTarget.style.backgroundColor = '#094409'; e.currentTarget.style.color = 'white'; }} onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'white'; e.currentTarget.style.color = 'black'; }}>
                    <h2>Seamless Integration</h2>
                    <div style={{ width: '50%' }}>
                        <p>Our implementation services seamlessly integrate with your existing systems and workflows, minimizing disruptions and ensuring a smooth transition process.</p>
                    </div>
                </div>
            </div>

            {/* Call to Action */}
            <div style={{ marginTop: '30px', backgroundColor: '#012353', padding: '20px 10px', fontSize: 'calc(10px + 2vmin)', textAlign: 'center', color: 'white' }}>
                <p>Empower your organization with effective implementation services from BitTwoByte Technologies Pvt. Ltd. Whether you're implementing new solutions or upgrading existing ones, our expert team is ready to assist you at every step. Contact us today to learn more about how our implementation services can drive your business forward.</p>
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
            
            <Footer />
        </div>
    );
};

export default ImplementationServices;