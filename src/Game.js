import React, { Component } from 'react';
import Board from './Board';

class Game extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div>
        <h1>Blacks Turn</h1>
        <Board />
        <button>Restart</button>
      </div>
    );
  }
}

export default Game;
