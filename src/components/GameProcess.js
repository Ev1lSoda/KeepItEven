import React from 'react';

import Playing from './Playing';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import UpdateGameState from '../actions/UpdateGameState';

function GameProcess(props) {
  console.log(props.gameSetup);
  function handleClick() {
    props.UpdateGameState('new status ololololooo');
    console.log(props.gameSetup);
  }
  return (
    <>
      <Playing />
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

export default connect(mapStateToProps, mapDispatchToProps)(GameProcess);
