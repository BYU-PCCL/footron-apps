// Similar to a random traversal algorithm, but the cells on the frontier have different weights!

import Maze from "./maze.js"

export default class PrimMaze extends Maze {
  constructor(...args) {
    super(...args)

    this.visitedCells = [0]

    this.pathsPerDestination = {} // what possible paths should be deleted when a cell is visited?

    this.possibleNextCells = []
    // an array of [parent, child] pairs

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

    this.updateFrontier(0)
  }

  getNextCell() {
    let [nextCellParent, nextCell] = this.possibleNextCells.pop()

    /* Remove invalid paths from the frontier */

    let indexesOfPathsToDelete = this.pathsPerDestination[nextCell]

    if (indexesOfPathsToDelete && indexesOfPathsToDelete.length > 0) {
      for (var i = 0; i < indexesOfPathsToDelete.length; i++) {
        let pathToDelete = indexesOfPathsToDelete[i]

        let pathToDeleteIndex = this.possibleNextCells.indexOf(pathToDelete)

        if (pathToDeleteIndex !== -1) {
          // remove the invalid path
          this.possibleNextCells.splice(
            this.possibleNextCells.indexOf(pathToDelete),
            1
          )
        }
      }
    }

    return [nextCellParent, nextCell]
  }

  insertSorted(path, weight) {
    let indx = this.sortedIndex(this.possibleNextCells, weight)

    this.possibleNextCells.splice(indx, 0, path)
  }

  sortedIndex(array, w1) {
    var low = 0,
      high = array.length

    while (low < high) {
      var mid = (low + high) >>> 1

      let w2 = this.cellWeights[array[mid][0]][array[mid][1]]

      if (w2 < w1) low = mid + 1
      else high = mid
    }
    return low
  }

  updateFrontier(parent) {
    /* Add neighbors to the frontier */
    let neighbors = this.getAdjacentSquares(parent)

    for (var i = 0; i < neighbors.length; i++) {
      let neighbor = neighbors[i]

      let path = [parent, neighbor]

      let weight = this.cellWeights[parent][neighbor]

      this.insertSorted(path, weight)

      if (!this.pathsPerDestination[neighbor]) {
        this.pathsPerDestination[neighbor] = []
      }

      this.pathsPerDestination[neighbor].push(path) // we want to delete this option if neighbor is visited
    }
  }

  async nextStep() {
    await this.delay()

    let [nextCellParent, nextCell] = this.getNextCell()

    // add the cell to the tree
    this.addPath(nextCellParent, nextCell)

    // add the cell to the visited cells array
    this.visitedCells.push(nextCell)

    // update the frontier
    this.updateFrontier(nextCell)
  }
}
