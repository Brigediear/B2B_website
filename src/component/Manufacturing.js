import React, { useRef, useState } from 'react';
import Footer from './Homefooter';

const Manufacturing = () => {
    const pathRef1 = useRef(null);
    const pathRef2 = useRef(null);
    const pathRef3 = useRef(null);
    const [isHovered1, setIsHovered1] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);
    const [isHovered3, setIsHovered3] = useState(false);

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
        <div className='containerStyle' style={{ alignItems: 'center', backgroundColor: 'white' }}>
            <div style={{ backgroundImage: "url('/manufacturing.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '60vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <div style={{ color: 'white', fontSize: 'calc(12px + 3vmin)', marginRight: '900px', textAlign: 'left', marginLeft: 'auto' }}>
                    <h1>Manufacturing</h1>
                </div>
            </div>

            <div style={{ marginTop: '30px', padding: '0 10px', fontSize: 'calc(8px + 4vmin)', fontStyle: 'normal', color: '#012353 ', textAlign: 'center' }}>
                <h>Welcome to BITTWOBYTE: Revolutionizing Manufacturing with Advanced IT Solutions</h>
            </div>
            <div style={{ marginTop: '20px', padding: '0 10px', fontSize: 'calc(8px + 2vmin)', fontStyle: 'normal' }}>
                <p>
                    The manufacturing industry is undergoing a profound transformation driven by digital technologies and automation.
                    At BITTWOBYTE, we specialize in empowering manufacturers with cutting-edge IT solutions to enhance productivity, streamline operations, and drive innovation.
                    Our comprehensive suite of services is designed to address the unique challenges faced by manufacturers in today's competitive landscape.
                </p>
            </div>

            <div style={{ backgroundColor: 'white', marginTop: '30px', padding: '0 10px', fontSize: 'calc(10px + 1vmin)', textAlign: 'center' }}>
                <h1>Our Solutions</h1>
                <div style={{ backgroundColor: 'white', marginTop: '20px', padding: '0 10px', fontSize: 'calc(10px + 2vmin)', textAlign: 'center' }}>

                    <p>At BITTWOBYTE, we offer a range of innovative IT solutions tailored to the specific needs of the manufacturing industry.
                        From process optimization to supply chain management, our solutions empower manufacturers to embrace digital transformation and stay ahead of the competition.</p>
                </div>
            </div>

            <div style={{ marginTop: '10px', padding: '20px', height: 'auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', textAlign: 'center' }}>

                {/* First Box */}
                <div
                    className='Data-Exploration'
                    style={{
                        color: 'black',
                        height: 'auto',
                        width: '55vmin',
                        padding: '10px',
                        fontSize: '20px',
                        borderBottom: '1px solid #02133805',
                        boxShadow: '2px 2px 5px 2px rgba(0, 0, 0, 0.1)',
                        borderRadius: '10px',
                        background: 'linear-gradient(to right, #CBC3E3, #E6E6FA)',
                        position: 'relative',
                        overflow: 'hidden',
                        transition: 'background-color 0.3s ease',
                        marginLeft: '20px',
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
                     <path
    ref={pathRef1}
    d="M12 22C6.5 22 2 17.5 2 12S6.5 2 12 2s10 4.5 10 10-4.5 10-10 10zm0-18c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8z"
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
                        <h3>Integrated Supply Chain Management</h3>
                        <p>Efficient supply chain management is essential for manufacturers to minimize costs and maximize efficiency.
                            BITTWOBYTE offers integrated supply chain management solutions that enable manufacturers to optimize their procurement, production, and distribution processes.
                            From demand forecasting to inventory optimization, our solutions help manufacturers achieve greater visibility and control over their supply chains.</p>
                    </div>
                </div>

                {/* Second Box */}
                <div
                    className='Data-Exploration'
                    style={{
                        color: 'black',
                        height: 'auto',
                        width: '55vmin',
                        padding: '10px',
                        fontSize: '20px',
                        borderBottom: '1px solid #02133805',
                        boxShadow: '2px 2px 5px 2px rgba(0, 0, 0, 0.1)',
                        borderRadius: '10px',
                        background: 'linear-gradient(to right, #CBC3E3, #E6E6FA)',
                        position: 'relative',
                        overflow: 'hidden',
                        transition: 'background-color 0.3s ease',
                        marginLeft: '20px',
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
                       <path
    ref={pathRef2}
    d="M12 4l-1 3-3-1 1-3zm-8 5l3 1-1 3-3-1zm16 0l-3 1 1 3 3-1zm-2.09 7H6.09l-1.18 4.43 3.01.8.94-3.56h5.38l.94 3.56 3.01-.8-1.18-4.43z"
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
                        <h3>Advanced Analytics</h3>
                        <p>Data-driven insights are key to optimizing manufacturing processes and enhancing decision-making.
                            BITTWOBYTE provides advanced analytics solutions that leverage machine learning and predictive modeling to extract actionable insights from manufacturing data.
                            From predictive maintenance to quality control, our solutions help manufacturers identify opportunities for improvement and drive continuous innovation.</p>
                    </div>
                </div>

                {/* Third Box */}
                <div
                    className='Data-Exploration'
                    style={{
                        color: 'black',
                        height: 'auto',
                        width: '55vmin',
                        padding: '10px',
                        fontSize: '20px',
                        borderBottom: '1px solid #02133805',
                        boxShadow: '2px 2px 5px 2px rgba(0, 0, 0, 0.1)',
                        borderRadius: '10px',
                        background: 'linear-gradient(to right, #CBC3E3, #E6E6FA)',
                        position: 'relative',
                        overflow: 'hidden',
                        transition: 'background-color 0.3s ease',
                        marginLeft: '20px',
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
                        <path
    ref={pathRef3}
    d={isHovered3 ? "M20 8v8H4V8h16m2-2H2v12h20V6z" : "M20 8v8H4V8h16m2-2H2v12h20V6z"}
    strokeDasharray={isHovered3 ? "1000" : "0"}
    strokeDashoffset={isHovered3 ? "0" : "1000"}
/>
                    </svg>

                    <div style={{
                        textAlign: 'center',
                        position: 'relative',
                        top: isHovered3 ? '-14px' : '0',
                        transition: 'top 0.7s ease',
                    }}>
                        <h3>Smart Manufacturing</h3>
                        <p>The era of smart manufacturing is here, and BITTWOBYTE is at the forefront of this technological revolution.
                            We offer smart manufacturing solutions that leverage IoT, AI, and robotics to create interconnected, automated production environments.
                            From smart sensors to digital twins, our solutions enable manufacturers to optimize processes, reduce waste, and drive sustainable growth.</p>
                    </div>
                </div>

            </div>

            <div style={{ backgroundSize: '10px' }}>
                <div style={{ textAlign: 'center' }}>
                    <h1>Why Choose Us for Manufacturing?</h1>
                </div>

                <div className='Expertise' style={{ margin: '0px', textRendering: 'inherit', backgroundColor: 'white', transition: 'background-color 0.2s ease' }} onMouseOver={(e) => { e.currentTarget.style.backgroundColor = '#094409'; e.currentTarget.style.color = 'white'; }} onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'white'; e.currentTarget.style.color = 'black'; }}>
                    <div className='heading' style={{ fontSize: '6px', color: '#000000', border: '3px solid #f5f4f375', fontSize: 'larger', justifyContent: 'space-between', display: 'flex', flexWrap: 'wrap', columnGap: '12px' }}>
                        <div>
                            <h2>Expertise</h2>
                        </div>
                        <div style={{ width: '50%' }}>
                            <p>With years of experience in the manufacturing industry, we have deep domain expertise and a thorough understanding of manufacturers' IT needs.</p>
                        </div>
                    </div>
                </div>

                <div className='Expertise' style={{ margin: '0px', textRendering: 'inherit', backgroundColor: 'white', transition: 'background-color 0.2s ease' }} onMouseOver={(e) => { e.currentTarget.style.backgroundColor = '#094409'; }}>
                    <div className='heading' style={{ fontSize: '6px', color: '#000000', border: '3px solid #f5f4f375', fontSize: 'larger', justifyContent: 'space-between', display: 'flex', flexWrap: 'wrap', columnGap: '12px' }} onMouseOver={(e) => { e.currentTarget.style.backgroundColor = '#094409'; e.currentTarget.style.color = 'white'; }} onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'white'; e.currentTarget.style.color = 'black'; }}>
                        <h2>Innovation</h2>
                        <div style={{ width: '50%' }}>
                            <p>We leverage cutting-edge technologies and best practices to deliver innovative solutions that drive tangible results for our clients.</p>
                        </div>
                    </div>
                </div>

                <div className='Expertise' style={{ margin: '0px', textRendering: 'inherit', backgroundColor: 'white', transition: 'background-color 0.2s ease' }} onMouseOver={(e) => { e.currentTarget.style.backgroundColor = '#094409'; }}>
                    <div className='heading' style={{ fontSize: '6px', color: '#000000', border: '3px solid #f5f4f375', fontSize: 'larger', justifyContent: 'space-between', display: 'flex', flexWrap: 'wrap', columnGap: '12px' }} onMouseOver={(e) => { e.currentTarget.style.backgroundColor = '#094409'; e.currentTarget.style.color = 'white'; }} onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'white'; e.currentTarget.style.color = 'black'; }}>
                        <h2>Reliability</h2>
                        <div style={{ width: '50%' }}>
                            <p>Our commitment to quality, reliability, and customer satisfaction sets us apart as a trusted partner for manufacturers worldwide.</p>
                        </div>
                    </div>
                </div>

                <div className='Expertise' style={{ margin: '0px', textRendering: 'inherit', backgroundColor: 'white', transition: 'background-color 0.2s ease' }} onMouseOver={(e) => { e.currentTarget.style.backgroundColor = '#094409'; }}>
                    <div className='heading' style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', columnGap: '12px', fontSize: '6px', color: '#000000', border: '3px solid #f5f4f375', fontSize: 'larger' }} onMouseOver={(e) => { e.currentTarget.style.backgroundColor = '#094409'; e.currentTarget.style.color = 'white'; }} onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'white'; e.currentTarget.style.color = 'black'; }}>
                        <h2>Scalability</h2>
                        <div style={{ width: '50%' }}>
                            <p>Whether you're a small boutique or a multinational corporation, our solutions are scalable and adaptable to meet your evolving needs.</p>
                        </div>
                    </div>
                </div>

                <div style={{ marginTop: '30px', backgroundColor: '#012353', padding: '20px 10px', fontSize: 'calc(10px + 2vmin)', textAlign: 'center', color: 'white' }}>
                    <h1>Transform Your Manufacturing IT with BITTWOBYTE</h1>
                    <p>In today's fast-paced manufacturing environment, staying ahead requires agile, robust IT capabilities. Partner with BITTWOBYTE and unlock the full potential of your manufacturing business. Contact us today to learn more about our solutions and how we can help you thrive in the digital age.</p>
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
export default Manufacturing;
