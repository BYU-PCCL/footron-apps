import Maze from "./maze.js"

function swap(arr, i, j) {
  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

// TODO: use sets :)

export default class WilsonMaze extends Maze {
  constructor(...args) {
    super(...args)

    this.tree = [0] // cells we've visited

    this.unvisitedCells = [...Array(this.density * this.density)].map(
      (_, i) => i
    )

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

        // we're working backwards here
        this.path.forEach((cell, i) => {
          swap(
            this.unvisitedCells,
            this.tLength,
            this.unvisitedCells.indexOf(cell)
          )

          // console.log(this.unvisitedCells)

          if (i === 0) {
            this.addPath(nextCell, cell)
          } else {
            this.addPath(this.path[i - 1], cell)
          }
        })

        // Otherwise, there's a loop. Clear the looped portion of the path.
      } else if (this.path.includes(nextCell)) {
        let indexOfNextCell = this.path.indexOf(nextCell)

        let cellsToClear = this.path.splice(indexOfNextCell + 1)

        for (var i = 0; i < cellsToClear.length; i++) {
          cells[cellsToClear[i]] = "clear"
        }
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
