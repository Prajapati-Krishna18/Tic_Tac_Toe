import React, { useState, useEffect } from 'react';
import Square from './Square';
import PlayerSetup from './PlayerSetup';
import ScoreBoard from './ScoreBoard';
import { calculateWinner } from '../utils/calculateWinner';
import '../styles/TicTacToe.css';

/**
 * Main TicTacToe Component with Naming Support and Scoreboard
 */
const TicTacToe = () => {
  // Game & Naming State
  const [gameStarted, setGameStarted] = useState(false);
  const [players, setPlayers] = useState({ x: 'Player X', o: 'Player O' });
  
  // Board State
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  
  // Scoreboard State
  const [scores, setScores] = useState({ x: 0, o: 0, draw: 0 });

  // Winner calculation
  const result = calculateWinner(squares);
  const winner = result?.winner;
  const winningLine = result?.line || [];
  const isDraw = !winner && squares.every(sq => sq !== null);

  // Update scores when game ends
  useEffect(() => {
    if (winner) {
      setScores(prev => ({ ...prev, [winner.toLowerCase()]: prev[winner.toLowerCase()] + 1 }));
    } else if (isDraw) {
      setScores(prev => ({ ...prev, draw: prev.draw + 1 }));
    }
  }, [winner, isDraw]);

  // Handlers
  const handleStart = (names) => {
    setPlayers(names);
    setGameStarted(true);
  };

  const handleClick = (i) => {
    if (squares[i] || winner) return;
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? 'X' : 'O';
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  };

  const resetBoard = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  };

  const resetScores = () => {
    setScores({ x: 0, o: 0, draw: 0 });
    resetBoard();
  };

  const changePlayers = () => {
    setGameStarted(false);
    resetScores();
  };

  // Status message logic
  let status;
  if (winner) {
    status = `🎉 ${winner === 'X' ? players.x : players.o} Wins!`;
  } else if (isDraw) {
    status = "It's a Draw";
  } else {
    status = `${xIsNext ? players.x : players.o}'s Turn`;
  }

  if (!gameStarted) {
    return (
      <div className="game-container">
        <div className="game-wrapper">
          <PlayerSetup onStart={handleStart} />
        </div>
      </div>
    );
  }

  return (
    <div className="game-container">
      <div className="game-wrapper">
        <ScoreBoard 
          players={players} 
          scores={scores} 
          activePlayer={xIsNext ? 'X' : 'O'} 
        />

        <div className="game-card">
          <h2 className={`status-text ${winner ? 'winner-anim' : ''}`}>
            {status}
          </h2>

          <div className="game-board">
            {squares.map((square, i) => (
              <Square
                key={i}
                value={square}
                onClick={() => handleClick(i)}
                isWinning={winningLine.includes(i)}
              />
            ))}
          </div>

          <div className="controls">
            <button className="control-btn restart" onClick={resetBoard}>
              New Game
            </button>
            <button className="control-btn reset-scores" onClick={resetScores}>
              Reset Scores
            </button>
            <button className="control-btn change-players" onClick={changePlayers}>
              Change Players
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicTacToe;
