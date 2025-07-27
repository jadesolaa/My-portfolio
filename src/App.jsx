
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import Projects from './components/Projects';

// New project detail pages
import AppDesign from './pages/projects/AppDesign';
import AnalyticsDashboards from './pages/projects/AnalyticsDashboards';
import ContentCampaigns from './pages/projects/ContentCampaigns';
import WellnessJournal from './pages/projects/WellnessJournal';
import WebApps from './pages/projects/WebApps';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<Projects />} />

        {/* New case study routes */}
        <Route path="/projects/app-design" element={<AppDesign />} />
        <Route path="/projects/business-analytics" element={<AnalyticsDashboards />} />
        <Route path="/projects/content-campaigns" element={<ContentCampaigns />} />
        <Route path="/projects/wellness-journal" element={<WellnessJournal />} />
        <Route path="/projects/web-apps" element={<WebApps />} />
      </Routes>
    </Router>
  );
}

export default App;
