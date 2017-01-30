import React from "react";
import Cell from "./Cell.jsx"

const Line = props => <tr>{props.line}</tr>;

const getLine = (columns, i, getColor) =>
<Line
  key={i}
  line={columns.map(e=><Cell key={i} value={i++} getColor={getColor}/>)}

/>;

const getGrid = (lines, columns, i, getColor) =>
<table><tbody>
  {
    lines.map(e=>columns.length*i++)
        .map(e=>getLine(columns,e, getColor))
  }
</tbody></table>;

export const Grid = props => getGrid(props.lines,props.columns,0, props.getColor);
