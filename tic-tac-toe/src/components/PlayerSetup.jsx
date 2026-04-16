import React, { useState } from 'react';

/**
 * PlayerSetup component for initial name entry
 */
const PlayerSetup = ({ onStart }) => {
  const [playerX, setPlayerX] = useState('');
  const [playerO, setPlayerO] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onStart({
      x: playerX.trim() || 'Player X',
      o: playerO.trim() || 'Player O'
    });
  };

  return (
    <div className="setup-card">
      <h2 className="setup-title">Game Setup</h2>
      <form onSubmit={handleSubmit} className="setup-form">
        <div className="input-group">
          <label>Player X Name</label>
          <input
            type="text"
            value={playerX}
            onChange={(e) => setPlayerX(e.target.value)}
            placeholder="e.g. Krishna"
            maxLength={15}
          />
        </div>
        <div className="input-group">
          <label>Player O Name</label>
          <input
            type="text"
            value={playerO}
            onChange={(e) => setPlayerO(e.target.value)}
            placeholder="e.g. Rahul"
            maxLength={15}
          />
        </div>
        <button type="submit" className="start-button">
          Start Game
        </button>
      </form>
    </div>
  );
};

export default PlayerSetup;
