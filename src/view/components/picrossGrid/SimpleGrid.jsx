import React from "react"

export const Line = props =>
<tr>
  {props.data}
</tr>
export const Cell = props =>
<td>
  {props.data}
</td>
export const SimpleGrid = props =>
<table><tbody>
  {props.data}
</tbody></table>

var makeLine = (id, data) =>
<Line
  key={id}
  data={data}
/>

var  makeCell = (id, data) =>
<Cell
  key={id}
  data={data}
/>

var  buildLine = (name, data, i, func) =>
makeLine(name, func(data, i, makeCell))



export const  buildGrid = (data, func) =>
  <SimpleGrid data={func(data,buildLine)}/>
