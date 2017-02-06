import Grid from '../data/Grid.jsx'
var grid = Grid

var color = 2;

export const getGrid = () => grid
export const setColor = n => color = n

export const updateGrid = i =>{
  grid.board[i]=color
}

export const setTestGrid = function(){
  grid.id = 0
  grid.name = "default test grid"
  grid.columns=[[1,0,0,4],[3,0,0,2],[3,1,1,0],[3,0,0,2],[1,0,0,4]]
  grid.lines=[[0,0,1,4],[2,1,0,2],[5,0,0,0],[3,0,0,2],[1,0,0,4]]
  grid.board=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]

}

export const testUpdate = function(){
  grid.sTest[0]["exit"]=4
}
