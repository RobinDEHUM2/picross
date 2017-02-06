import React from "react"
import {Button} from "./Button.jsx"

var buildArray = (n) =>
n--? buildArray(n).concat([<Button key={n} color={n}/>]):[]


export const ColorPicker = props =>
<ul>
  {buildArray(props.colors)}
</ul>
