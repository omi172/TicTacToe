import React from "react";

const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="project">
        <a href="https://amitroy4556.github.io/SuperHeroHunter/">
          <h3>SuperHero Hunter</h3>
        </a>
        <p>
          This is a web app which is created using Html, CSS , javascript and
          superhero API . It is like a phone directory where we have to search a
          super hero and and each and every version of superhero is displayed.
          Here we can add any superhero which you like to your favourite list
        </p>
      </div>
      <div className="project">
        <a href="https://amitroy4556.github.io/SuperHeroHunter/">
          <h3>Tic Tac Toe</h3>
        </a>
        <p>
          The UI is designed using CSS so it is easy to create. In the game,
          Player-1 starts playing the game and both players make their moves in
          consecutive turns. The player who makes a straight 3-block chain wins
          the game. This game is built on the front-end using simple logic and
          validation checks only
        </p>
      </div>
    </section>
  );
};

export default Projects;
