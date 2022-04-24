import React, { useState } from "react";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";
import "./portfolio.css";
import { motion, AnimatePresence } from "framer-motion";

const portfolios = [
  {
    id: 1,
    image: IMG1,
    title: "Crypto Currency dashboard & Financial visualization",
    github: "https://github.com/bouthouriMed",
    demo: "https://dribble.com",
  },
  {
    id: 2,
    image: IMG2,
    title: "Charts templates & infographics in Figma",
    github: "https://github.com/bouthouriMed",
    demo: "https://dribble.com",
  },
  {
    id: 3,
    image: IMG3,
    title: "Figma dashboard UI kit for data design web apps",
    github: "https://github.com/bouthouriMed",
    demo: "https://dribble.com",
  },
  {
    id: 4,
    image: IMG4,
    title: "Maintaning tasks and track progress",
    github: "https://github.com/bouthouriMed",
    demo: "https://dribble.com",
  },
  {
    id: 5,
    image: IMG5,
    title: "Charts templates & infographics in Figma",
    github: "https://github.com/bouthouriMed",
    demo: "https://dribble.com",
  },
  {
    id: 6,
    image: IMG6,
    title: "Maintaning tasks and track progress",
    github: "https://github.com/bouthouriMed",
    demo: "https://dribble.com",
  },
];

const container = {
  hidden: { opacity: 0, scale: 0 },
  visible: { opacity: 1, scale: 1 },
};

function Portfolio() {
  const [selectedId, setSelectedId] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <section id="portfolio">
      <h5>My recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {portfolios.map((portfolio) => (
          <motion.article
            className="portfolio__item"
            key={portfolio.id}
            layoutId={portfolio.id}
            onClick={() => {
              setSelectedId(portfolio.id);
              setSelectedItem(portfolio);
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.3 }}
            variants={container}
          >
            <motion.div className="portfolio__item__image">
              <motion.img src={portfolio.image} alt="img1" />
            </motion.div>
            <motion.h3>{portfolio.title}</motion.h3>
            <motion.div className="portfolio__item__cta">
              <motion.a href={portfolio.github} className="btn" target="_blank">
                Github
              </motion.a>
              <motion.a href={portfolio.demo} className="btn" target="_blank">
                Live Demo
              </motion.a>
            </motion.div>
          </motion.article>
        ))}

        <AnimatePresence>
          {selectedId && (
            <motion.article
              className="portfolio__item"
              layoutId={selectedItem.id}
              key="modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div className="portfolio__item__image">
                <motion.img src={selectedItem.image} alt="img1" />
              </motion.div>
              <motion.h3>{selectedItem.title}</motion.h3>
              <motion.div className="portfolio__item__cta">
                <motion.a
                  href={selectedItem.github}
                  className="btn"
                  target="_blank"
                >
                  Github
                </motion.a>
                <motion.a
                  href={selectedItem.demo}
                  className="btn"
                  target="_blank"
                >
                  Live Demo
                </motion.a>
              </motion.div>
              <motion.button onClick={() => setSelectedId(null)} />
            </motion.article>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

export default Portfolio;
