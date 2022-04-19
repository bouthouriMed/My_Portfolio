import React from "react";
import CTA from "./CTA";
import ME from "../../assets/mee.png";
import HeaderSocials from "./HeaderSocials";

import "./header.css";

function Header() {
  return (
    <header>
      <section className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Bouthouri Mohamed Elarbi</h1>
        <h5 className="text-light">Full-Stack Software Developer</h5>
        <CTA />

        <div className="me">
          <img src={ME} alt="Me" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll down
        </a>

        <HeaderSocials />
      </section>
    </header>
  );
}

export default Header;
