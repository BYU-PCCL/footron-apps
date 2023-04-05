import Maze from "./maze.js"

export default class RandomTraversalMaze extends Maze {
  constructor(...args) {
    super(...args)

    this.visitedCells = [0]
  }

  getNextCell() {
    let possibleNextCells = [] // array of [parent, next]

    // for each visited cell, if it has any adjacent cells, add each adjacent cell as a possible candidate
    this.visitedCells.forEach((parent) => {
      let nextFromHere = this.getAdjacentSquares(parent)

      nextFromHere.forEach((next) => {
        possibleNextCells.push([parent, next])
      })
    })

    return possibleNextCells[
      Math.floor(Math.random() * possibleNextCells.length)
    ]
  }

  async generate() {
    while (this.cells.includes(0)) {
      await this.takeStep()

      let [nextCellParent, nextCell] = this.getNextCell()

      // add the cell to the tree
      this.addPath(nextCellParent, nextCell)

      // add the cell to the visited cells array
      this.visitedCells.push(nextCell)
    }

    this.solveRecursively()
    this.onFinish()
  }
}
