/**
 * Utility function to calculate the winner of a Tic Tac Toe game.
 * @param {Array} squares - Array of 9 square values (X, O, or null)
 * @returns {Object|null} - Null if no winner, otherwise an object with winner symbol and winning line indices.
 */
export const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2], // Horizontal
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6], // Vertical
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8], // Diagonal
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return {
        winner: squares[a],
        line: [a, b, c],
      };
    }
  }

  return null;
};
