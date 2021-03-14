import React from 'react';

import '../css/scorescreen.css';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import UpdateGameState from '../actions/UpdateGameState';

function ScoreScreen(props) {
  console.log(props.gameSetup);
  const win = `Victory!`;
  const lose = `Defeat`;
  //   function handleClick() {
  //     props.UpdateGameState('new status ololololooo');
  //     console.log(props.gameSetup);
  //   }
  return (
    <div id="scorescreen" className="win">
      {win}
    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(ScoreScreen);
