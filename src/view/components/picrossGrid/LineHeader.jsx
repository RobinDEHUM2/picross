import {buildGrid} from "./SimpleGrid.jsx"

var getLine = (e,i, func) =>
  e.map((f,j)=>func("lhc"+i+j,f))

var getGrid = (data, func) => data.map((e,i)=>func("lhl"+i,e,i,getLine))

export const LineHeader = props =>
buildGrid(
  props.lines,
  getGrid
)
