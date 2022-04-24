import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import "./experience.css";
import { motion } from "framer-motion";

const frontEndSkills = [
  {
    title: "HTML",
    level: "Experienced",
  },
  {
    title: "CSS",
    level: "Experienced",
  },
  {
    title: "Javascipt",
    level: "Experienced",
  },
  {
    title: "Typescipt",
    level: "Experienced",
  },
  {
    title: "React JS",
    level: "Experienced",
  },
  {
    title: "React Native",
    level: "Experienced",
  },
  {
    title: "Tailwind CSS",
    level: "Experienced",
  },
  {
    title: "Material UI",
    level: "Experienced",
  },
  {
    title: "Redux",
    level: "Experienced",
  },
  {
    title: "Redux Toolkit",
    level: "Experienced",
  },
];

const backEndSkills = [
  {
    title: "Python",
    level: "Experienced",
  },
  {
    title: "NodeJs",
    level: "Experienced",
  },
  {
    title: "ExpressJs",
    level: "Experienced",
  },
  {
    title: "Rest API",
    level: "Experienced",
  },
  {
    title: "GraphQL",
    level: "Experienced",
  },
  {
    title: "Spring Boot",
    level: "Experienced",
  },
  {
    title: "MongoDB",
    level: "Experienced",
  },
  {
    title: "MySQL",
    level: "Experienced",
  },
];

const item = {
  hidden: { x: "-100vw", opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
  },
};

const otherItem = {
  hidden: { x: "100vw", opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
  },
};

const container = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
    },
  },
};

function Experience() {
  return (
    <section id="experience">
      <h5>What skills I have</h5>
      <h2>My Experience</h2>

      <motion.div
        className="container experience__container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={container}
        transition={{ duration: 0.1 }}
      >
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            {frontEndSkills.map((skill, i) => (
              <article className="experience__details" key={i}>
                <BsPatchCheckFill className="experince__details__icon" />
                <div>
                  <h4>{skill.title}</h4>
                  <small className="text-light">{skill.level}</small>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            {backEndSkills.map((skill, i) => (
              <article className="experience__details">
                <BsPatchCheckFill
                  className="experince__details__icon"
                  key={i}
                />
                <div>
                  <h4>{skill.title}</h4>
                  <small className="text-light">{skill.level}</small>
                </div>
              </article>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Experience;
