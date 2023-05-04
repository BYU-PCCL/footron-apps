// Similar to a random traversal algorithm, but the cells on the frontier have different weights!

import Maze from "./maze.js"

export default class PrimMaze extends Maze {
  constructor(...args) {
    super(...args)

    this.cellWeights = [...Array(this.density * this.density)].map((_) => [])

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

    this.parents = [...Array(this.density * this.density)].map((_) => null) // the parent of each cell
    this.nextCells = []

    this.updateFrontier(0)
  }

  getNextCell() {
    let nextCell = this.nextCells.pop()
    let nextCellParent = this.parents[nextCell]

    return [nextCellParent, nextCell]
  }

  insertSorted(nextCell, weight) {
    // delete the old position in the queue
    let oldIndx = this.nextCells.indexOf(nextCell)

    if (oldIndx !== -1) {
      this.nextCells.splice(oldIndx, 1)
    }

    // add it again

    let indx = this.sortedIndex(this.nextCells, weight)

    this.nextCells.splice(indx, 0, nextCell)
  }

  sortedIndex(array, w1) {
    // binary search
    var low = 0,
      high = array.length

    while (low < high) {
      var mid = (low + high) >>> 1

      let midEl = array[mid]

      let w2 = this.cellWeights[this.parents[midEl]][midEl]

      if (w2 < w1) low = mid + 1
      else high = mid
    }
    return low
  }

  insertPath(parent, child, weight) {
    if (
      !this.parents[child] ||
      weight > this.cellWeights[this.parents[child]][child]
    ) {
      // if the weight w/ the new parent is greater than the current weight, replace it

      this.parents[child] = parent

      this.insertSorted(child, weight)
    }
  }

  updateFrontier(parent) {
    /* Add neighbors to the frontier */
    let neighbors = this.getAdjacentSquares(parent)

    for (var i = 0; i < neighbors.length; i++) {
      let neighbor = neighbors[i]

      let weight = this.cellWeights[parent][neighbor]

      this.insertPath(parent, neighbor, weight)
    }
  }

  nextStep() {
    let [nextCellParent, nextCell] = this.getNextCell()

    // add the cell to the tree
    this.addPath(nextCellParent, nextCell)

    // update the frontier
    this.updateFrontier(nextCell)
  }
}
