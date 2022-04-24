import React from "react";
// import ME from '../../assets/me-about.jpg'
import ME from "../../assets/me2.png";

import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import { motion } from "framer-motion";

import "./about.css";

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

function About() {
  return (
    <motion.section
      id="about"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      transition={{ duration: 0.5 }}
    >
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me__image">
            <img src={ME} alt="me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>15+ Satisfied Clients</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>18+ Completed projects</small>
            </article>
          </div>

          <p>
            I'm a Full-Stack Software engineer, I create all types of mobile and
            web based software and ensure great experience for end users. I
            professionally design, redesign and continuously support
            customer-facing and entreprise web and mobile apps to achieve high
            conversion and adoption rates
          </p>

          <div>
            <a
              href="#contact"
              className="btn btn-primary"
              style={{ textAlign: "center" }}
            >
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default About;
