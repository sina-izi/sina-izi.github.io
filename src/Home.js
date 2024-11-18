import React from 'react';
import './Home.css';
import aboutText from './texts/AboutText';

function Home() {
  return (
    <div className="home-container">
      <section className="about-me">
        <h2 className="typewriter">Hi I'm Sina!</h2>

        {/* Picture and Text */}
        <div className="about-content">
          <img
            src="/profile_pic.jpg" // Replace with your image path
            alt="Sina"
            className="about-picture"
          />
          <p className="about-text">
            {aboutText}
          </p>
        </div>
      </section>
    </div>
  );
}

export default Home;
