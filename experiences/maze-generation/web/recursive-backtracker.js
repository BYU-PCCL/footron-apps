import Maze from "./maze.js"

export default class BacktrackerMaze extends Maze {
  constructor(...args) {
    super(...args)

    this.history = [0] // a stack
  }

  async generate() {
    let cells = this.cells,
      history = this.history

    // While not all cells in the grid have been visited
    while (cells.includes(0)) {
      await this.takeStep()

      let currentCell = history[history.length - 1]

      let possibleCells = this.getAdjacentSquares(currentCell)

      // If there are possible next cells to add to the grid from the current position
      if (possibleCells.length > 0) {
        // Randomly choose the next cell out of the candidates
        let nextCell =
          possibleCells[Math.floor(Math.random() * possibleCells.length)]

        // Add the path
        this.addPath(currentCell, nextCell)

        // Add cell to history
        history.push(nextCell)
      } else {
        // No possible squares from the current cell, backtracking
        history.pop()
      }
    }

    // Though this is redundant, it will be more visually consistent with the other mazes
    this.solveRecursively()
    this.onFinish()
  }
}
