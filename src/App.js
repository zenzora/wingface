import React, { Component } from 'react';
import logo from './hen-head.svg';
import './App.css';
import topWingSpots from './topWingSpots.json';

const listItems = topWingSpots.map((spot) =>
    <li key={spot.name}>{spot.town}<strong>{spot.name}</strong></li>
);


class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Wingface</h2>
        </div>
        <h2>
          Our Favorite Wing Spots
        </h2>
          <ul className="chart">
              {listItems}
          </ul>
      </div>
    );
  }
}

export default App;
