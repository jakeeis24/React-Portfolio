import React from "react";
import "./about.css";
import ME from "../../assets/about-me_frogs.jpg";
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
            <img src={ME} alt="Jake Eissler" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaHammer className="about__icon" />
              <h5>Experience</h5>
              <small>Denver University Full Stack Coding Bootcamp</small>
              <br />
              <small>January 2022 - May 2022</small>
            </article>
            <article className="about__card">
              <FiThumbsUp className="about__icon" />
              <h5>Open For Work</h5>
              <small>I am ready to start my career in web development!</small>
            </article>
            <article className="about__card">
              <AiOutlineFolderOpen className="about__icon" />
              <h5>Projects</h5>
              <small>Scroll down to see my projects!</small>
            </article>
          </div>

          <p>
            I am a highly motivated individual looking to break into the tech
            industry. Taking a coding bootcamp was one of the best decisions I
            have ever made and it gave me a jumpstart in the right direction!
          </p>
          <p>
            I am looking for a junior web developer role where teamwork and
            learning are high priorities. I will be the first person to admit I
            am not an expert in any language, skill, theory, etc. But with the
            right resources, I know I will be able to make a positive impact on
            any team.
          </p>
          <p>
            Playing Division I baseball at an elite baseball college taught me
            that teamwork is of utmost importance in any environment and that
            hard work is invaluable. In this next chapter of my life, I am
            willing to put in the work to become the best developer possible and
            I cannot wait to see where this journey takes me!
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
