import React, { useState, useEffect, useRef } from 'react';
import './MyStory.css';
import image2019 from './images/2019.jpeg';
import image2020 from './images/2020.jpeg';
import image2021 from './images/2021.jpeg';


const timelineData = [
  {
    year: 2019,
    title: "2019 Naive Yet Confident (NYC)",
    text: `My journey started here when I came to the United States to chase my own 
    American dream. Of course, it wasn’t going to be a smooth ride all the way. After all, 
    this was my first time being away from my family. Back home, I was a spoiled kid who 
    had never even opened a bank account or worried much about spending or planning. Being 
    away from home meant that I had to learn to become independent.`,
    image: image2019,
  },
  {
    year: 2020,
    title: "2020 The great reset",
    text: `This was the year I got into NYU. Now, I had a big name behind me that 
    opened many new doors. It also gave me the much-needed confidence to believe in 
    myself. However, there was one small problem, the pandemic! Meaning no fun events
    at school. There was another bigger issue tho: I couldn’t make any friends 
    because of COVID policies. This resulted in a very lonely period in my life.`,
    image: image2020,
  },
  {
    year: 2021,
    title: "2021 Measure",
    text: `During the cold January, while walking, I was listening to an inspiring 
    podcast about measurement. That’s when I realized that if I wanted to improve 
    something, I needed to measure it first. So, I began tracking how I spent my 
    time and money by creating a customized spreadsheet for myself. I also took 
    inspiration from game psychology and developed an automatic ranking system and 
    visual stats, like graphs, to make the process more fun and engaging. After all, 
    why shouldn’t I use those techniques for a good addiction?`,
    image: image2021,
  },
  {
    year: 2022,
    title: "2022 Friends or not?",
    text: `As a result of COVID, I didn’t have any friends at school. So, I had to 
    face the fear of talking to strangers. That’s when I had a conversation with a 
    classmate who inspired me to set a challenge: talk to a new stranger every day 
    for a couple of months. So, that’s what I did! It helped me become better at 
    finding common interests and steering the conversation in that direction. But 
    believe me, there were plenty of failed attempts along the way to get to that 
    point!`,
    image: "path_to_image_2021.jpg",
  },
  {
    year: 2023,
    title: "2023 Refocus",
    text: "This is the description for 2023. Exciting developments.",
    image: "path_to_image_2023.jpg",
  },
  {
    year: 2024,
    title: "2024 Consequences",
    text: "This is the description for 2024. Future outlook.",
    image: "path_to_image_2024.jpg",
  },
  {
    year: 2025,
    title: "2025 Make my own luck",
    text: "This is the description for 2025. The road ahead.",
    image: "path_to_image_2025.jpg",
  },
];

function MyStory() {
  const [activeYear, setActiveYear] = useState(2019);
  const sectionsRef = useRef([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const year = parseInt(entry.target.getAttribute('data-year'), 10);
          setActiveYear(year);
        }
      });
    }, observerOptions);

    // Copy the current ref value to avoid ESLint warnings
    const currentSections = sectionsRef.current;

    currentSections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      currentSections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="my-story-page">
      <div className="timeline">
        {timelineData.map((item) => (
          <div
            key={item.year}
            className={`timeline-node ${activeYear === item.year ? 'active' : ''}`}
          >
            {activeYear === item.year && (
              <span className="timeline-year">{item.year}</span>
            )}
          </div>
        ))}
      </div>

      <div className="story-content">
        {timelineData.map((item, index) => (
          <section
            key={item.year}
            ref={(el) => (sectionsRef.current[index] = el)}
            data-year={item.year}
            className="year-section"
          >
            <div className="year-card">
              <h1>{item.title}</h1>
              <img src={item.image} alt={`${item.year} timeline illustration`} />
              <p>{item.text}</p>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

export default MyStory;
