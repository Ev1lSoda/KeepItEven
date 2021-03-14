import React from 'react';

import '../css/setup.css';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import UpdateGameState from '../actions/UpdateGameState';

function Setup(props) {
  function handleChange(type, data) {
    props.UpdateGameState(type, data);
  }
  return (
    <>
      <div className="setup setup-first">
        <label>
          AI go first:
          <input
            type="checkbox"
            className="checkmark"
            defaultChecked={props.gameSetup.firstTurn}
            onChange={() => {
              handleChange('firstTurn', !props.gameSetup.firstTurn);
            }}
          />
        </label>
      </div>
      <div className="setup">
        <label>Number of matches for game:</label>
        <input
          type="number"
          min="0"
          max="1010"
          placeholder={props.gameSetup.mfg}
          onChange={(e) => {
            handleChange('mfg', e.target.value);
          }}
        />
      </div>
      <div className="setup">
        <label>Number of matches per turn:</label>
        <input type="number" min="0" max={props.gameSetup.mfg - 1} value={props.gameSetup.mpt} />
      </div>
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
