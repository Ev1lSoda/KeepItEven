import React from 'react';

import playerPhoto from '../assets/question_mark.png';
import AIPhoto from '../assets/AI_hard.png';
import '../css/game.css';

import Setup from './Setup';
import GameProcess from './GameProcess';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import UpdateGameState from '../actions/UpdateGameState';

function Game(props) {
  console.log(props.gameSetup);
  function handleClick() {
    props.UpdateGameState('new status ololololooo');
    console.log(props.gameSetup);
  }
  return (
    <div id="game">
      <div id="player-bar">
        <div className="player">
          <img src={playerPhoto} alt="player" />
          <div>YOU</div>
        </div>
        <div id="vs">VS</div>
        <div className="player ai">
          <img src={AIPhoto} alt="AI" />
          <div>AI:Hard</div>
        </div>
      </div>
      <div id="game-process">
        <Setup />
        {/* <GameProcess /> */}
      </div>
      <div id="game-controller">
        <button className="goBtn">{props.goBtn}</button>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    goBtn: state.gameState.goBtn,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      UpdateGameState,
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);
