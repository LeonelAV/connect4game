import React from 'react';

function Circle(props){
  var color = "white"
  if  (props.cell == 1){
    color = "black"
  }
  else if (props.cell == 2) {
    color = "red"
  }
  var style = {
    backgroundColor:"white",
    border:"1px solid black", 
    borderRadius: "100%",
    paddingTop:"98%"
  }
  return (
    <div style = {style}></div>
  )
}

export default Circle;
