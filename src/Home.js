import React from 'react';
import './Home.css'; // Import styles
import aboutText from './texts/AboutText'; // Correct path for aboutText
import InfiniteCorridor from './components/InfiniteCorridor'; // Correct path for InfiniteCorridor
import { AiOutlineMail, AiOutlineLinkedin, AiOutlineGithub, AiFillYoutube, AiOutlineAudio } from 'react-icons/ai';

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

      {/* Connect With Me Section */}
      <section className="connect-with-me">
        <h2>Connect With Me</h2>
        <div className="connect-content">
          <div className="connect-icons">
            <a href="mailto:SinaFallah98@gmail.com" target="_blank" rel="noopener noreferrer"><AiOutlineMail /></a>
            <a href="https://www.linkedin.com/in/sfa-izi" target="_blank" rel="noopener noreferrer"><AiOutlineLinkedin /></a>
            <a href="https://github.com/sina-izi" target="_blank" rel="noopener noreferrer"><AiOutlineGithub /></a>
            <a href="https://www.youtube.com/@izi9307" target="_blank" rel="noopener noreferrer"><AiFillYoutube /></a>
            <a href="https://www.youtube.com/@UndoSend" target="_blank" rel="noopener noreferrer"><AiOutlineAudio /></a>
          </div>
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
