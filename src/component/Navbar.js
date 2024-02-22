import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import Btb from './Image/btb2.png';

const Navbar = () => {
  const [navbarColor, setNavbarColor] = useState('rgba(255, 255, 255, 0)');
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [showCompanyDropdown, setShowCompanyDropdown] = useState(false);
  const [showSCMDropdown, setShowSCMDropdown] = useState(false);
  const [showIndustriesDropdown, setShowIndustriesDropdown] = useState(false);

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
    setShowCompanyDropdown(false);
    setShowSCMDropdown(false);
    setShowIndustriesDropdown(false);
  };

  const handleServicesLeave = () => {
    setShowServicesDropdown(false);
  };

  const handleCompanyHover = () => {
    setShowCompanyDropdown(true);
    setShowServicesDropdown(false);
    setShowSCMDropdown(false);
    setShowIndustriesDropdown(false);
  };

  const handleCompanyLeave = () => {
    setShowCompanyDropdown(false);
  };

  const handleSCMHover = () => {
    setShowSCMDropdown(true);
    setShowServicesDropdown(false);
    setShowCompanyDropdown(false);
    setShowIndustriesDropdown(false);
  };

  const handleSCMLeave = () => {
    setShowSCMDropdown(false);
  };

  const handleIndustriesHover = () => {
    setShowIndustriesDropdown(true);
    setShowServicesDropdown(false);
    setShowCompanyDropdown(false);
    setShowSCMDropdown(false);
  };

  const handleIndustriesLeave = () => {
    setShowIndustriesDropdown(false);
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
                  <Dropdown
                    show={showServicesDropdown}
                    onMouseOver={() => setShowServicesDropdown(true)}
                    onMouseLeave={() => setShowServicesDropdown(false)}
                  >
                    <Dropdown.Toggle
                      as={Link}
                      to="/services"
                      className={`nav-link ${showServicesDropdown ? 'active' : ''}`}
                      style={{
                        position: 'relative',
                        zIndex: 1,
                        color: '#000000',
                        marginLeft: '20px',
                        transition: 'color 0.3s ease',
                      }}
                    >
                      Services
                    </Dropdown.Toggle>
                    <Dropdown.Menu style={{ position: 'absolute', zIndex: 11 }}>
                      <Dropdown.Item as={Link} to="/Data Analytics">
                        Data Analytics
                      </Dropdown.Item>
                      <Dropdown.Item as={Link} to="/Quality Engineering">
                        Quality Engineering
                      </Dropdown.Item>
                      <Dropdown.Item
                        as={Link}
                        to="/SCM"
                        onMouseEnter={handleSCMHover}
                        onMouseLeave={handleSCMLeave}
                      >
                        SCM 
                        {showSCMDropdown && (
                          <div
                            className="dropdown-menu show"
                            style={{
                              position: 'absolute',
                              left: '100%',
                              top: '0',
                              zIndex: 11,
                              minWidth: '200px',
                            }}
                          >
                            <Dropdown.Item as={Link} to="/Management Consulting">
                              Management Consulting
                            </Dropdown.Item>
                            <Dropdown.Item as={Link} to="/Implementation Services">
                              Implementation Services
                            </Dropdown.Item>
                            <Dropdown.Item as={Link} to="/Upgrade and Migration Services">
                              Upgrade and Migration Services
                            </Dropdown.Item>
                            <Dropdown.Item as={Link} to="/Managed Services">
                              Managed Services
                            </Dropdown.Item>
                            <Dropdown.Item as={Link} to="/Staffing/IS/IT">
                              Staffing/IS/IT
                            </Dropdown.Item>
                          </div>
                        )}
                      </Dropdown.Item>
                      <Dropdown.Item as={Link} to="/Cloud">
                        Cloud
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
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
                  onMouseEnter={handleIndustriesHover}
                  onMouseLeave={handleIndustriesLeave}
                  style={{ position: 'relative', marginRight: '20px', marginLeft: 'auto' }}
                >
                  <Link
                    className={`nav-link ${showIndustriesDropdown ? 'active' : ''}`}
                    to="/INDUSTRIES"
                    style={{ position: 'relative', zIndex: 1, color: '#000000', marginLeft: '20px' }}
                  >
                    Industries 
                  </Link>
                  <ul className={`dropdown-menu ${showIndustriesDropdown ? 'show' : ''}`} style={{ position: 'absolute', left: 0, top: '100%', zIndex: 11 }}>
                    <li>
                      <Link className="dropdown-item" to="/Banking">
                        Banking
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/Healthcare">
                        Healthcare
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/Retail">
                        Retail
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/Manufacturing">
                        Manufacturing
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/Media-Entertainment">
                        Media & Entertainment
                      </Link>
                    </li>
                  </ul>
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
