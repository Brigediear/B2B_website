import React, { useRef, useState } from 'react';
import Footer from './Homefooter';

const ManagementConsulting = () => {
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
                    <h1>Management Consulting</h1>
                </div>
            </div>

            {/* Introduction */}
            <div style={{ marginTop: '50px', fontSize: '20px', height: 'auto' }}>
                <p>
                    Drive Business Transformation with Strategic Management Consulting
                    At BitTwoByte, we offer comprehensive management consulting services to help businesses navigate complex challenges and achieve sustainable growth.
                    Our team of experts brings extensive industry experience and strategic insights to deliver tailored solutions that drive business transformation and maximize value.
                </p>
            </div>

            {/* Service offerings */}
            <div style={{ marginTop: '30px', padding: '0 10px', fontSize: 'calc(8px + 4vmin)', fontStyle: 'normal', color: '#012353 ', textAlign: 'center' }}>
                <h2>Our Management Consulting Services</h2>
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
                        {/* Icon for Strategy Development */}
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
                        <h3>Strategy Development</h3>
                        <p>Customized strategic plans tailored to your business objectives, guiding decision-making and driving sustainable growth.</p>
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
                        {/* Icon for Performance Improvement */}
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
                        <h3>Performance Improvement</h3>
                        <p>Identifying operational inefficiencies and implementing strategies to enhance performance, productivity, and profitability.</p>
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
                        {/* Icon for Organizational Transformation */}
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
                        <h3>Organizational Transformation</h3>
                        <p>Driving organizational change initiatives to adapt to market dynamics, enhance competitiveness, and achieve sustainable growth.</p>
                    </div>
                </div>
            </div>

            <div className='containerStyle' style={{ alignItems: 'center', backgroundColor: 'white', width: 'auto' }}>
            {/* Banner section */}
            <div style={{ textAlign: 'center', marginTop: '50px' }}>
                <h1>Why Choose Us for Management Consulting?</h1>
            </div>

            {/* Expertise in Management Consulting */}
            <div className='Expertise' style={{ margin: '0px', textRendering: 'inherit', backgroundColor: 'white', transition: 'background-color 0.2s ease' }}>
                <div className='heading' style={{ fontSize: '6px', color: '#000000', border: '3px solid #f5f4f375', fontSize: 'larger', justifyContent: 'space-between', display: 'flex', flexWrap: 'wrap', columnGap: '12px' }} onMouseOver={(e) => { e.currentTarget.style.backgroundColor = '#094409'; e.currentTarget.style.color = 'white'; }} onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'white'; e.currentTarget.style.color = 'black'; }}>
                    <div>
                        <h2>Expertise in Management Consulting</h2>
                    </div>
                    <div style={{ width: '50%' }}>
                        <p>Our team specializes in providing expert management consulting services, offering strategic guidance and actionable insights to drive organizational excellence and achieve sustainable growth.</p>
                    </div>
                </div>
            </div>

            {/* Innovation and Creativity */}
            <div className='Expertise' style={{ margin: '0px', textRendering: 'inherit', backgroundColor: 'white', transition: 'background-color 0.2s ease' }} onMouseOver={(e) => { e.currentTarget.style.backgroundColor = '#094409'; }}>
                <div className='heading' style={{ fontSize: '6px', color: '#000000', border: '3px solid #f5f4f375', fontSize: 'larger', justifyContent: 'space-between', display: 'flex', flexWrap: 'wrap', columnGap: '12px' }} onMouseOver={(e) => { e.currentTarget.style.backgroundColor = '#094409'; e.currentTarget.style.color = 'white'; }} onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'white'; e.currentTarget.style.color = 'black'; }}>
                    <h2>Innovation and Creativity</h2>
                    <div style={{ width: '50%' }}>
                        <p>We foster innovation and creativity in our management consulting approach, leveraging cutting-edge methodologies and best practices to deliver transformative solutions.</p>
                    </div>
                </div>
            </div>

            {/* Client-Centric Approach */}
            <div className='Expertise' style={{ margin: '0px', textRendering: 'inherit', backgroundColor: 'white', transition: 'background-color 0.2s ease' }} onMouseOver={(e) => { e.currentTarget.style.backgroundColor = '#094409'; }}>
                <div className='heading' style={{ fontSize: '6px', color: '#000000', border: '3px solid #f5f4f375', fontSize: 'larger', justifyContent: 'space-between', display: 'flex', flexWrap: 'wrap', columnGap: '12px' }} onMouseOver={(e) => { e.currentTarget.style.backgroundColor = '#094409'; e.currentTarget.style.color = 'white'; }} onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'white'; e.currentTarget.style.color = 'black'; }}>
                    <h2>Client-Centric Approach</h2>
                    <div style={{ width: '50%' }}>
                        <p>We adopt a client-centric approach in our management consulting services, prioritizing client needs and objectives to deliver customized solutions that drive tangible results.</p>
                    </div>
                </div>
            </div>

            {/* Collaborative Partnership */}
            <div className='Expertise' style={{ margin: '0px', textRendering: 'inherit', backgroundColor: 'white', transition: 'background-color 0.2s ease' }} onMouseOver={(e) => { e.currentTarget.style.backgroundColor = '#094409'; }}>
                <div className='heading' style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', columnGap: '12px', fontSize: '6px', color: '#000000', border: '3px solid #f5f4f375', fontSize: 'larger' }} onMouseOver={(e) => { e.currentTarget.style.backgroundColor = '#094409'; e.currentTarget.style.color = 'white'; }} onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'white'; e.currentTarget.style.color = 'black'; }}>
                    <h2>Collaborative Partnership</h2>
                    <div style={{ width: '50%' }}>
                        <p>We believe in building collaborative partnerships with our clients, working closely together to address challenges, explore opportunities, and achieve shared goals.</p>
                    </div>
                </div>
            </div>

            {/* Call to Action */}
            <div style={{ marginTop: '30px', backgroundColor: '#012353', padding: '20px 10px', fontSize: 'calc(10px + 2vmin)', textAlign: 'center', color: 'white' }}>
                <p>Transform your business with strategic management consulting services from BitTwoByte Technologies Pvt. Ltd. Whether you need guidance on strategy development, performance improvement, or organizational transformation, our expert team is here to help. Contact us today to embark on your journey towards sustainable growth.</p>
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
                        Let's Connect
                    </a>
                </div>
            </div>
            </div>
            
            <Footer />
        </div>
    );
};

export default ManagementConsulting;
