import React, { useState } from "react";
import "./nav.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { RiServerLine } from "react-icons/ri";
import { motion } from "framer-motion";

function Nav() {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <div
    // initial={{ scale: 0 }}
    // animate={{ scale: 1 }}
    // transition={{ duration: 1.5 }}
    >
      <nav>
        <motion.a
          whileHover={{
            scale: 1.1,
            textShadow: `0px 0px 0px #4db5ff`,
            boxShadow: `0px 0px 0px #4db5ff`,
          }}
          transition={{ duration: 0.5 }}
          href="#"
          className={activeNav === "#" ? "active" : ""}
          onClick={() => setActiveNav("#")}
        >
          <AiOutlineHome />
        </motion.a>
        <motion.a
          whileHover={{
            scale: 1.1,
            textShadow: `0px 0px 0px #4db5ff`,
            boxShadow: `0px 0px 0px #4db5ff`,
          }}
          transition={{ duration: 0.5 }}
          href="#about"
          className={activeNav === "#about" ? "active" : ""}
          onClick={() => setActiveNav("#about")}
        >
          <AiOutlineUser />
        </motion.a>
        <motion.a
          whileHover={{
            scale: 1.1,
            textShadow: `0px 0px 0px #4db5ff`,
            boxShadow: `0px 0px 0px #4db5ff`,
          }}
          transition={{ duration: 0 }}
          href="#experience"
          className={activeNav === "#experience" ? "active" : ""}
          onClick={() => setActiveNav("#experience")}
        >
          <BiBook />
        </motion.a>
        <motion.a
          whileHover={{
            scale: 1.1,
            textShadow: `0px 0px 0px #4db5ff`,
            boxShadow: `0px 0px 0px #4db5ff`,
          }}
          transition={{ duration: 0.5 }}
          href="#services"
          className={activeNav === "#services" ? "active" : ""}
          onClick={() => setActiveNav("#services")}
        >
          <RiServerLine />
        </motion.a>
        <motion.a
          href="#contact"
          className={activeNav === "#contact" ? "active" : ""}
          onClick={() => setActiveNav("#contact")}
        >
          <BiMessageSquareDetail />
        </motion.a>
      </nav>
    </div>
  );
}

export default Nav;
