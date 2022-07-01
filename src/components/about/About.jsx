import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { FaHammer } from "react-icons/fa";
import { FiThumbsUp } from "react-icons/fi";
import { AiOutlineFolderOpen } from "react-icons/ai";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaHammer className="about__icon" />
              <h5>Experience</h5>
              <small>3 month Bootcamp Feb-May 2022</small>
            </article>
            <article className="about__card">
              <FiThumbsUp className="about__icon" />
              <h5>Open For Work</h5>
              <small>I am ready to start my career in web development!</small>
            </article>
            <article className="about__card">
              <AiOutlineFolderOpen className="about__icon" />
              <h5>Projects</h5>
              <small>What should I put here??</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
            accusamus illum doloremque laudantium esse eius repudiandae velit
            voluptate nihil minima sapiente ullam quas, quia commodi. Atque
            harum illo dicta modi!
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
