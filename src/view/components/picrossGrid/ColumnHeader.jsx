import {buildGrid} from "./SimpleGrid.jsx"

var getLine = (columns,j, func) =>
    columns.map((e,i)=>func("chc"+i+j, columns[i][j]))

var getGrid = (data, func) =>
  data[0].map((e,j)=>func("chl"+j, data, j, getLine))

export const ColumnHeader = props =>
buildGrid(
  props.columns,
  getGrid
)
