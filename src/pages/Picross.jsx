import React from "react";
import {Grid} from "../components/picrossGrid/MainGrid.jsx"
import {getColor} from "../controller/PicrossColors.jsx"
import {ColorPicker} from "../components/colorPicker/ColorPicker.jsx"
import {getText} from "../controller/TestFetch.jsx"
import {postText} from "../controller/TestFetch.jsx"




export default class Picross extends React.Component{
  constructor(props){
    super(props);

    this.state = {
        color : getColor(1)
    }
  }

  render() {
    const click = c => {
      this.setState({color : getColor(c)});
    }
    return (
      <div>
        <Grid
          lines={[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}
          columns={[0,0,0,0,0,0,0,0,0,0]}
          getColor={this.state.color}
        />
        <div>{this.state.color}</div>
        <ColorPicker colors={5} getColor={getColor} click={click}/>
        <button onClick={getText} >CLICK GET</button>
        <button onClick={postText} >CLICK POST</button>
      </div>
    );
  }
}
