import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Btb from './Image/btb2.png';

const Navbar = () => {
  const [navbarColor, setNavbarColor] = useState('rgba(255, 255, 255, 0)');
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [showCompanyDropdown, setShowCompanyDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const opacity = Math.min(scrollPosition / 100, 0.5);
      setNavbarColor(`rgba(255, 255, 255, ${opacity})`);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleServicesHover = () => {
    setShowServicesDropdown(true);
  };

  const handleServicesLeave = () => {
    setShowServicesDropdown(false);
  };

  const handleCompanyHover = () => {
    setShowCompanyDropdown(true);
  };

  const handleCompanyLeave = () => {
    setShowCompanyDropdown(false);
  };

  return (
    <>
      <div style={{ position: 'fixed', top: '0', width: '100%', zIndex: '10', backgroundColor: navbarColor, transition: 'background-color 0.3s ease' }}>
        <nav className="navbar navbar-expand-lg navbar-dark py-10" style={{ backgroundColor: 'transparent' }}>
          <div className="container-fluid">
            <Link className="navbar-brand" to="/Home">
              <img src={Btb} height="56" width="259" alt=" " />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li
                  className="nav-item dropdown"
                  onMouseEnter={handleServicesHover}
                  onMouseLeave={handleServicesLeave}
                  style={{ position: 'relative', marginRight: '20px', marginLeft: 'auto' }}
                >
                  <Link
                    className={`nav-link ${showServicesDropdown ? 'active' : ''}`}
                    to="/services"
                    style={{ position: 'relative', zIndex: 1, color: '#000000', marginLeft: '20px' }}
                  >
                    Services
                  </Link>
                  <ul className={`dropdown-menu ${showServicesDropdown ? 'show' : ''}`} style={{ position: 'absolute', left: 0, top: '100%', zIndex: 11 }}>
                    {/* Replace the following with your specific dropdown items for services */}
                    <li>
                      <Link className="dropdown-item" to="/Data Analytics">
                        Data Analytics
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/Quality Engineering">
                        Quality Engineering
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/Cloud">
                        Cloud
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item" style={{ position: 'relative', marginRight: '20px', marginLeft: 'auto' }}>
                  <Link
                    className="nav-link"
                    to="/technology"
                    style={{ position: 'relative', zIndex: 1, color: '#000000', marginLeft: '20px' }}
                  >
                    Technology
                  </Link>
                </li>
                <li
                  className="nav-item dropdown"
                  onMouseEnter={handleCompanyHover}
                  onMouseLeave={handleCompanyLeave}
                  style={{ position: 'relative', marginRight: '20px', marginLeft: 'auto' }}
                >
                  <Link
                    className={`nav-link ${showCompanyDropdown ? 'active' : ''}`}
                    to="/company"
                    style={{ position: 'relative', zIndex: 1, color: '#000000', marginLeft: '20px' }}
                  >
                    Company
                  </Link>
                  <ul className={`dropdown-menu ${showCompanyDropdown ? 'show' : ''}`} style={{ position: 'absolute', left: 0, top: '100%', zIndex: 11 }}>
                    {/* Replace the following with your specific dropdown items for company */}
                    <li>
                      <Link className="dropdown-item" to="/about">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/team">
                        Team
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/Newsroom">
                        Newsroom
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/Careers">
                        Careers
                      </Link>
                    </li>
                  </ul>
                </li>
                <button className="btn btn-outline-success">
                  <Link to="/Contact" style={{ textDecoration: 'none', color: '#000000' }}>Contact</Link>
                </button>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div style={{ paddingTop: '70px' }}>
        {/* Your content goes here */}
      </div>
    </>
  );
};

export default Navbar;
