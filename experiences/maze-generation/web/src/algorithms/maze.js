import { config } from "../config.js"

export default class Maze {
  constructor(density = 10, showBorders = true) {
    this.density = density
    this.showBorders = showBorders

    this.cells = [...Array(density * density)].map((_, i) => 0) // distance from origin. first cell is 1 away. 0 means not attached
    this.cellMap = [...Array(density * density)].map((_, i) => []) // An array mapping each cell to its "children"

    if (this.showBorders) {
      this.rightBorders = [...Array(density * density)].map(
        (_, i) => ((i + 1) % density === 0 ? false : true) // each border is the same index as the cell to the left
      )
      this.bottomBorders = [...Array(density * density)].map(
        (_, i) => ((i + 1) / density <= density - 1 ? true : false) // each border is the same index as the cell above
      )
    }

    this.cells[0] = 1

    this.solution = [] // solution. We'll fill this in later.
    this.completed = false

    this.maxDistance = 1

    this.bufferStep = 0 // for fractional speeds

    this.tLength = 1
  }

  getX(el) {
    return el % this.density
  }

  getY(el) {
    return (el / this.density) | 0
  }

  addPath(square1, square2) {
    this.tLength++

    // ADD TO CELLMAP
    this.cellMap[square1].push(square2)

    // mark the cell as processed w/ distance
    this.cells[square2] = this.cells[square1] + 1

    // Update maxDistance if applicable
    if (this.cells[square2] > this.maxDistance)
      this.maxDistance = this.cells[square2]

    // UPDATE BORDERS
    if (this.showBorders) {
      let xSquare1 = this.getX(square1)
      let xSquare2 = this.getX(square2)

      let ySquare1 = this.getY(square1)
      let ySquare2 = this.getY(square2)

      if (xSquare1 < xSquare2) {
        this.rightBorders[square1] = false
      } else if (xSquare1 > xSquare2) {
        this.rightBorders[square2] = false
      } else if (ySquare1 > ySquare2) {
        this.bottomBorders[square2] = false
      } else if (ySquare1 < ySquare2) {
        this.bottomBorders[square1] = false
      }
    }
  }

  getAdjacentSquares(el) {
    let res = []

    let x = this.getX(el)
    let y = this.getY(el)

    let density = this.density
    let cells = this.cells

    if (x + 1 < density && !cells[y * density + x + 1])
      res.push(y * density + x + 1)
    if (y + 1 < density && !cells[(y + 1) * density + x])
      res.push((y + 1) * density + x)
    if (x - 1 >= 0 && !cells[y * density + x - 1]) res.push(y * density + x - 1)
    if (y - 1 >= 0 && !cells[(y - 1) * density + x])
      res.push((y - 1) * density + x)

    return res
  }

  getAllAdjacentSquares(el) {
    let res = []
    let density = this.density

    let x = this.getX(el)
    let y = this.getY(el)

    if (x + 1 < density) res.push(y * density + x + 1)
    if (y + 1 < density) res.push((y + 1) * density + x)
    if (x - 1 >= 0) res.push(y * density + x - 1)
    if (y - 1 >= 0) res.push((y - 1) * density + x)

    return res
  }

  getRandomUnvisitedSquare() {
    let res =
      this.unvisitedCells[
        Math.floor(Math.random() * this.unvisitedCells.length)
      ]

    return res
  }

  solveRecursively() {
    let density = this.density,
      cellMap = this.cellMap
    let cells = [...Array(density * density)].map((_) => false) // false means we haven't traversed it yet. This is a new array just for this function.

    let history = [0] // a stack

    // While not all cells in the grid have been visited
    while (cells.includes(false)) {
      let currentCell = history[history.length - 1]

      // Mark the current cell as visited
      cells[currentCell] = true

      let possibleCells = cellMap[currentCell].filter(
        (cell) => cells[cell] === false
      )

      // If there are possible next cells to add to the grid from the current position
      if (possibleCells.length > 0) {
        // Randomly choose the next cell out of the candidates
        let nextCell =
          possibleCells[Math.floor(Math.random() * possibleCells.length)]

        // Add cell to history
        history.push(nextCell)

        // If the cell is in the bottom-right corner, the solution array is simply the history stack
        if (nextCell === density * density - 1) {
          this.solution = [...history]
          break
        }
      } else {
        // No possible squares from the current cell, backtracking

        history.pop()
      }
    }
  }

  onComplete(fn) {
    this.onCompleteFn = fn
  }
}
