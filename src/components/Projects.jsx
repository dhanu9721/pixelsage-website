import React, { useState } from 'react';
import '../css/Projects.css';
import {gameData} from '../assets/gameData'; // Array containing game details

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2>Our Developed Games</h2>
      <div className="projects-grid">
        {gameData.map((game, index) => (
          <div key={index} className="game-card">
            <div className="game-card-content">
              <img src={game.icon} alt={game.title} className="game-icon" />
              <h3>{game.title}</h3>
              <p>{game.description}</p>
              <a href={game.playLink} target="_blank" rel="noopener noreferrer" className="play-button">
                Play
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
