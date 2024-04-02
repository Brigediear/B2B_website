import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const linkStyle = {
    textDecoration: 'none',
    color: '#000', // Set the desired color for the links
  };

  return (
    <footer className="footer bg-white" style={{ borderTop: '5px solid #288939' }}>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            {/* Logo Section */}
            <div style={{ flex: '0 0 0%', marginBottom: '20px', alignItems: 'flex-start', justifyContent: 'flex-end' }} className="footer__section">
              <img src="/imagebtb.png" alt="Company Logo" style={{ width: '100px', height: 'auto', marginLeft: '10px' }} />
              <p style={{ marginTop: '10px', color: '#00000' }}>BitTwoBye is a technology and professional services company providing analytics, operations, and product engineering services</p>
            </div>
          </div>
          <div className="col-md-3" style={{ textAlign: 'right', paddingTop: '10px', marginTop: '10px' }}>
            <h5 style={{ fontSize: '1.2rem', marginBottom: '20px' }}>Company</h5>
            <ul className="list-unstyled footer-links">
              <li><a href="/about" style={linkStyle}>About Us</a></li>
              <li><a href="/tools-technologies" style={linkStyle}>Tools & Technologies</a></li>
              <li><a href="/services" style={linkStyle}>Services</a></li>
              <li><a href="/careers" style={linkStyle}>Careers</a></li>
            </ul>
          </div>
          <div className="col-md-3" style={{ textAlign: 'right', paddingTop: '10px', marginTop: '10px' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '20px' }}>Solutions</h3>
            <ul className="list-unstyled footer-links" style={{ listStyle: 'none', padding: '0' }}>
              <li><a href="/" style={linkStyle}>Data Analytics</a></li>
              <li><a href="/" style={linkStyle}>Product Engineering</a></li>
              <li><a href="/" style={linkStyle}>Data Lakes</a></li>
              <li><a href="/" style={linkStyle}>Cloud Transformation</a></li>
            </ul>
          </div>
          <div className="col-md-3" style={{ textAlign: 'right', paddingTop: '10px', marginTop: '10px' }}>
            <h5 style={{ fontSize: '1.2rem', marginBottom: '20px' }}>Follow Us</h5>
            <ul className="list-inline footer-links">
              <li className="list-inline-item">
                <a href="https://www.linkedin.com/company/bittwobyte-technology-private-limited/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedinIn} style={{ fontSize: '24px', color: '#0077b5' }} />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://twitter.com/your-twitter-username" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faTwitter} style={{ fontSize: '24px', color: '#1DA1F2', marginRight: '10px' }} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr style={{ borderColor: '#012353' }} />
        <div className="row">
          <div className="col-md-6">
            <p>BitTwoByte Technologies Pvt.Ltd.&copy; 2024. All rights reserved.</p>
          </div>
          <div className="col-md-6 text-end">
            <ul className="list-inline footer-links">
              <li className="list-inline-item">
                <a href="#" style={linkStyle}>Privacy Policy</a>
              </li>
              <li className="list-inline-item">
                <a href="#" style={linkStyle}>Terms of Service</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
