import React, { useState, useEffect, useRef } from 'react';
import './MyStory.css';

const timelineData = [
  {
    year: 2019,
    title: "2019 - Flight sweat and tears",
    text: "In 2019 I moved to the United States.responsibility, loneliness",
    image: "path_to_image_2019.jpg",
  },
  {
    year: 2020,
    title: "2020 - The great reset",
    text: "This is the description for 2020. Key events and highlights.",
    image: "path_to_image_2020.jpg",
  },
  {
    year: 2021,
    title: "2021 - Friends or not?",
    text: "This is the description for 2021. Major events of the year.",
    image: "path_to_image_2021.jpg",
  },
  {
    year: 2022,
    title: "2022 - Measure",
    text: "This is the description for 2022. Significant milestones.",
    image: "path_to_image_2022.jpg",
  },
  {
    year: 2023,
    title: "2023 - Refocus",
    text: "This is the description for 2023. Exciting developments.",
    image: "path_to_image_2023.jpg",
  },
  {
    year: 2024,
    title: "2024 - Consequences",
    text: "This is the description for 2024. Future outlook.",
    image: "path_to_image_2024.jpg",
  },
  {
    year: 2025,
    title: "2025 - Building my own luck",
    text: "This is the description for 2025. The road ahead.",
    image: "path_to_image_2025.jpg",
  },
];

// Select all timeline nodes and year sections
const timelineNodes = document.querySelectorAll('.timeline-node');
const yearSections = document.querySelectorAll('.year-section');

window.addEventListener('scroll', () => {
  // Get the current scroll position
  const scrollPosition = window.scrollY;
  
  // Track which year section is in view
  yearSections.forEach((section, index) => {
      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.clientHeight;
      
      // Check if section is in view
      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          // Set the current node as active and show the year
          timelineNodes.forEach((node, nodeIndex) => {
              if (nodeIndex === index) {
                  node.classList.add('active');
                  node.querySelector('.timeline-year').style.display = 'inline';
              } else {
                  node.classList.remove('active');
                  node.querySelector('.timeline-year').style.display = 'none';
              }
          });
      }
  });
});

function MyStory() {
  const [activeYear, setActiveYear] = useState(2019);
  const sectionsRef = useRef([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      threshold: 0.5, // Trigger when 50% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const year = parseInt(entry.target.getAttribute('data-year'), 10);
          setActiveYear(year);
        }
      });
    }, observerOptions);

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionsRef.current.forEach((section) => {
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
            <span className="timeline-year">{item.year}</span>
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
            <div className={`year-content ${activeYear === item.year ? 'visible' : ''}`}>
              <h1>{item.title}</h1>
              <img src={item.image} alt={`Image for ${item.year}`} />
              <p>{item.text}</p>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

export default MyStory;
