import React from 'react';

import playerPhoto from '../assets/question_mark.png';
import AIPhoto from '../assets/AI_hard.png';
import '../css/game.css';

import Setup from './Setup';
import Playing from './Playing';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import UpdateGameState from '../actions/UpdateGameState';

function Game(props) {
  console.log(props.gameSetup);
  function handleChange(type, data) {
    props.UpdateGameState(type, data);
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
      <div id="game-process">{props.isPlaying ? <Playing /> : <Setup />}</div>
      <div id="game-controller">
        <button
          className="goBtn"
          onClick={() => {
            if (props.goBtn === 'Start ❯❯') {
              handleChange('goBtn', '❮❮ Go Back');
              handleChange('isPlaying', true);
              if (props.all.mpt >= props.all.mfg) handleChange('mpt', props.all.mfg - 1);
            } else {
              handleChange('goBtn', 'Start ❯❯');
              handleChange('isPlaying', false);
            }
          }}
        >
          {props.goBtn}
        </button>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    all: state.gameState,
    goBtn: state.gameState.goBtn,
    isPlaying: state.gameState.isPlaying,
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
