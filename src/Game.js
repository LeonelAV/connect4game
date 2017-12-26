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
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(row, col){
    console.log("row: " + row + " | col: " + col)
    console.log(this.state.cells)
    var temp = [];
    for (let i=0; i < 6; i++){
      temp.push(this.state.cells[i].slice())
    }
    temp[row][col] = 1;
    this.setState({cells:temp})
  }

  render() {
    return (
      <div>
        <h1>Blacks Turn</h1>
        <Board cells={this.state.cells} handleClick={this.handleClick}/>
        <button>Restart</button>
      </div>
    );
  }
}

export default Game;
