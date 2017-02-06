import React from 'react'
import {UnderConstruction} from '../../pages/UnderConstruction.jsx'
import {SimpleGrid} from "../picrossGrid/SimpleGrid.jsx"


class Page {
  constructor(name, page){
    this.name = name
    this.page = page
  }
}
var menu = [
  new Page("loby",<UnderConstruction />),
  new Page("picross",<UnderConstruction />),
  new Page("profile",<UnderConstruction />),
  new Page("about",<UnderConstruction />)
]




export const NavigationBar = props =>
<ul id="navMenu">
  {
    menu.map(page=>
      <li
        onClick = {e=>props.func(page.page)}>
        {page.name}
      </li>
    )
  }
</ul>
