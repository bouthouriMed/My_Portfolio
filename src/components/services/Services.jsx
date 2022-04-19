import React from "react";
import { BiCheck } from "react-icons/bi";
import "./services.css";

function Services() {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list__icon" />
              <p>User stories.</p>
            </li>
            <li>
              <BiCheck className="service__list__icon" />
              <p>User flow charts, diagrams.</p>
            </li>
            <li>
              <BiCheck className="service__list__icon" />
              <p>Wireframes.</p>
            </li>
            <li>
              <BiCheck className="service__list__icon" />
              <p>Content strategy.</p>
            </li>
            <li>
              <BiCheck className="service__list__icon" />
              <p>Information architecture.</p>
            </li>
            <li>
              <BiCheck className="service__list__icon" />
              <p>Brand and design system development.</p>
            </li>
            <li>
              <BiCheck className="service__list__icon" />
              <p>Design technology consulting.</p>
            </li>
          </ul>
        </article>
        {/* End of UI/UX */}

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list__icon" />
              <p>Product Design.</p>
            </li>
            <li>
              <BiCheck className="service__list__icon" />
              <p>E-commerce Web Development.</p>
            </li>
            <li>
              <BiCheck className="service__list__icon" />
              <p>PoC Development.</p>
            </li>
            <li>
              <BiCheck className="service__list__icon" />
              <p>Custom Web Development for the entreprise.</p>
            </li>
            <li>
              <BiCheck className="service__list__icon" />
              <p>Automated QA and testing.</p>
            </li>
            <li>
              <BiCheck className="service__list__icon" />
              <p>IT Consultancy.</p>
            </li>
            <li>
              <BiCheck className="service__list__icon" />
              <p>Cloud Migration.</p>
            </li>
            <li>
              <BiCheck className="service__list__icon" />
              <p>Maintenance and post-warranty support.</p>
            </li>
          </ul>
        </article>
        {/* End of Web develoment */}

        <article className="service">
          <div className="service__head">
            <h3>Mobile development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list__icon" />
              <p>Consulting and prototyping.</p>
            </li>
            <li>
              <BiCheck className="service__list__icon" />
              <p>Custom iOS and Android apps development.</p>
            </li>
            <li>
              <BiCheck className="service__list__icon" />
              <p>Native and cross-platform solutions.</p>
            </li>
            <li>
              <BiCheck className="service__list__icon" />
              <p>Automated QA and testing.</p>
            </li>
            <li>
              <BiCheck className="service__list__icon" />
              <p>Power management, notification and geofencing.</p>
            </li>
            <li>
              <BiCheck className="service__list__icon" />
              <p>Maintenance and post-warranty support.</p>
            </li>
          </ul>
        </article>
        {/* End of Content Creation*/}
      </div>
    </section>
  );
}

export default Services;
