import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import "./experience.css";

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

function Experience() {
  return (
    <section id="experience">
      <h5>What skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
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
      </div>
    </section>
  );
}

export default Experience;
