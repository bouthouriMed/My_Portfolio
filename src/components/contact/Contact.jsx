import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";

import "./contact.css";

function Contact() {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option__icon" />
            <h4>Email</h4>
            <h5>bouthouri</h5>
            <a href="mailto:both@gmail.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option__icon" />
            <h4>Messanger</h4>
            <h5>bouth@gmail.com</h5>
            <a href="https://m.me/bouthouriMed" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option__icon" />
            <h4>WhatsApp</h4>
            <h5>+21653842869</h5>
            <a
              href="https://api.whatsapp.com/send?phone=+21653842869"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>

        {/* End of contact options */}

        <form action="">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
