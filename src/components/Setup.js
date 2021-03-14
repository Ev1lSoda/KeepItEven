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
          AI goes first:
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
        <label>Factor for matches in game(2n+1):</label>
        <input
          type="number"
          min="3"
          max="1010"
          value={props.gameSetup.mfg}
          onChange={(e) => {
            let value = +e.target.value;
            if (value < 3) value = 3;
            else if (value > 1010) value = 1010;
            handleChange('mfg', value);
          }}
        />
      </div>
      <div className="setup">
        <label>Max number of matches per turn(m):</label>
        <input
          type="number"
          min="0"
          max={props.gameSetup.mfg - 1}
          value={props.gameSetup.mpt}
          onChange={(e) => {
            let value = +e.target.value;
            if (value < 3) value = 3;
            else if (value > props.gameSetup.mfg - 1) value = props.gameSetup.mfg - 1;
            handleChange('mpt', value);
          }}
        />
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
