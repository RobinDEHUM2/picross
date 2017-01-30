import React from "react";

export function Button (props){
  const cellStyle = {
    "width" : 50,
    "height" : 50,
    "backgroundColor" : props.color
  }

  return  <td
    style={cellStyle}
    onMouseDown={e=>props.click(props.c)}
    onDragOver={e=>props.click(props.c)}
    unselectable="on"
  >

  </td>;

}
