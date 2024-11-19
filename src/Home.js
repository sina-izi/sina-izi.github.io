import React from 'react';
import './Home.css'; // Import styles
import aboutText from './texts/AboutText'; // Correct path for aboutText
import InfiniteCorridor from './components/InfiniteCorridor'; // Correct path for InfiniteCorridor

function Home() {
  return (
    <div className="home-container">
      {/* About Me Section */}
      <section className="about-me">
        <h2 className="typewriter">Hi, I'm Sina!</h2>

        <div className="about-content">
          <img
            src="/profile_pic.jpg" // Replace with your profile image path
            alt="Sina"
            className="about-picture"
          />
          <p className="about-text">
            {aboutText}
          </p>
        </div>
      </section>

      {/* Infinite Corridor Animation */}
      <div className="background-animation">
        <InfiniteCorridor />
      </div>
    </div>
  );
}

export default Home;
