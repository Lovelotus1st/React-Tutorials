import React, { useState } from "react";
import Confetti from "react-confetti";

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState(null);
  const sleep = ms => new Promise(r => setTimeout(r, ms));

  const handleClick = (index) => {
    if (board[index] || winner) return;
    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXNext);
    const gameWinner = calculateWinner(newBoard);
    if (gameWinner) {
      setWinner(gameWinner);
      sleep(5000).then(() => {
        alert(`Player ${gameWinner} wins!`);
        resetGame();
      });
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
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setWinner(null);
  };

  return (
    <div className="TicTacToe">
      <h2>Tic-Tac-Toe</h2>
      {winner && <Confetti />}
      <p>{winner ? `Winner: ${winner}` : `Next player: ${isXNext ? "X" : "O"}`}</p>
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
      <button onClick={resetGame} className="reset-button" style={{ marginTop: "20px" }}>
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