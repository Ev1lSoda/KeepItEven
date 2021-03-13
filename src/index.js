import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Game from './components/Game';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Game />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);
