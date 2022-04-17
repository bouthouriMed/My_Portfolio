import React from "react";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";
import "./portfolio.css";

const portfolios = [
  {
    id: 1,
    image: IMG1,
    title: "Crypto Currency dashboard & Financial visualization",
    github: "https://github.com",
    demo: "https://dribble.com/Alien_pixels",
  },
  {
    id: 2,
    image: IMG2,
    title: "Charts templates & infographics in Figma",
    github: "https://github.com",
    demo: "https://dribble.com/Alien_pixels",
  },
  {
    id: 3,
    image: IMG3,
    title: "Figma dashboard UI kit for data design web apps",
    github: "https://github.com",
    demo: "https://dribble.com/Alien_pixels",
  },
  {
    id: 4,
    image: IMG4,
    title: "Maintaning tasks and track progress",
    github: "https://github.com",
    demo: "https://dribble.com/Alien_pixels",
  },
  {
    id: 5,
    image: IMG5,
    title: "Charts templates & infographics in Figma",
    github: "https://github.com",
    demo: "https://dribble.com/Alien_pixels",
  },
  {
    id: 6,
    image: IMG6,
    title: "Maintaning tasks and track progress",
    github: "https://github.com",
    demo: "https://dribble.com/Alien_pixels",
  },
];

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {portfolios.map((portfolio) => (
          <article className="portfolio__item" key={portfolio.id}>
            <div className="portfolio__item__image">
              <img src={portfolio.image} alt="img1" />
            </div>
            <h3>{portfolio.title}</h3>
            <div className="portfolio__item__cta">
              <a href={portfolio.github} className="btn" target="_blank">
                Github
              </a>
              <a href={portfolio.demo} className="btn" target="_blank">
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
