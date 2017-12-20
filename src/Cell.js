import React from 'react';
import Circle from './Circle';

function Cell(props){
  var style = {
    height:50,
    width:50,
    border:"1px solid black",
    backgroundColor:"yellow"
  }
  return (
  <div style = {style}>
    <Circle />
  </div>
  )
}

export default Cell;