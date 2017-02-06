import React, { Component } from 'react'
import {observer} from "mobx-react"
import {updateGrid} from "../../../controller/PicrossController.jsx"
import {getColor} from "../../../data/Colors.jsx"

@observer
export default class ColorPicker extends Component{

  update(i){
    updateGrid(i)
  }

  render() {
    const cellStyle = {
      "width" : 25,
      "height" : 25,
      "backgroundColor" : getColor(this.props.data)
    };


    return (
      <td
      style={cellStyle}
      onClick={e=>this.update(this.props.id)}>
      </td>
    )};
}
