import React from 'react';
import './Home.css'; // Create a Home.css file for styling

function Home() {
  return (
    <div className="home-container">
      <section className="about-me">
        <h2>Me?</h2>

        {/* Picture and Text */}
        <div className="about-content">
          <img
            src="/profile_pic.jpg" // Replace with your image path
            alt="Sina"
            className="about-picture"
          />
          <p className="about-text">
            Hi! I'm Sina, I am a Developer who studied Computer Engineering at NYU. I think I almost maxed out these stats:<br /><br />
            &nbsp;&nbsp;&nbsp;&nbsp;- Extroversion: I love making new friends and hanging out with them!<br /><br />
            &nbsp;&nbsp;&nbsp;&nbsp;- Creativity: I'm really good at coming up with creative Ideas. I consider this to be my superpower!<br /><br />
            &nbsp;&nbsp;&nbsp;&nbsp;- Adaptability: I am change! No but seriously! I love to be challenged and try new things.<br /><br />
            However, I'm on a quest to level up the stats below. I'd say that they are a work in progress :D<br /><br />
             &nbsp;&nbsp;&nbsp;&nbsp;- Proactiveness: Sometime i just need to take the step. Enough with the ideas :/<br /><br />
             &nbsp;&nbsp;&nbsp;&nbsp;- Experience: I do want to learn more and become a way better Engineer, and a better Leader.<br /><br />
             &nbsp;&nbsp;&nbsp;&nbsp;- Story-Telling: I guess we all know the power of great stories! and I'm working on mine.<br />
          </p>
        </div>
      </section>
    </div>
  );
}

export default Home;