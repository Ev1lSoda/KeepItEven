import React from 'react';

import playerPhoto from '../assets/question_mark.png';
import AIPhoto from '../assets/AI_hard.png';
import '../css/game.css';

function Game(props) {
  return (
    <div id="game">
      <div id="player-bar">
        <div className="player">
          <img src={playerPhoto} alt="player photo" />
          <div>YOU</div>
        </div>
        <div id="vs">
          <p>VS</p>
        </div>
        <div className="player">
          <img src={AIPhoto} alt="player photo" />
          <div>Hardest AI</div>
        </div>
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
