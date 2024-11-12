import React, { useState } from 'react';
import { HashRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Blog from './Blog';
import MyStory from './MyStory'; // Import the new component

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
          <svg
            width="40"
            height="40"
            viewBox="0 0 100 100"
            className={menuOpen ? 'open' : ''}
          >
            <rect id="top-line" width="80" height="10" x="10" y="30" rx="5" />
            <rect id="middle-line" width="80" height="10" x="10" y="50" rx="5" />
            <rect id="bottom-line" width="80" height="10" x="10" y="70" rx="5" />
          </svg>
          </div>

          {/* Dropdown Menu for Mobile */}
          <nav className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
            <Link className="button" to="/" onClick={toggleMenu}>Home</Link>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="button" onClick={toggleMenu}>Resume</a>
            <Link className="button" to="/blog" onClick={toggleMenu}>Blog</Link>
            <Link className="button" to="/my-story" onClick={toggleMenu}>My Story</Link> {/* New Button for mobile */}
            <button className="button theme-toggle" onClick={() => { toggleTheme(); toggleMenu(); }}>
              {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
          </nav>

          {/* Normal Menu for Desktop */}
          <nav className="nav-buttons">
            <Link className="button" to="/">Home</Link>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="button">Resume</a>
            <Link className="button" to="/blog">Blog</Link>
            <Link className="button" to="/my-story">My Story</Link> {/* New Button for desktop */}
            <button className="button theme-toggle" onClick={toggleTheme}>
              {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
          </nav>
        </header>

        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/my-story" element={<MyStory />} /> {/* New Route */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
