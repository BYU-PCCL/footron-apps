import Maze from "./maze.js"

export default class BacktrackerMaze extends Maze {
  constructor(...args) {
    super(...args)

    this.id = "backtracker"
    this.history = [0] // a stack
  }

  async nextStep() {
    await this.delay()
    let history = this.history

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
}
