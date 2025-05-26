import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ourGamesData } from '../assets/gameData';
import '../css/GameDetail.css';

const GameDetail = () => {
  const { id } = useParams();
  const game = ourGamesData['All'].find(g => g.id.toString() === id);
  const navigate = useNavigate();

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;

    // Initially allow scroll
    document.body.style.overflow = 'auto';

    const handleFullscreenChange = () => {
      const isFullscreen =
        document.fullscreenElement ||
        document.webkitFullscreenElement ||
        document.mozFullScreenElement ||
        document.msFullscreenElement;

      if (!isFullscreen) {
        // Hide scrollbars briefly to avoid flicker
        document.body.style.overflow = 'hidden';
        setTimeout(() => {
          document.body.style.overflow = 'auto';
        }, 100);
      }
    };

    // Add fullscreen listeners
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('mozfullscreenchange', handleFullscreenChange);
    document.addEventListener('MSFullscreenChange', handleFullscreenChange);

    // Cleanup
    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('mozfullscreenchange', handleFullscreenChange);
      document.removeEventListener('MSFullscreenChange', handleFullscreenChange);
    };
  }, []);

  if (!game) return <p>Game not found.</p>;

  return (
    <div className="game-detail-page">
      <button className="back-button" onClick={() => navigate(-1)}>← Back</button>
      <h1>{game.name}</h1>
      <p>Category: {game.category}</p>
      <p>Description: {game.description || "This is a great game from PixelSage!"}</p>

      <div className={`game-frame-container ${game.orientation}`}>
        <iframe
          src={game.link}
          title={game.name}
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default GameDetail;
