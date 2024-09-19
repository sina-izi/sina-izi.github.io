import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Blog from './Blog';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav className="nav-buttons">
            <Link className="button" to="/">Home</Link>
            {/* Link to resume PDF directly */}
            <a className="button" href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              Resume
            </a>
            <Link className="button" to="/blog">Blog</Link>
          </nav>
        </header>

        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
