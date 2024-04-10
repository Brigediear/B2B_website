import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import Btb from './Image/btb2.png';

const Navbar = () => {
  const [navbarColor, setNavbarColor] = useState('rgba(255, 255, 255, 0)');
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [showCompanyDropdown, setShowCompanyDropdown] = useState(false);
  const [showSCMDropdown, setShowSCMDropdown] = useState(false);
  const [showTechnologyDropdown, setShowTechnologyDropdown] = useState(false);
  const [showIndustriesDropdown, setShowIndustriesDropdown] = useState(false);
  const [hoveredNavItem, setHoveredNavItem] = useState(null);
  const [hoveredCompanyItem, setHoveredCompanyItem] = useState(null);
  const [hoveredServicesItem, setHoveredServicesItem] = useState(null);
  const [hoveredIndustriesItem, setHoveredIndustriesItem] = useState(null);
  const [dropdownItemColor, setDropdownItemColor] = useState('#000000');

  // ... (other state variables)
    useEffect(() => {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
  
        // Adjust the scroll threshold as needed
        const threshold = 100;
  
        // Calculate the opacity based on the scroll position
        const opacity = Math.min(scrollPosition / threshold, 1);
        setNavbarColor(`rgba(255, 255, 255, ${opacity})`);
      };
  
      // Set the initial color
      setNavbarColor('rgba(255, 255, 255, 0)');
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
  const handleServicesHover = () => {
    setHoveredNavItem('services');
    setShowServicesDropdown(true);
    setShowCompanyDropdown(false);
    setShowSCMDropdown(false);
    setShowTechnologyDropdown(false);
    setShowIndustriesDropdown(false);
  };

  const handleServicesLeave = () => {
    setHoveredNavItem(null);
    setShowServicesDropdown(false);
    setHoveredServicesItem(null);
  };

  const handleCompanyHover = () => {
    setHoveredNavItem('company');
    setShowCompanyDropdown(true);
    setShowServicesDropdown(false);
    setShowSCMDropdown(false);
    setShowTechnologyDropdown(false);
    setShowIndustriesDropdown(false);
  };

  const handleCompanyLeave = () => {
    setHoveredNavItem(null);
    setShowCompanyDropdown(false);
    setHoveredCompanyItem(null);
  };

  const handleSCMHover = () => {
    setHoveredNavItem('SCM');
    setShowSCMDropdown(true);
    setShowServicesDropdown(false);
    setShowCompanyDropdown(false);
    setShowTechnologyDropdown(false);
  };

  const handleSCMLeave = () => {
    setHoveredNavItem(null);
    setShowSCMDropdown(false);
  };

  const handleTechnologyHover = () => {
    setHoveredNavItem('technology');
    setShowServicesDropdown(false);
    setShowCompanyDropdown(false);
    setShowSCMDropdown(false);
    setShowTechnologyDropdown(true);
    setShowIndustriesDropdown(false);
  };

  const handleTechnologyLeave = () => {
    setHoveredNavItem(null);
    setShowTechnologyDropdown(false);
  };

  const handleIndustriesHover = () => {
    setHoveredNavItem('Industries');
    setShowServicesDropdown(false);
    setShowCompanyDropdown(false);
    setShowSCMDropdown(false);
    setShowTechnologyDropdown(false);
    setShowIndustriesDropdown(true);
  };

  const handleIndustriesLeave = () => {
    setHoveredNavItem(null);
    setShowIndustriesDropdown(false);
    setHoveredIndustriesItem(null);
  };

  const handleDropdownItemHover = () => {
    setDropdownItemColor('#00b300');
  };

  const handleDropdownItemLeave = () => {
    setDropdownItemColor('#000000');
  };

  const handleCompanyItemHover = (itemName) => {
    setHoveredCompanyItem(itemName);
  };

  const handleCompanyItemLeave = () => {
    setHoveredCompanyItem(null);
  };

  const handleServicesItemHover = (itemName) => {
    setHoveredServicesItem(itemName);
  };

  const handleServicesItemLeave = () => {
    setHoveredServicesItem(null);
  };

  const handleIndustriesItemHover = (itemName) => {
    setHoveredIndustriesItem(itemName);
  };

  const handleIndustriesItemLeave = () => {
    setHoveredIndustriesItem(null);
  };

  const dropdownItemStyle = {
   //  outline: 'none',
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
      style={{ backgroundColor: '#fff', border: 'none' }}
    >
      <span className="navbar-toggler-icon" style={{ color: '#000' }}>
        <svg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
          <path stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" d="M4 7h22M4 15h22M4 23h22"></path>
        </svg>
      </span>
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
                      className={`nav-link ${showServicesDropdown || hoveredNavItem === 'services' ? 'active' : ''}`}
                      style={{
                        position: 'relative',
                        zIndex: 1,
                        color: (hoveredNavItem === 'services' || showServicesDropdown) ? '#00b300' : '#000000',
                        marginLeft: '20px',
                        transition: 'color 1s ease',
                      }}
                    >
                      Services
                    </Dropdown.Toggle>
                    <Dropdown.Menu style={{ position: 'absolute', zIndex: 11 }}>
                      <Dropdown.Item
                        as={Link}
                        to="/Data Analytics"
                        onMouseEnter={() => handleServicesItemHover('Data Analytics')}
                        onMouseLeave={handleServicesItemLeave}
                        style={{ color: hoveredServicesItem === 'Data Analytics' ? '#00b300' : dropdownItemColor , ...dropdownItemStyle}}
                      >
                        Data Analytics
                      </Dropdown.Item>
                      <Dropdown.Item
                        as={Link}
                        to="/Data Engineering"
                        onMouseEnter={() => handleServicesItemHover('Data Engineering')}
                        onMouseLeave={handleServicesItemLeave}
                        style={{ color: hoveredServicesItem === 'Data Engineering' ? '#00b300' : dropdownItemColor, ...dropdownItemStyle }}
                      >
                        Data Engineering
                      </Dropdown.Item>
                      <Dropdown.Item
                        as={Link}
                        to="/SCM  »"
                        onMouseEnter={handleSCMHover}
                        onMouseLeave={handleSCMLeave}
                        style={{ color: hoveredNavItem === 'SCM' ? '#00b300' : dropdownItemColor , ...dropdownItemStyle}}
                      >
                        SCM  »
                        {showSCMDropdown && (
                          <div
                            className="dropdown-menu show"
                            style={{
                              position: 'absolute',
                              left: '100%',
                              top: '0',
                              zIndex: 11,
                              color: hoveredNavItem === 'SCM' ? '#00b300' : dropdownItemColor,
                              minWidth: '200px',
                            }}
                          >
                            <Dropdown.Item
                              as={Link}
                              to="/Management Consulting"
                              onMouseEnter={() => handleServicesItemHover('Management Consulting')}
                              onMouseLeave={handleServicesItemLeave}
                              style={{ color: hoveredServicesItem === 'Management Consulting' ? '#00b300' : dropdownItemColor, ...dropdownItemStyle }}
                            >
                              Management Consulting
                            </Dropdown.Item>
                            <Dropdown.Item
                              as={Link}
                              to="/Implementation Services"
                              onMouseEnter={() => handleServicesItemHover('Implementation Services')}
                              onMouseLeave={handleServicesItemLeave}
                              style={{ color: hoveredServicesItem === 'Implementation Services' ? '#00b300' : dropdownItemColor, ...dropdownItemStyle }}
                            >
                              Implementation Services
                            </Dropdown.Item>
                            <Dropdown.Item
                              as={Link}
                              to="/Upgrade and Migration Services"
                              onMouseEnter={() => handleServicesItemHover('Upgrade and Migration Services')}
                              onMouseLeave={handleServicesItemLeave}
                              style={{ color: hoveredServicesItem === 'Upgrade and Migration Services' ? '#00b300' : dropdownItemColor, ...dropdownItemStyle }}
                            >
                              Upgrade and Migration Services
                            </Dropdown.Item>
                            <Dropdown.Item
                              as={Link}
                              to="/Managed Services"
                              onMouseEnter={() => handleServicesItemHover('Managed Services')}
                              onMouseLeave={handleServicesItemLeave}
                              style={{ color: hoveredServicesItem === 'Managed Services' ? '#00b300' : dropdownItemColor, ...dropdownItemStyle }}
                            >
                              Managed Services
                            </Dropdown.Item>
                            <Dropdown.Item
                              as={Link}
                              to="/Staffing/IS/IT"
                              onMouseEnter={() => handleServicesItemHover('Staffing/IS/IT')}
                              onMouseLeave={handleServicesItemLeave}
                              style={{ color: hoveredServicesItem === 'Staffing/IS/IT' ? '#00b300' : dropdownItemColor, ...dropdownItemStyle }}
                            >
                              Staffing/IS/IT
                            </Dropdown.Item>
                          </div>
                        )}
                      </Dropdown.Item>
                      <Dropdown.Item
                        as={Link}
                        to="/Cloud"
                        onMouseEnter={() => handleServicesItemHover('Cloud')}
                        onMouseLeave={handleServicesItemLeave}
                        style={{ color: hoveredServicesItem === 'Cloud' ? '#00b300' : dropdownItemColor, ...dropdownItemStyle }}
                      >
                        Cloud
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </li>
                <li
                  className="nav-item dropdown"
                  onMouseEnter={handleTechnologyHover}
                  onMouseLeave={handleTechnologyLeave}
                  style={{ position: 'relative', marginRight: '20px', marginLeft: 'auto' }}
                >
                  <Link
                    className={`nav-link ${showTechnologyDropdown ? 'active' : ''}`}
                    to="/technology"
                    style={{
                      position: 'relative',
                      zIndex: 1,
                      color: (hoveredNavItem === 'technology' || showTechnologyDropdown) ? '#00b300' : '#000000',
                      marginLeft: '20px',
                    }}
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
                    to="/Industries"
                    style={{
                      position: 'relative',
                      zIndex: 1,
                      color: (hoveredNavItem === 'Industries' || showIndustriesDropdown) ? '#00b300' : '#000000',
                      marginLeft: '20px',
                    }}
                  >
                    Industries
                  </Link>
                  <ul className={`dropdown-menu ${showIndustriesDropdown ? 'show' : ''}`} style={{ position: 'absolute', left: 0, top: '100%', zIndex: 11 }}>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/Banking"
                        onMouseEnter={() => handleIndustriesItemHover('Banking')}
                        onMouseLeave={handleIndustriesItemLeave}
                        style={{ color: hoveredIndustriesItem === 'Banking' ? '#00b300' : dropdownItemColor , ...dropdownItemStyle}}
                      >
                        Banking
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/Healthcare"
                        onMouseEnter={() => handleIndustriesItemHover('Healthcare')}
                        onMouseLeave={handleIndustriesItemLeave}
                        style={{ color: hoveredIndustriesItem === 'Healthcare' ? '#00b300' : dropdownItemColor, ...dropdownItemStyle }}
                      >
                        Healthcare
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/Retail"
                        onMouseEnter={() => handleIndustriesItemHover('Retail')}
                        onMouseLeave={handleIndustriesItemLeave}
                        style={{ color: hoveredIndustriesItem === 'Retail' ? '#00b300' : dropdownItemColor, ...dropdownItemStyle }}
                      >
                        Retail
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/Manufacturing"
                        onMouseEnter={() => handleIndustriesItemHover('Manufacturing')}
                        onMouseLeave={handleIndustriesItemLeave}
                        style={{ color: hoveredIndustriesItem === 'Manufacturing' ? '#00b300' : dropdownItemColor, ...dropdownItemStyle }}
                      >
                        Manufacturing
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/Media & Entertainment"
                        onMouseEnter={() => handleIndustriesItemHover('Media & Entertainment')}
                        onMouseLeave={handleIndustriesItemLeave}
                        style={{ color: hoveredIndustriesItem === 'Media & Entertainment' ? '#00b300' : dropdownItemColor, ...dropdownItemStyle }}
                      >
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
                    style={{
                      position: 'relative',
                      zIndex: 1,
                      color: (hoveredNavItem === 'company' || showCompanyDropdown) ? '#00b300' : '#000000',
                      marginLeft: '20px',
                    }}
                  >
                    Company
                  </Link>
                  <ul className={`dropdown-menu ${showCompanyDropdown ? 'show' : ''}`} style={{ position: 'absolute', left: 0, top: '100%', zIndex: 11 }}>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/About"
                        onMouseEnter={() => handleCompanyItemHover('About')}
                        onMouseLeave={handleCompanyItemLeave}
                        style={{ color: hoveredCompanyItem === 'About' ? '#00b300' : dropdownItemColor, ...dropdownItemStyle }}
                      >
                        About
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/Team"
                        onMouseEnter={() => handleCompanyItemHover('Team')}
                        onMouseLeave={handleCompanyItemLeave}
                        style={{ color: hoveredCompanyItem === 'Team' ? '#00b300' : dropdownItemColor, ...dropdownItemStyle }}
                      >
                        Team
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/Newsroom"
                        onMouseEnter={() => handleCompanyItemHover('Newsroom')}
                        onMouseLeave={handleCompanyItemLeave}
                        style={{ color: hoveredCompanyItem === 'Newsroom' ? '#00b300' : dropdownItemColor, ...dropdownItemStyle }}
                      >
                        Newsroom
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
