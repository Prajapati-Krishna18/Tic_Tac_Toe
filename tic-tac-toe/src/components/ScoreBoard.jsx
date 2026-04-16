import React from 'react';

/**
 * ScoreBoard component to display player wins and draws
 */
const ScoreBoard = ({ players, scores, activePlayer }) => {
  return (
    <div className="scoreboard">
      <div className={`score-item x ${activePlayer === 'X' ? 'active' : ''}`}>
        <span className="player-label">{players.x}</span>
        <span className="score-value">{scores.x}</span>
      </div>
      <div className="score-item draw">
        <span className="player-label">Draws</span>
        <span className="score-value">{scores.draw}</span>
      </div>
      <div className={`score-item o ${activePlayer === 'O' ? 'active' : ''}`}>
        <span className="player-label">{players.o}</span>
        <span className="score-value">{scores.o}</span>
      </div>
    </div>
  );
};

export default ScoreBoard;
