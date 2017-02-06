import React from "react"
import {observer} from "mobx-react"
import {setTestGrid} from "../../controller/PicrossController.jsx"
import {testUpdate} from "../../controller/PicrossController.jsx"
import {MainGrid} from "../components/picrossGrid/MainGrid.jsx"
import {ColorPicker} from "../components/colorPicker/ColorPicker.jsx"

@observer
export default class Test extends React.Component{
  render(){
    return <div>
      <div>
        id = {this.props.grid.id}
      </div>
      <div>
        name = {this.props.grid.name}
      </div>
      <div>
        lines = {this.props.grid.lines}
      </div>
      <div>
        columns = {this.props.grid.columns}
      </div>
      <div>
        grid = {this.props.grid.board}
      </div>
      <div>
        Test = {this.props.grid.sTest}
      </div>
      <div>
        <MainGrid grid={this.props.grid}/>
      </div>
      <button onClick={setTestGrid} >FAKE GET</button>
      <button onClick={testUpdate} >Test Update</button>
      <ColorPicker colors={this.props.grid.columns[0].length+1}/>
    </div>
  }
}
