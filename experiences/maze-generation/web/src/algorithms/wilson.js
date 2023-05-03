import Maze from "./maze.js"

export default class WilsonMaze extends Maze {
  constructor(...args) {
    super(...args)

    this.tree = [0] // cells we've visited
    this.cleared = [] // cells to clear

    this.reconnected = false
    this.path = [this.getRandomUnvisitedSquare()] // Array<cellNumber>
  }

  nextStep() {
    let cells = this.cells

    if (!this.reconnected) {
      let possibleCells = this.getAllAdjacentSquares(
        this.path[this.path.length - 1]
      )

      // Randomly choose the next cell out of the candidates
      let nextCell =
        possibleCells[Math.floor(Math.random() * possibleCells.length)]

      // If the next cell is part of the tree, connect it!
      if (this.tree.includes(nextCell)) {
        this.reconnected = true
        this.tree = this.tree.concat(this.path)

        this.path.reverse() // path from the UST, to the unvisited cell

        this.path.forEach((cell, i) => {
          if (i === 0) {
            this.addPath(nextCell, cell)
          } else {
            this.addPath(this.path[i - 1], cell)
          }
        })

        // Otherwise, there's a loop. Clear the looped portion of the path.
      } else if (this.path.includes(nextCell)) {
        let cellsToClear = this.path.slice(
          this.path.indexOf(nextCell) + 1,
          this.path.length
        )

        for (var i = 0; i < cellsToClear.length; i++) {
          cells[cellsToClear[i]] = 0
          this.cleared.push(cellsToClear[i])
        }

        this.path = this.path.slice(0, this.path.indexOf(nextCell) + 1) // leave the first "nextCell" in the path
      } else {
        this.path.push(nextCell)
        // so we can color it orange
        cells[nextCell] = "path"
      }
    } else {
      this.path = [this.getRandomUnvisitedSquare()] // Array<cellNumber>
      this.reconnected = false
    }
  }
}
