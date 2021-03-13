import React from 'react';
import '../css/game.css';

function Game(props) {
  return (
    <div id="game">
      <div id="">
        <h1>This is GAME BOX!</h1>
      </div>
      <form>
        <label>matches in game: </label>
        <input type="number" />
        <label>matches in game: </label>
        <input type="number" />
      </form>
    </div>
  );
}

export default Game;
