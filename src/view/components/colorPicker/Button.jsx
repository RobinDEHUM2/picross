import React from "react"
import {setColor} from "../../../controller/PicrossController.jsx"
import {getColor} from "../../../data/Colors.jsx"

export function Button (props){
  const cellStyle = {
    "width" : 50,
    "height" : 50,
    "backgroundColor" : getColor(props.color)
  }



  return  <li
    style={cellStyle}
    onMouseDown={e=>setColor(props.color)}
    onDragOver={e=>setColor(props.color)}
    unselectable="on"
  >
</li>;

}
