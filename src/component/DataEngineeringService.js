import React from 'react';
import Footer from './Homefooter';

const DataEngineering = () => {
  return (
    <div className='containerStyle' style={{ alignItems: 'center', backgroundColor: 'white' }}>
    <div style={{ backgroundImage: "url('dataengineering.png')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '50vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
    <div style={{ color: 'white', fontSize: 'calc(12px + 3vmin)', marginRight: '1100px', textAlign: 'left', marginLeft: 'auto', }}>
  <h1>Data Engineering</h1>
</div>

      </div>

      <div style={{ marginTop: '30px', padding: '0 10px', fontSize: 'calc(5px + 2vmin)',fontStyle:'forum '  }}>
        <p>
        Unleash the potential of your business with Bittwobyte Technologies Pvt. Ltd.'s innovative data engineering solutions.
         Our comprehensive suite of data engineering tools and services is designed to streamline data processes, optimize data pipelines, and maximize the value of your data assets.
          From data ingestion and storage to data transformation and integration, our expert team specializes in building robust data architectures tailored to your specific needs.
        </p>
      </div>

      <div style={{ backgroundColor: 'white', marginTop: '30px', padding: '0 10px', fontSize: 'calc(10px + 1vmin)', textAlign: 'center' }}>
        <h1>Our Data Engineering Solutions</h1>
      </div>

   
      
     
<div style={{ flexWrap: 'wrap', display: 'flex', justifyContent: 'center', columnGap: '1px',marginTop:'30px'  ,backgroundColor:'#F2F3F4 ',}}>
<div style={{  marginTop: '10px', padding: '20px', height: '80vh', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', textAlign:'center', }}>
    
      
<div 
className='Data-Exploration'
style={{ 
color: 'black', 
height: '68vh', 
width: '48vmin',
padding: '40px', 
fontSize:'20px',
borderBottom: '1px solid #02133805', // Set bottom border
backgroundColor: 'white',  
}}
onMouseOver={(e) => { e.currentTarget.style.borderBottom = '2px solid #43e794'; }}
onMouseOut={(e) => { e.currentTarget.style.borderBottom = '2px solid #02133805'; }}>
<div style={{
    backgroundImage: "url('predictive.jpg')",
    backgroundSize: '50px',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '20vh',
    border: 'red',
    borderRadius: '500px',
    
    }}>
</div>
<div style={{fontSize: 'calc(10px + 1vmin)'}}>
    <h3>Data Ingestion</h3>
    <p>Seamlessly collect data from various sources, including databases, APIs, and streaming platforms, to fuel your analytics initiatives.</p>
</div>

</div>

</div>
<div style={{ marginTop: '10px', padding: '20px', height: '90vh', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', textAlign:'center', }}>
    
<div 
className='Data-Exploration'
style={{ 
color: 'black', 
height: '68vh', 
width: '48vmin',
padding: '40px', 
fontSize:'20px',
borderBottom: '1px solid #02133805', // Set bottom border
backgroundColor: 'white',  
}}
onMouseOver={(e) => { e.currentTarget.style.borderBottom = '2px solid #43e794'; }}
onMouseOut={(e) => { e.currentTarget.style.borderBottom = '2px solid #02133805'; }}>
<div style={{  backgroundImage: "url('datavisual.jpg')", 
backgroundSize: '70px',
backgroundPosition: 'center',
backgroundRepeat: 'no-repeat',
height: '20vh',
border:'red',
flexDirection: 'column'


}}>

</div>
<div style={{fontSize: 'calc(10px + 1vmin)',}}>
<h3>Data Storage </h3>

<p>Design and implement scalable and reliable data storage solutions, such as data lakes and data warehouses, to accommodate growing volumes of data.
</p>
</div>
</div> 
</div>


<div style={{ marginTop: '10px', padding: '20px', height: '90vh', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', textAlign:'center',  }}>
<div 
className='Data-Exploration'
style={{ 
color: 'black', 
height: '68vh', 
width: '48vmin',
padding: '40px', 
fontSize:'20px',
borderBottom: '1px solid #02133805', // Set bottom border
backgroundColor: 'white',  
}}

onMouseOver={(e) => { e.currentTarget.style.borderBottom = '2px solid #43e794'; }}
onMouseOut={(e) => { e.currentTarget.style.borderBottom = '2px solid #02133805'; }}>
<div style={{  backgroundImage: "url('reporting.jpg')", 
backgroundSize: '70px',
backgroundPosition: 'center',
backgroundRepeat: 'no-repeat',
height: '20vh',
border:'red',
flexDirection: 'column',

borderRadius:'0px'}}></div>
<div style={{fontSize: 'calc(10px + 1vmin)',}}>
<h3>Data Transformation </h3>
<p>
Cleanse, enrich, and transform raw data into actionable insights through advanced data processing techniques and ETL (Extract, Transform, Load) pipelines

</p>

</div>        
</div>                


     
</div>

<div style={{   marginTop: '10px', padding: '20px', height: '80vh', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', textAlign:'center', }}>
    
      
<div 
className='Data-Exploration'
style={{ 
color: 'black', 
height: '68vh', 
width: '48vmin',
padding: '40px', 
fontSize:'20px',
borderBottom: '1px solid #02133805', // Set bottom border
backgroundColor: 'white',  
}}
onMouseOver={(e) => { e.currentTarget.style.borderBottom = '2px solid #43e794'; }}
onMouseOut={(e) => { e.currentTarget.style.borderBottom = '2px solid #02133805'; }}>
<div style={{  backgroundImage: "url('real.jpg')", 
backgroundSize: '70px',
backgroundPosition: 'center',
backgroundRepeat: 'no-repeat',
height: '20vh',
border:'red',
flexDirection: 'column'

}}></div>
<div style={{fontSize: 'calc(10px + 1vmin)',}}>
<h3>Data Integration</h3>

<p> 
Integrate disparate data sources and systems to create a unified view of your data landscape, enabling cross-functional analysis and reporting.
</p>
</div>
</div>

</div>

</div>

<div style={{ backgroundSize: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  <div style={{ textAlign: 'center' }}>
    <h1> Why Choose Us for Data Engineering?</h1>
  </div>
  <div className='Expertise' style={{ margin: '0px', textRendering: 'inherit', backgroundColor: 'white', transition: 'background-color 0.2s ease', rowGap: '50px', padding: '0 20px' }}>

    {/* Greater Insights */}
            <div className='heading' style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', justifyContent: 'center', columnGap: '12px', fontSize: '15px', color: '#000000', }}  onMouseOver={(e) => {e.currentTarget.style.backgroundColor = '#012353';e.currentTarget.style.color = 'white';}}onMouseOut={(e) => {e.currentTarget.style.backgroundColor = 'white';e.currentTarget.style.color = 'black';}}>  
      <h5>Expertise</h5>
      <span className="our">Our team of experienced data engineers possesses deep expertise in designing and implementing cutting-edge data engineering solutions.</span>
    </div>
    {/* Enhanced Efficiency */}
    <div className='heading' style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', justifyContent: 'center', columnGap: '12px', fontSize: '15px', color: '#000000', }}  onMouseOver={(e) => {e.currentTarget.style.backgroundColor = '#012353';e.currentTarget.style.color = 'white';}}onMouseOut={(e) => {e.currentTarget.style.backgroundColor = 'white';e.currentTarget.style.color = 'black';}}>  
      <h5>Scalability</h5>
      <span className="our">We prioritize scalability and flexibility in our data architectures, ensuring they can accommodate your evolving business needs and data growth.</span>
    </div>
    {/* Agile Decision-Making */}
    <div className='heading' style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', justifyContent: 'center', columnGap: '12px', fontSize: '15px', color: '#000000', }}  onMouseOver={(e) => {e.currentTarget.style.backgroundColor = '#012353';e.currentTarget.style.color = 'white';}}onMouseOut={(e) => {e.currentTarget.style.backgroundColor = 'white';e.currentTarget.style.color = 'black';}}>  
      <h5>Reliability</h5>
      <span className="our">We build robust data pipelines and architectures that prioritize data integrity, reliability, and security, providing peace of mind for your data-driven initiatives.</span>
    </div>
    {/* Seamless Integration */}
    <div className='heading' style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', justifyContent: 'center', columnGap: '12px',  fontSize: '15px', color: '#000000',}}  onMouseOver={(e) => {e.currentTarget.style.backgroundColor = '#012353';e.currentTarget.style.color = 'white';}}onMouseOut={(e) => {e.currentTarget.style.backgroundColor = 'white';e.currentTarget.style.color = 'black';}}>  
      <h5>Seamless Integration</h5>
      <span>We stay abreast of the latest trends and technologies in data engineering, allowing us to deliver innovative solutions that drive business value.</span>
    </div>
  </div>
</div>

          
          <div style={{ marginTop: '30px', backgroundColor: '#73C6B6', padding: '20px 10px', fontSize: 'calc(10px + 2vmin)', textAlign: 'center', color: 'white' }}>
            <p>Harness the power of data engineering with Bittwobyte Technologies Pvt. Ltd.'s comprehensive solutions.
               Whether you're looking to modernize your data infrastructure, optimize data workflows, or unlock the full potential of your data assets, our expert team is here to help.
               Contact us today to learn more about how our data engineering solutions can accelerate your journey to data-driven success.</p>
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
                  fontStyle:'bold'
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

export default DataEngineering;