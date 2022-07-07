import React from "react";
import "./footer.css";
import { FiFacebook } from "react-icons/fi";
import { GrInstagram } from "react-icons/gr";
import { FiTwitter } from "react-icons/fi";
import { BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">
        Jake Eissler
      </a>
      <ul className="permalinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        {/* <li>
          <a href="#services">Services</a>
        </li> */}
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        {/* <li>
          <a href="#testimonials">Testimonials</a>
        </li> */}
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a
          href="https://www.facebook.com/jake.eissler/"
          target="_blank"
          rel="noreferrer"
        >
          <FiFacebook />
        </a>
        <a
          href="https://instagram.com/jakeeis24"
          target="_blank"
          rel="noreferrer"
        >
          <GrInstagram />
        </a>
        <a
          href="https://twitter.com/jakeeis24"
          target="_blank"
          rel="noreferrer"
        >
          <FiTwitter />
        </a>
        <a href="https://github.com/jakeeis24" target="_blank" rel="noreferrer">
          <BsGithub />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Jake Eissler. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
