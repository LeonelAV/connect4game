import React, { Component } from 'react';
import Board from './Board';

class Game extends Component {
  constructor(props){
    super(props);

    var cells = []
    for(let i=0; i<6; i++){
      cells.push(new Array(7).fill(0))
    }

    this.state = {player: false, cells:cells, winner:0}
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
