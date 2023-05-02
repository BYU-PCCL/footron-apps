import Maze from "./maze.js"

export default class RandomTraversalMaze extends Maze {
  constructor(...args) {
    super(...args)

    this.id = "traversal"
    this.visitedCells = [0]

    this.pathsPerDestination = {} // what possible paths should be deleted when a cell is visited?

    this.possibleNextCells = []
    // an array of [parent, child] pairs

    this.updateFrontier(0)
  }

  getNextCell() {
    // get a random path from the frontier

    let pathIndex = Math.floor(Math.random() * this.possibleNextCells.length)

    return this.possibleNextCells[pathIndex]
  }

  updateFrontier(parent) {
    // the parent is the cell that we just visited

    /* Remove invalid paths from the frontier */

    let indexesOfPathsToDelete = this.pathsPerDestination[parent]

    if (indexesOfPathsToDelete && indexesOfPathsToDelete.length > 0) {
      indexesOfPathsToDelete.forEach((pathToDelete) => {
        this.possibleNextCells.splice(
          this.possibleNextCells.indexOf(pathToDelete),
          1
        )
      })
    }

    delete this.pathsPerDestination[parent]

    /* Add neighbors to the frontier */
    let neighbors = this.getAdjacentSquares(parent)

    neighbors.forEach((neighbor) => {
      let path = [parent, neighbor]
      this.possibleNextCells.push(path)

      if (!this.pathsPerDestination[neighbor]) {
        this.pathsPerDestination[neighbor] = []
      }

      this.pathsPerDestination[neighbor].push(path) // we want to delete this option if neighbor is visited
    })
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
