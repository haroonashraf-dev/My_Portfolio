import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import WhatsAppButton from './components/WhatsAppButton';

import ScrollToTop from './components//ScrollToTop';
import LmsDetails from './components/LmsDetails';
import FashionDetails from './components/FashionDetails';
import DashboardDetails from './components/DashboardDetails';

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop /> 
      {/* Layout wraps all pages */}
      <Layout>
        <Routes>
          {/* Home Page with Sections */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Services />
                <Projects />
                <Skills />
                <Contact />
              </>
            }
          />

          {/* Project Details Pages */}
          <Route path="/lms-details" element={<LmsDetails />} />
          <Route path="/fashion-details" element={<FashionDetails />} />
          <Route path="/dashboard-details" element={<DashboardDetails />} />
        </Routes>
      </Layout>

      {/* Floating WhatsApp Button */}
      <WhatsAppButton />
    </Router>
  );
};

export default App;