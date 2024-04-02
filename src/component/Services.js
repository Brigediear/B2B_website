import React, { useState } from 'react';

const Services = () => {
  const [hoveredDiv, setHoveredDiv] = useState(null);

  const handleMouseOver = (index) => {
    setHoveredDiv(index);
  };

  const handleMouseOut = () => {
    setHoveredDiv(null);
  };

  return (
  <div style={{ fontSize: 'calc(1px + 2vmin)' }}>
    <div className='containerStyle' style={{ alignItems: 'center', backgroundColor: 'white' }}>
      
      <div>
        <div
          style={{
            backgroundImage: "url('pic.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: '40vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div style={{ color: 'white', fontSize: 'calc(8px + 2vmin)', marginRight: '5vw' }}>
            <h1>Our services</h1>
          </div>
        </div>
        <div style={{fontSize:'19px'}}
        ><p>
        "At Bittwobyte Technologies Pvt. Ltd., our specialized services encompass data engineering, supply chain management (SCM), 
        cloud computing, and data analytics. With a focus on leveraging the latest technologies 
        and industry best practices, we provide tailored solutions to optimize your data infrastructure, streamline your supply chain operations, harness the
         power of cloud platforms, and unlock actionable insights from your data.<br></br> Partner with us to harness the full potential of your
          data and technology investments, driving sustainable growth and innovation for your organization."
        </p>

        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '50vh', backgroundColor: 'white', marginTop: '17vh', flexDirection: 'column' }}>
          <div style={{ display: 'flex', gap: '5vw', textAlign: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
           <div>
           <a href="URL" style={{ textDecoration: "none" }}>
            <div className='Data-Exploration' style={{ marginBottom: '2vh', color: 'black', width: '30vw', padding: '2vw', borderRadius: '30px', backgroundColor: hoveredDiv === 1 ? '#ABEBC6' : 'lightgray', transition: 'background-color 0.3s ease', cursor: 'pointer' }} onMouseOver={() => handleMouseOver(1)} onMouseOut={handleMouseOut}>
              <div className="icon larger-icon" style={{ fontSize: '3em' }}>&#128161;</div>
              <h2>Data Analytics</h2>
              {hoveredDiv === 1 &&               <p>Unlock your data's potential with our advanced analytics solutions at BitTwoByte. Gain valuable insights to optimize operations and make informed decisions. Let our expert team guide you through the world of data analytics.</p>
}
           </div> 
          </a> 
           </div>
            <div>
            <a href="URL" style={{ textDecoration: "none" }}>
            <div className='Data-Exploration' style={{ marginBottom: '2vh', color: 'black', width: '30vw', padding: '2vw', borderRadius: '30px', backgroundColor: hoveredDiv === 2 ? '#ABEBC6' : 'lightgray', transition: 'background-color 0.3s ease', cursor: 'pointer' }} onMouseOver={() => handleMouseOver(2)} onMouseOut={handleMouseOut}>
              <div className="icon larger-icon" style={{ fontSize: '3em' }}>&#128280;</div>
              <h2>SCM</h2>
              {hoveredDiv === 2 &&               <p>Transform your supply chain with our SCM solutions at BitTwoByte. Streamline operations, improve visibility, and enhance collaboration across your supply chain network.</p>
}
            </div>
            </a>
            </div>
            <div>
            <a href="URL" style={{ textDecoration: "none" }}>
            <div className='Data-Exploration' style={{ marginBottom: '2vh', color: 'black', width: '30vw', padding: '2vw',borderRadius: '30px', backgroundColor: hoveredDiv === 3 ? '#ABEBC6' : 'lightgray', transition: 'background-color 0.3s ease', cursor: 'pointer' }} onMouseOver={() => handleMouseOver(3)} onMouseOut={handleMouseOut}>
              <div className="icon larger-icon" style={{ fontSize: '3em' }}>&#9729;</div>
              <h2>Cloud Engineering</h2>
              {hoveredDiv === 3 && <p>Elevate your business with our Cloud solutions at BitTwoByte. Harness the flexibility and scalability of cloud computing to optimize resources and drive innovation</p>
}</div> </a>
            </div>
            <a href="URL" style={{ textDecoration: "none" }}>
            <div className='Data-Exploration' style={{ marginBottom: '2vh', color: 'black', width: '30vw', padding: '2vw',  borderRadius: '30px', backgroundColor: hoveredDiv === 4 ? '#ABEBC6' : 'lightgray', transition: 'background-color 0.3s ease', cursor: 'pointer' }} onMouseOver={() => handleMouseOver(4)} onMouseOut={handleMouseOut}>
              <div className="icon larger-icon" style={{ fontSize: '3em' }}>&#127760;</div>
              <h2>Data Engineering</h2>
              {hoveredDiv === 4 && <p>Maximize your data's efficiency with our Data Engineering solutions at BitTwoByte. Let us streamline your data processes and ensure seamless integration for enhanced performance</p>
}
            </div></a>
          </div>
          
        </div>
      </div>
    </div>
    </div>
  );
};

export default Services;
