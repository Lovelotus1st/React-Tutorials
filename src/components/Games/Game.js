import React from "react";
import TicTacToe from "./TicTacToe";
import ConnectFour from "./ConnectFour";

const Game = () => {
  return (
    <div style={gameContainerStyle}>
      <div>
        <TicTacToe />
      </div>
      <div>
        <ConnectFour />
      </div>
    </div>
  );
};

const gameContainerStyle = {
  textAlign: "center",
  marginTop: "20px",
}; 

export default Game;