import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Blog from './Blog'; // Remove Resume import

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false); // For controlling mobile menu

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Router>
      <div className={`App ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
        <header className="App-header">
          {/* Hamburger Menu for Mobile */}
          <div className="hamburger" onClick={toggleMenu}>
            &#9776; {/* Hamburger icon */}
          </div>

          {/* Dropdown Menu for Mobile */}
          <nav className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
            <Link className="button" to="/" onClick={toggleMenu}>Home</Link>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="button" onClick={toggleMenu}>Resume</a> {/* PDF Link */}
            <Link className="button" to="/blog" onClick={toggleMenu}>Blog</Link>
            <button className="button theme-toggle" onClick={() => { toggleTheme(); toggleMenu(); }}>
              {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
          </nav>

          {/* Normal Menu for Desktop */}
          <nav className="nav-buttons">
            <Link className="button" to="/">Home</Link>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="button">Resume</a> {/* PDF Link */}
            <Link className="button" to="/blog">Blog</Link>
            <button className="button theme-toggle" onClick={toggleTheme}>
              {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
          </nav>
        </header>

        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Remove the /resume route */}
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
