import React, { useState } from "react";

const ConnectFour = () => {
  const rows = 6;
  const columns = 7;
  const [board, setBoard] = useState(Array(rows).fill(null).map(() => Array(columns).fill(null)));
  const [currentPlayer, setCurrentPlayer] = useState("Red");
  const [winner, setWinner] = useState(null);

  const dropPiece = (colIndex) => {
    if (winner) return; // Stop if there's already a winner
    const newBoard = [...board];
    for (let row = rows - 1; row >= 0; row--) {
      if (!newBoard[row][colIndex]) {
        newBoard[row][colIndex] = currentPlayer;
        setBoard(newBoard);
        const gameWinner = checkWinner(newBoard, row, colIndex, currentPlayer);
        if (gameWinner) {
          setWinner(gameWinner);
        } else {
          setCurrentPlayer(currentPlayer === "Red" ? "Yellow" : "Red"); // Switch players
        }
        return;
      }
    }
    alert("Column is full! Try another one.");
  };

  const checkWinner = (board, row, col, player) => {
    const directions = [
      [[0, 1], [0, -1]], // Horizontal
      [[1, 0], [-1, 0]], // Vertical
      [[1, 1], [-1, -1]], // Diagonal \
      [[1, -1], [-1, 1]], // Diagonal /
    ];
    for (let [[x1, y1], [x2, y2]] of directions) {
      let count = 1;
      count += countPieces(board, row, col, x1, y1, player);
      count += countPieces(board, row, col, x2, y2, player);
      if (count >= 4) return player; // Connect Four
    }
    return null;
  };

  const countPieces = (board, row, col, dx, dy, player) => {
    let count = 0;
    let r = row + dx;
    let c = col + dy;
    while (r >= 0 && r < rows && c >= 0 && c < columns && board[r][c] === player) {
      count++;
      r += dx;
      c += dy;
    }
    return count;
  };

  const resetGame = () => {
    setBoard(Array(rows).fill(null).map(() => Array(columns).fill(null)));
    setCurrentPlayer("Red");
    setWinner(null);
  };

  return (
    <div className="ConnectFour">
      <h2>Connect Four</h2>
      <p>{winner ? `Winner: ${winner}` : `Current Player: ${currentPlayer}`}</p>
      <div style={boardStyle}>
        {board.map((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              onClick={() => dropPiece(colIndex)}
              style={{
                ...cellStyle,
                backgroundColor: cell ? (cell === "Red" ? "#e74c3c" : "#f1c40f") : "#ecf0f1",
              }}
            />
          ))
        )}
      </div>
      <button onClick={resetGame} className="reset-button">
        Reset Game
      </button>
    </div>
  );
};

const boardStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(7, 50px)",
  gap: "5px",
  justifyContent: "center",
  margin: "20px auto",
};

const cellStyle = {
  width: "50px",
  height: "50px",
  borderRadius: "50%",
  cursor: "pointer",
  border: "2px solid #2c3e50",
};

export default ConnectFour;