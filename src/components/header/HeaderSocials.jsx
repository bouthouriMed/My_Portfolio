import React from "react";
import { BsLinkedin, BsGithub, BsTwitter } from "react-icons/bs";
import { motion } from "framer-motion";

function HeaderSocials() {
  return (
    <motion.div
      className="header__socials"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 1.3, ease: "easeInOut" }}
    >
      <a href="https://linkedin.com" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com" target="_blank">
        <BsGithub />
      </a>
      <a href="https://twitter.com" target="_blank">
        <BsTwitter />
      </a>
    </motion.div>
  );
}

export default HeaderSocials;
