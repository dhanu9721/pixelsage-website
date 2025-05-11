import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import NotFound from './components/NotFound';
import Games from './components/Games';
import GameDetail from './components/GameDetail';
import './css/style.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Home Page */}
        <Route path="/" element={
          <>
            <Hero />
            <Projects />
            <Services />
            <Portfolio />
            <Process />
            <AboutUs />
            <Contact />
            <footer>
              <p>&copy; 2025 PixelSage. All rights reserved.</p>
            </footer>
          </>
        } />

        {/* Other Pages */}
        <Route path="/games" element={<Games />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/process" element={<Process />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/services" element={<Services />} />
        <Route path="/game-details/:id" element={<GameDetail />} />

        {/* Fallback */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
