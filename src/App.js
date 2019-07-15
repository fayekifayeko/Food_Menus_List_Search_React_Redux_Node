import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DishesContainer from './components/DishesContainer';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Mommes redux</h2>
        </div>
        <hr />
        <DishesContainer />
      </div>
    );
  }
}

export default App;
