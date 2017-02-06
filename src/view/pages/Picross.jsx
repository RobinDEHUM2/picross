import React from "react"
import {observer} from "mobx-react"
import {setTestGrid} from "../../controller/PicrossController.jsx"
import {getGrid} from "../../controller/PicrossController.jsx"
import {MainGrid} from "../components/picrossGrid/MainGrid.jsx"
import {ColorPicker} from "../components/colorPicker/ColorPicker.jsx"

@observer
export default class Picross extends React.Component{
  render(){
    return <div>
      <MainGrid grid={getGrid()}/>
      <ColorPicker colors={getGrid().columns[0].length+1}/>
      <button onClick={setTestGrid} >FAKE GET</button>
    </div>
  }
}
