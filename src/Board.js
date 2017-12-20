import React from 'react';
import Row from './Row';

function Board(props){
  var rows = []
  for (let i=5; i>=0; i--){
    rows.push(<Row />)
  }
  return (
    <div>
      {rows}
    </div>
  )
}

export default Board;