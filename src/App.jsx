import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import Games from './components/Games';
import './css/style.css';

function App() {
  return (
    <Router basename="/pixelsage-website">
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <div id="aboutus"><AboutUs /></div>
            <div id="services"><Services /></div>
            <div id="projects"><Projects /></div>
            <div id="portfolio"><Portfolio /></div>
            <div id="process"><Process /></div>
            <div id="contact"><Contact /></div>
            <footer>
              <p>&copy; 2025 PixelSage. All rights reserved.</p>
            </footer>
          </>
        } />
        
        {/* Games Page */}
        <Route path="/games" element={<Games />} />
      </Routes>
    </Router>
  );
}

export default App;
