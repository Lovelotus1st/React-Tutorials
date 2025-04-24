import React, { useState } from "react";

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null)); // Game board
  const [isXNext, setIsXNext] = useState(true); // Track who's next
  const [winner, setWinner] = useState(null); // Store the winner

  const handleClick = (index) => {
    if (board[index] || winner) return; // Prevent further clicks if square is filled or a winner exists
    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O"; // Update the board
    setBoard(newBoard);
    setIsXNext(!isXNext); // Switch turns
    const gameWinner = calculateWinner(newBoard);
    setWinner(gameWinner); // Check for winner
    if (!gameWinner && newBoard.every((square) => square !== null)) {
      // Auto-reset for a draw
      setTimeout(resetGame, 1000); // Slight delay before reset
    }
  };

  const calculateWinner = (board) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let line of lines) {
      const [a, b, c] = line;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null)); // Reset board
    setIsXNext(true); // Reset to X's turn
    setWinner(null); // Clear winner
  };

  const status = winner
    ? `Winner: ${winner}`
    : board.every((square) => square !== null)
    ? "Draw! Resetting..."
    : `Next player: ${isXNext ? "X" : "O"}`;

  return (
    <div className="TicTacToe">
      <h2>Tic-Tac-Toe</h2>
      <p>{status}</p>
      <div style={boardStyle}>
        {board.map((value, index) => (
          <button
            key={index}
            onClick={() => handleClick(index)}
            style={squareStyle}
          >
            {value}
          </button>
        ))}
      </div>
      <button onClick={resetGame}  className="reset-button" style={{ marginTop: "20px" }}>
        Reset Game
      </button>
    </div>
  );
};

const boardStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 50px)",
  gap: "5px",
  justifyContent: "center",
};

const squareStyle = {
  width: "50px",
  height: "50px",
  fontSize: "20px",
  textAlign: "center",
};



export default TicTacToe;