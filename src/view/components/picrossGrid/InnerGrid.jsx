import React from "react";
import Cell2 from "./Cell2.jsx"
import {SimpleGrid} from "./SimpleGrid.jsx"
import {Line} from "./SimpleGrid.jsx"

var getCell = (id, data) => <Cell2 key={id} id={id} data={data}/>

var getLine = (data, begin, end)=>
<Line
  key={"igl"+begin}
  data={
    data.slice(begin, end)
        .map((e,i)=>getCell(i+begin, e))
  }
/>

var grid = (data, nbCol) =>
<SimpleGrid
  data={
    data.slice(0,data.length/nbCol)
    .map((e,i)=>getLine(data,i*nbCol,(i+1)*(nbCol)))
  }
/>

export const InnerGrid = props => grid(props.data, props.nbCol)
