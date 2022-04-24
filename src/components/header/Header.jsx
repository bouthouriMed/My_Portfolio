import React, { useEffect } from "react";
import CTA from "./CTA";
import ME from "../../assets/mee.png";
import HeaderSocials from "./HeaderSocials";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import "./header.css";

const titleOne = {
  hidden: {
    opacity: 0,
    y: "-100vh",
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      type: "spring",
      stiffness: 110,
    },
  },
  inView: {
    scale: 2.5,
  },
};

const titleTwo = {
  hidden: {
    opacity: 0,
    x: "-100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.2,
      type: "spring",
      stiffness: 110,
    },
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

function Header() {
  return (
    <header>
      <motion.section
        className="container header__container"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
      >
        <h5>Hello I'm</h5>
        <div>
          <motion.h1 variants={titleOne}>Bouthouri Mohamed Elarbi</motion.h1>
        </div>
        <h5 className="text-light">Full-Stack Software Developer</h5>
        <CTA />

        <div className="me">
          <img src={ME} alt="Me" />
        </div>

        <motion.a
          initial={{ scale: 0, rotate: 90 }}
          animate={{ scale: 1, rotate: 90 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          href="#contact"
          className="scroll__down"
        >
          Scroll down
        </motion.a>

        <HeaderSocials />
      </motion.section>
    </header>
  );
}

export default Header;
