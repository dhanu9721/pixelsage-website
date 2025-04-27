// Games.jsx

import React, { useState, useEffect } from 'react';
import { ourGamesData } from '../assets/gameData';
import '../css/Games.css';

const Games = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedGame, setSelectedGame] = useState(null);
  const [isPortrait, setIsPortrait] = useState(false);

  const categories = ['All', 'Hypercasual', 'Casual', 'Slot', 'Multiplayer'];

  const openGame = (game) => {
    setSelectedGame(game);
    setIsPortrait(game.orientation === 'portrait'); // Check the orientation (portrait or landscape)
  };

  const closeGame = () => {
    setSelectedGame(null);
  };

  const filteredGames = ourGamesData['All'].filter(game =>
    selectedCategory === 'All' || game.category === selectedCategory
  );

  useEffect(() => {
    if (selectedGame) {
      document.body.style.overflow = 'hidden'; // prevent background scroll
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [selectedGame]);

  return (
    <div className="games-page">
      <h1>Our Games</h1>

      <div className="category-buttons">
        {categories.map((cat, idx) => (
          <button
            key={idx}
            className={selectedCategory === cat ? 'active' : ''}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="games-grid">
        {filteredGames.map((game, idx) => (
          <div key={idx} className="game-card" onClick={() => openGame(game)}>
            <img src={game.icon} alt={game.name} className="game-icon" />
            <h3>{game.name}</h3>
          </div>
        ))}
      </div>

      {/* Modal Iframe */}
      {selectedGame && (
        <div className="game-modal">
          <div className={`iframe-wrapper ${isPortrait ? 'portrait' : 'landscape'}`}>
            <button className="close-button" onClick={closeGame}>X</button>
            <iframe
              src={selectedGame.link}
              title={selectedGame.name}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default Games;
