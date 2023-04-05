// Similar to a random traversal algorithm, but the cells on the frontier have different weights!

import Maze from "./maze.js"

export default class PrimMaze extends Maze {
  constructor(...args) {
    super(...args)

    this.visitedCells = [0]
    this.cellWeights = [...Array(this.density * this.density)].map((_, i) => [])

    // Initialize random weights
    for (var i = 0; i < this.cells.length; i++) {
      let adjacentCells = this.getAllAdjacentSquares(i)
      for (var j = 0; j < adjacentCells.length; j++) {
        if (this.cellWeights[adjacentCells[j]][i]) {
          // if we've already stored it, just copy it
          this.cellWeights[i][adjacentCells[j]] =
            this.cellWeights[adjacentCells[j]][i]
        } else {
          this.cellWeights[i][adjacentCells[j]] = Math.random()
        }
      }
    }
  }

  getNextCell() {
    let possibleNextCells = [] // array of [parent, next]

    let nextCellIndex // update this as needed
    let nextCellWeight = Infinity
    // for each visited cell, if it has any adjacent cells, add each adjacent cell as a possible candidate

    this.visitedCells.forEach((parent) => {
      let nextFromHere = this.getAdjacentSquares(parent)

      nextFromHere.forEach((next) => {
        let weight = this.cellWeights[parent][next]

        possibleNextCells.push([parent, next])

        if (weight < nextCellWeight) {
          nextCellWeight = weight
          nextCellIndex = possibleNextCells.length - 1
        }
      })
    })

    return possibleNextCells[nextCellIndex]
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
