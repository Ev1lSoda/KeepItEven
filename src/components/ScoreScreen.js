import React from 'react';

import '../css/scorescreen.css';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

function ScoreScreen(props) {
  console.log(props.gameSetup);
  const win = `Victory!`;
  const lose = `Defeat`;
  return (
    <div id="scorescreen" className={props.results ? 'win' : 'lose'}>
      {props.results ? win : lose}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    results: state.gameState.haveWon,
  };
}

export default connect(mapStateToProps)(ScoreScreen);
