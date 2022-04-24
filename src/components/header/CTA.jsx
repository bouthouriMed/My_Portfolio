import React from "react";
import CV from "../../assets/cv.pdf";
import { motion } from "framer-motion";

function CTA() {
  return (
    <div className="cta">
      <motion.a
        href={CV}
        download
        className="btn"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{
          scale: 1.1,
          textShadow: `0px 0px 0px #4db5ff`,
          boxShadow: `0px 0px 0px #4db5ff`,
          transition: { duration: 0.1 },
        }}
        transition={{ type: "spring", stiffness: 110 }}
      >
        Dowload CV
      </motion.a>
      <motion.a
        href="#contact"
        className="btn btn-primary"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{
          scale: 1.1,
          textShadow: `0px 0px 0px #4db5ff`,
          transition: { duration: 0.1 },
          boxShadow: `0px 0px 0px #4db5ff`,
        }}
        transition={{ type: "spring", stiffness: 110 }}
      >
        Let's Talk
      </motion.a>
    </div>
  );
}

export default CTA;
