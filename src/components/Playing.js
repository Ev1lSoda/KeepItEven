import React, { useState, useEffect } from 'react';

import '../css/playing.css';
import Matches from '../assets/match.png';
import ScoreScreen from './ScoreScreen';
// import Matches from '../assets/MATCHMATCH_500x.png';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import UpdateGameState from '../actions/UpdateGameState';

function Setup(props) {
  function handleChange(type, data) {
    props.UpdateGameState(type, data);
  }
  function getRandomInt(max) {
    let take = Math.floor(Math.random() * Math.floor(max + 1));
    return new Promise((res) => {
      res(take ? take : 1);
    });
  }
  const [matches, setMatches] = useState({
    player: 0,
    ai: 0,
    all: props.gameSetup.mfg * 2 + 1,
    take: 1,
  });
  const [isEnd, setIsEnd] = useState(false);
  useEffect(() => {
    if (props.gameSetup.firstTurn) {
      setTimeout(aiTake, 20);
    }
  }, []);
  useEffect(() => {
    if (matches.all === 0) {
      if (matches.player % 2 === 0) {
        handleChange('haveWon', true);
      } else if (matches.ai % 2 === 0) {
        handleChange('haveWon', false);
      }
      setTimeout(() => {
        setIsEnd(true);
      }, 10);
    }
  }, [matches.all]);
  function playerTake() {
    setMatches((prev) => {
      return {
        player: prev.player + (prev.take > prev.all ? prev.all : prev.take),
        ai: prev.ai,
        all: prev.all - (prev.take > prev.all ? prev.all : prev.take),
        take: prev.take > prev.all ? prev.all : prev.take,
      };
    });
    setTimeout(() => {
      if (matches.all >= 1) {
        aiTake();
      }
    }, 20);
  }
  async function aiTake() {
    let take = await getRandomInt(props.gameSetup.mpt);
    setTimeout(() => {
      if (take > matches.all) take = matches.all;
      setMatches((prev) => {
        return {
          player: prev.player,
          ai: prev.ai + (take > prev.all ? prev.all : take),
          all: prev.all - (take > prev.all ? prev.all : take),
          take: prev.take,
        };
      });
    }, 10);
  }
  return (
    <>
      <div id="score">
        <div id="player-score">{matches.player}</div>
        <div id="text-score">MATCHES</div>
        <div id="ai-score">{matches.ai}</div>
      </div>
      <div id="matches">
        <img src={Matches} width={130} height={80} alt="Matches" />
        &nbsp;✗&nbsp;{matches.all}
      </div>
      {isEnd ? (
        <ScoreScreen />
      ) : (
        <div className="take">
          <button
            onClick={() => {
              setTimeout(playerTake, 20);
            }}
          >
            Take!
          </button>
          <input
            type="number"
            min="1"
            max={props.gameSetup.mpt}
            value={matches.take}
            onChange={(e) => {
              let value = +e.target.value;
              if (value < 1) value = 1;
              else if (value > matches.all) value = matches.all;
              else if (value > props.gameSetup.mpt) value = props.gameSetup.mpt;
              setTimeout(() => {
                setMatches({
                  player: matches.player,
                  ai: matches.ai,
                  all: matches.all,
                  take: value,
                });
              }, 20);

              console.log(matches);
            }}
          />
        </div>
      )}
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
