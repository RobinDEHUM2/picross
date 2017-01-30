import React from "react";

export default class Cell extends React.Component{
  constructor(props){
    super(props);

    this.state = {
        color : "lightblue"
    }
  };

  click (c){
    this.setState({color: c});
  }

  render() {
    const cellStyle = {
      "width" : 25,
      "height" : 25,
      "backgroundColor" : this.state.color
    };


    return (
      <td
      style={cellStyle}
      onClick={e=>this.click(this.props.getColor)}>
      </td>
    )};

}
