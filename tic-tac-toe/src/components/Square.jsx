import React from 'react';

/**
 * Enhanced Square component with click animations
 */
const Square = ({ value, onClick, isWinning }) => {
  return (
    <button
      className={`square ${value ? value.toLowerCase() : ''} ${isWinning ? 'winning' : ''}`}
      onClick={onClick}
      disabled={isWinning || !!value}
    >
      <span className="value-outer">
        <span className="value-inner">{value}</span>
      </span>
      <span className="click-feedback"></span>
    </button>
  );
};

export default Square;
