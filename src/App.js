import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './component/Navbar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './component/About';
import Team from './component/Team';
import Contact from './component/Contact';
import Careers from './component/Careers';
import Newsroom from './component/Newsroom';
import Home from './component/Home';
import DataAnalyticsService from './component/DataAnalyticsService';
import CloudService from './component/CloudService';
import DataEngineeringService from './component/DataEngineeringService';
import DataGovernance from './component/Data Governance';
import DataScience from './component/Data Science';
import ScmManagement from './component/ScmManagement';
import ScmImplementation from './component/ScmImplementation';
import ScmManaged from './component/ScmManaged';
import ScmMigration from './component/ScmMigration';
import ScmSatffing from './component/ScmStaffing';
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
        <Route path="/" element={<Navigate to="/Home" />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Our Founder" element={<Team />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Careers" element={<Careers />} />
        <Route path="/Newsroom" element={<Newsroom />} />
        <Route path="/Data Analytics" element={<DataAnalyticsService />} />
        <Route path="/Cloud" element={<CloudService />} />
        <Route path="/Data Engineering" element={<DataEngineeringService />} />
        <Route path="/Data Governance" element={<DataGovernance />} />
        <Route path="/Data Science" element={<DataScience />} />
        <Route path="/Management Consulting" element={<ScmManagement />} />
        <Route path="/Implementation Services" element={<ScmImplementation />} />
        <Route path="/Upgrade and Migration Services" element={<ScmMigration />} />
        <Route path="/Managed Services" element={<ScmManaged />} />
        <Route path="/Staffing/IS/IT" element={<ScmSatffing />} />
        <Route path="/Technology" element={<Technology />} />
        <Route path="/services" element={<Services />} />
        <Route path="/SCM  »" element={<SCM />} />
        <Route path="/Banking" element={<Banking />} />
        <Route path="/Healthcare" element={<Healthcare />} />
        <Route path="/Retail" element={<Retail />} />
        <Route path="/Media & Entertainment" element={<Media />} />
        <Route path="/Industries" element={<Industries />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
