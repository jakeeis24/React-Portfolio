import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/elden_market.jpg";
import IMG2 from "../../assets/lasso.jpg";
import IMG3 from "../../assets/pokedex_pic.jpg";

const data = [
  {
    // elden market
    id: 1,
    image: IMG1,
    title: "Elden Market",
    github: "https://github.com/bhodge166/eldenMarket",
    demo: "https://elden-market24new.herokuapp.com/",
  },
  {
    //lasso roster
    id: 2,
    image: IMG2,
    title: "Lasso Roster",
    github: "https://github.com/bhodge166/lassoSportsPage",
    demo: "https://lasso-roster.herokuapp.com/",
  },
  {
    //pokedex
    id: 3,
    image: IMG3,
    title: "Pokemon TCG Finder",
    github: "https://github.com/eeoerkeedu/Pokemon_TCG_Finder",
    demo: "https://eeoerkeedu.github.io/Pokemon_TCG_Finder/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Projects</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
