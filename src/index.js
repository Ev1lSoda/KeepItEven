import React from 'react';
import ReactDOM from 'react-dom';

import './css/index.css';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';

import Header from './components/Header';
import Footer from './components/Footer';
import Game from './components/Game';

const theStore = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Provider store={theStore}>
      <Game />
    </Provider>
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);
