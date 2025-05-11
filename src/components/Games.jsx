// Games.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ourGamesData } from '../assets/gameData';
import '../css/Games.css';

const Games = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const navigate = useNavigate();

  const categories = ['All', 'Hypercasual', 'Casual', 'Slot', 'Multiplayer'];

  const filteredGames = ourGamesData['All'].filter(game =>
    selectedCategory === 'All' || game.category === selectedCategory
  );

   const openGame = (game) => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      window.location.href = game.link;
    } else {
      navigate(`/game-details/${game.id}`);
    }
  };

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
    </div>
  );
};

export default Games;
