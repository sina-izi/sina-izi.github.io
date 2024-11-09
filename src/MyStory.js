import React, { useState, useEffect, useRef } from 'react';
import './MyStory.css';

const timelineData = [
  {
    year: 2019,
    title: "2019 - Flight sweat and tears",
    text: `I still remember the last goodbye. It was heartbreaking but full of hope.
    Hope for a better future, a better life, and an uncertain reunion. As I was moving 
    towards the airport TTC, I could see their warm smiles and teary eyes fade away.
    I left them behind. I left my parents, friends, and everyone I cared for behind.
    So that I can pursue my own American dream, hoping that one day I will see them 
    in better circumstances. But as much as I was sad, I was excited. Not only was I 
    going to the land of opportunities, the United States of America, but also I was 
    going to the capital of the world, the big apple, the city that never sleeps, NYC. 
    This was my dream city since I was a kid. So I would be lying if I said I was not 
    super excited to finally be able to go there, especially knowing that I got rejected 
    3 times before I finally got accepted! This was a great opportunity for me to finally 
    grow up, learn to become independent, and build a great future for myself and those 
    who love me.`,
    image: "path_to_image_2019.jpg",
  },
  {
    year: 2020,
    title: "2020 - The great reset",
    text: `I still remember the last goodbye. It was heartbreaking but full of hope.
    Hope for a better future, a better life, and an uncertain reunion. As I was moving 
    towards the airport TTC, I could see their warm smiles and teary eyes fade away.
    I left them behind. I left my parents, friends, and everyone I cared for behind.
    So that I can pursue my own American dream, hoping that one day I will see them 
    in better circumstances. But as much as I was sad, I was excited. Not only was I 
    going to the land of opportunities, the United States of America, but also I was 
    going to the capital of the world, the big apple, the city that never sleeps, NYC. 
    This was my dream city since I was a kid. So I would be lying if I said I was not 
    super excited to finally be able to go there, especially knowing that I got rejected 
    3 times before I finally got accepted! This was a great opportunity for me to finally 
    grow up, learn to become independent, and build a great future for myself and those 
    who love me.`,
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
            <div className="year-card">
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
