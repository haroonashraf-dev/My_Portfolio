import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import Hero from './components/Hero';

const About = lazy(() => import('./components/About'));
const Services = lazy(() => import('./components/Services'));
const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const Contact = lazy(() => import('./components/Contact'));
const WhatsAppButton = lazy(() => import('./components/WhatsAppButton'));

import ScrollToTop from './components/ScrollToTop';

const App = () => {
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
                <Suspense fallback={<div className="min-h-screen" />}>
                  <About />
                  <Services />
                  <Projects />
                  <Skills />
                  <Contact />
                </Suspense>
              </>
            }
          />
        </Routes>
      </Layout>

      {/* Floating WhatsApp Button */}
      <Suspense fallback={null}>
        <WhatsAppButton />
      </Suspense>
    </Router>
  );
};

export default App;