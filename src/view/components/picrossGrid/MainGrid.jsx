import React from "react"
import {LineHeader} from "./LineHeader.jsx"
import {ColumnHeader} from "./ColumnHeader.jsx"
import {InnerGrid} from "./InnerGrid.jsx"

export const MainGrid = props =>
<table><tbody>
  <tr>
    <td></td>
    <td>
      <ColumnHeader columns={props.grid.columns}/>
    </td>
  </tr>
  <tr>
    <td>
      <LineHeader lines={props.grid.lines}/>
    </td>
    <td>
      <InnerGrid data={props.grid.board} nbCol={props.grid.columns.length}/>
    </td>
  </tr>
</tbody></table>
