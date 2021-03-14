import React from 'react';

import '../css/playing.css';
import Matches from '../assets/match.png';
import ScoreScreen from './ScoreScreen';
// import Matches from '../assets/MATCHMATCH_500x.png';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import UpdateGameState from '../actions/UpdateGameState';

function Setup(props) {
  console.log(props.gameSetup);
  function handleClick() {
    props.UpdateGameState('new status ololololooo');
    console.log(props.gameSetup);
  }
  return (
    <>
      <div id="score">
        <div id="player-score">0</div>
        <div id="text-score">SCORE</div>
        <div id="ai-score">0</div>
      </div>
      <div id="matches">
        <img src={Matches} width={130} height={80} alt="Matches" />
        &nbsp;X&nbsp;69
      </div>
      <ScoreScreen />
      {/* <div className="take">
        <button>Take!</button>
        <input type="number" min="1" value={3} />
      </div> */}
    </>
  );
}

function mapStateToProps(state) {
  return {
    gameSetup: state.gameState,
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

export default connect(mapStateToProps, mapDispatchToProps)(Setup);
