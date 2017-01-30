import React from "react";

import {Button} from "./Button.jsx"

const getButton = (n, color, click) => <Button key={n} c={n} color={color} click={click}/>
const build = (n, getColor, click) => n--? build(n, getColor, click).concat(getButton( n, getColor(n), click )):[]

export const ColorPicker = props =>
<table><tbody><tr>
  {build(5,props.getColor, props.click)}
</tr></tbody></table>;
