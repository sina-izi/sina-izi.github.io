import React from 'react';
import './App.css'; // You can customize the CSS for styling
import Home from './Home';
import Resume from './Resume';
import Blog from './Blog';

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#resume">Resume</a></li>
            <li><a href="#blog">Blog</a></li>
          </ul>
        </nav>
      </header>
      <section id="home">
        <Home />
      </section>
      <section id="resume">
        <Resume />
      </section>
      <section id="blog">
        <Blog />
      </section>
    </div>
  );
}

export default App;
