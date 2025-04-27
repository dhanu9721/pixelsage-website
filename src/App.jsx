import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import Games from './components/Games';  // ✅ Import your Games page
import './css/style.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Home Page */}
        <Route path="/" element={
          <>
            {/* <Header /> */}
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
        
        {/* Games Page */}
        <Route path="/games" element={<Games />} />
      </Routes>
    </Router>
  );
}

export default App;
