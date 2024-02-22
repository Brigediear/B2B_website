import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <>
      {/* Main Footer */}
      <footer
        className="footer"
        style={{
          backgroundColor: '#ffffff',
          color: '#000000',
          padding: '20px 0',
          borderTop: '5px solid #288939',
        }}
      >
        <div
          className="curved-square"
          style={{
            // Add any additional styles for the curved square background
          }}
        ></div>
        {/* Curved square background */}
        <div
          className="footer__container"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
          }}
        >
          <div
            className="footer__section"
            style={{
              flex: '0 0 30%',
              marginLeft: '20px',
            }}
          >
            <h3 style={{ fontSize: '1.2rem' }}>Quick Links</h3>
            <ul style={{ listStyle: 'none', padding: '0' }}>
              <li style={{ marginBottom: '10px' }}><a href="/">Home</a></li>
              <li style={{ marginBottom: '10px' }}><a href="/about">About Us</a></li>
              <li style={{ marginBottom: '10px' }}><a href="/tools-technologies">Tools & Technologies</a></li>
              <li style={{ marginBottom: '10px' }}><a href="/services">Services</a></li>
            </ul>
          </div>
          <div
            className="footer__section"
            style={{
              flex: '0 0 30%',
            }}
          >
            <h3 style={{ fontSize: '1.2rem' }}>Follow Us</h3>
            <div
              className="social-icons"
              style={{
                display: 'flex',
              }}
            >
              <a href="https://www.facebook.com/your-facebook-username" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} style={{ fontSize: '24px', color: '#316FF6', marginRight: '10px' }} />
              </a>
              <a href="https://twitter.com/your-twitter-username" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} style={{ fontSize: '24px', color: '#1DA1F2', marginRight: '10px' }} />
              </a>
              <a href="https://www.linkedin.com/company/bittwobyte-technology-private-limited/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: '24px', color: '#0077b5', marginRight: '10px' }} />
              </a>
              <a href="https://www.instagram.com/your-instagram-username" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} style={{ fontSize: '24px', color: '#833ab4' }} />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Secondary Footer */}
      <footer
        className="secondary-footer"
        style={{
          backgroundColor: '#012353',
          color: '#ffffff',
          padding: '5px',
          textAlign: 'center',
        }}
      >
        <div
          className="footer__bottom"
          style={{
            fontWeight: 'bold',
          }}
        >
          <p>BitTwoByte Technologies Pvt.Ltd.&copy; 2024. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
