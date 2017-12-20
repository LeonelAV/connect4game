import React from 'react';

function Circle(props){
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
