import React from "react";
import "./contact.css";
import { FiMail } from "react-icons/fi";
import { RiMessengerLine } from "react-icons/ri";
import { FiTwitter } from "react-icons/fi";

const Contact = () => {
  return (
    <section id="contact">
      <h5>get in touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <FiMail />
            <h4>Email</h4>
            <h5>jakeeissler1@gmail.com</h5>
            <a
              href="mailto:jakeeissler1@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a Message
            </a>
          </article>
          <article className="contact__option">
            <RiMessengerLine />
            <h4>Messenger</h4>
            <h5>Jake Eissler</h5>
            <a
              href="https://m.me/jake.eissler"
              target="_blank"
              rel="noreferrer"
            >
              Send a Message
            </a>
          </article>
          <article className="contact__option">
            <FiTwitter />
            <h4>Twitter</h4>
            <h5>jakeeis24</h5>
            <a
              href="https://twitter.com/jakeeis24"
              target="_blank"
              rel="noreferrer"
            >
              Send a Message
            </a>
          </article>
        </div>
        {/* End of Contact Options */}
        <form action="">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
