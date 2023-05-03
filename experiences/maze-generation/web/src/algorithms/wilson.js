import Maze from "./maze.js"

export default class WilsonMaze extends Maze {
  constructor(...args) {
    super(...args)

    this.tree = [0] // cells we've visited
    this.cleared = [] // cells to clear
  }

  nextStep() {
    let cells = this.cells

    let unvisitedCell = this.getRandomUnvisitedSquare()
    let path = [unvisitedCell] // Array<cellNumber>

    let reconnects = false

    while (!reconnects) {
      let possibleCells = this.getAllAdjacentSquares(path[path.length - 1])

      // Randomly choose the next cell out of the candidates
      let nextCell =
        possibleCells[Math.floor(Math.random() * possibleCells.length)]

      // If the next cell is part of the tree, connect it!
      if (this.tree.includes(nextCell)) {
        reconnects = true
        this.tree = this.tree.concat(path)

        path.reverse() // path from the UST, to the unvisited cell

        path.forEach((cell, i) => {
          if (i === 0) {
            this.addPath(nextCell, cell)
          } else {
            this.addPath(path[i - 1], cell)
          }
        })

        // Otherwise, there's a loop. Clear the looped portion of the path.
      } else if (path.includes(nextCell)) {
        let cellsToClear = path.slice(path.indexOf(nextCell) + 1, path.length)

        for (var i = 0; i < cellsToClear.length; i++) {
          cells[cellsToClear[i]] = 0
          this.cleared.push(cellsToClear[i])
        }

        path = path.slice(0, path.indexOf(nextCell) + 1) // leave the first "nextCell" in the path
      } else {
        path.push(nextCell)
        // so we can color it orange
        cells[nextCell] = "path"
      }
    }
  }
}
