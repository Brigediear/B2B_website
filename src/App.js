import React from 'react';
import Navbar from './component/Navbar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './component/About';
import Team from './component/Team';
import Contact from './component/Contact';
import Careers from './component/Careers';
import Newsroom from './component/Newsroom';
import Home from './component/Home';
import DataAnalyticsService from './component/DataAnalyticsService';
import CloudService from './component/CloudService';
import DataEngineeringService from './component/DataEngineeringService';
import ScmManagement from './component/ScmManagement';
import ScmImplementation from './component/ScmImplementation';
import ScmManaged from './component/ScmManaged';
import ScmMigration from './component/ScmMigration';
import  ScmSatffing from './component/ScmStaffing';
import Technology from './component/Technology';
import Services from './component/Services';
import SCM from './component/SCM';
import Banking from './component/Banking';
import Healthcare from './component/Healthcare';
import Retail from './component/Retail';
import Media from './component/Media & Entertainment';
import Industries from './component/Industries';

function App() {
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/about" element={<About />} />
          {/* Add routes for other pages */}
          <Route path="/Team" element={<Team />} />
          {/* Add routes for other pages */}
          <Route path="/Contact" element={<Contact />} />
          {/* Add routes for other pages */}
          <Route path="/Careers" element={<Careers />} />
          {/* Add routes for other pages */}
          <Route path="/Newsroom" element={<Newsroom />} />
          {/* Add routes for other pages */}
          <Route path="/Home" element={<Home />} />
          {/* Add routes for other pages */}
          <Route path="/Data Analytics" element={<DataAnalyticsService/>} />
          {/* Add routes for other pages */}
          <Route path="/Cloud" element={<CloudService />} />
          {/* Add routes for other pages */}
          <Route path="/Data Engineering" element={<DataEngineeringService/>} />
          {/* Add routes for other pages */}
          <Route path="/Management Consulting" element={<ScmManagement/>} />
          {/* Add routes for other pages */}
          <Route path="/Implementation Services" element={<ScmImplementation/>} />
          {/* Add routes for other pages */}
          <Route path="/Upgrade and Migration Services" element={<ScmMigration/>} />
          {/* Add routes for other pages */}
          <Route path="/Managed Services" element={<ScmManaged/>} />
          {/* Add routes for other pages */}
          <Route path="/Staffing/IS/IT" element={<ScmSatffing/>} />
          {/* Add routes for other pages */}
          <Route path="/Technology" element={<Technology/>} />
          {/* Add routes for other pages */}
          <Route path="/services" element={<Services/>} />
          {/* Add routes for other pages */}
          <Route path="/SCM  »" element={<SCM/>} />
          {/* Add routes for other pages */}
          <Route path="/Banking" element={<Banking/>} />
          {/* Add routes for other pages */}
          <Route path="/Healthcare" element={<Healthcare/>} />
          {/* Add routes for other pages */}
          <Route path="/Retail" element={<Retail/>} />
          {/* Add routes for other pages */}
          <Route path="/Media & Entertainment" element={<Media/>} />
          {/* Add routes for other pages */}
          <Route path="/Industries" element={<Industries/>} />
          {/* Add routes for other pages */}
          </Routes>   
    </BrowserRouter>
    
  );
}

export default App;