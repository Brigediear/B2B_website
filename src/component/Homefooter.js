import React from 'react';
import Btb from './Image/imagebtb.png';
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
            className="footer__logo"
            style={{
              flex: '0 0 100%',
              marginBottom: '20px',
            }}
          >
            {/* Replace "logo.png" with the path to your logo image */}
            <img src={Btb} height="56" width="56" alt=" " />

          </div>
          <div
            className="footer__section"
            style={{
              flex: '0 0 30%',
            }}
          >
            <h3 style={{ fontSize: '1.2rem' }}>BitTwoByte Technologies Pvt. Ltd.</h3>
            <p>10/420, Ward No. 10</p>
            <p>Anantpur, Rewa(M.P.), India -486001</p>
            <p>Email: info@bittwobyte.com</p>
            <p>Phone: TRIN-TRIN</p>
          </div>
          <div
            className="footer__section"
            style={{
              flex: '0 0 30%',
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
              <a href="#"><i className="fa fa-facebook" style={{ color: '#fff', marginRight: '10px' }}></i></a>
              <a href="#"><i className="fa fa-twitter" style={{ color: '#fff', marginRight: '10px' }}></i></a>
              <a href="#"><i className="fa fa-linkedin" style={{ color: '#fff', marginRight: '10px' }}></i></a>
              <a href="#"><i className="fa fa-instagram" style={{ color: '#fff' }}></i></a>
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
          padding: '10px 0',
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
