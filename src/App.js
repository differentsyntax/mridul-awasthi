// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header/Header';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

function App() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <Router>
      <div className={`App ${showMenu ? 'menu-open' : ''}`}>
        <Header setShowMenuProp={setShowMenu} />

        <nav className={`App-nav ${showMenu ? 'show' : ''}`}>
          <ul>
            <li><Link to="/about" onClick={() => setShowMenu(false)}>About Me</Link></li>
            <li><Link to="/projects" onClick={() => setShowMenu(false)}>Projects</Link></li>
            <li><Link to="/contact" onClick={() => setShowMenu(false)}>Contact</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/about" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <footer className="App-footer">
          &copy; {new Date().getFullYear()} Your Name. All rights reserved.
        </footer>
      </div>
    </Router>
  );
}

export default App;
