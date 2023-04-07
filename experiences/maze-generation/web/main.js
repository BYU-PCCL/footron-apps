import { evaluate_cmap } from "./colormaps.js"
const COLORSCHEME = "BuPu"

import BacktrackerMaze from "./recursive-backtracker.js"
import RandomTraversalMaze from "./random-traversal.js"
import PrimMaze from "./prim.js"
import WilsonMaze from "./wilson.js"

import { config } from "./config.js"

const DRAW_SOLUTION = true

let windowWidth = 2736
let windowHeight = 1216

let SIZE = 550

let innerWidth = (windowWidth * 5) / 6
let xOffset = (innerWidth - SIZE * 3) / 4 // the "gutters" between the mazes

let ORIGIN_X = windowWidth - innerWidth // move it to the right to make space for explanatory sidebar
let ORIGIN_Y = windowHeight / 2

let urbanist,
  cellSize,
  borderSize,
  recursiveBacktrackerMaze,
  randomTraversalMaze,
  primMaze,
  wilsonMaze

function preload() {
  urbanist = loadFont("./Urbanist-Medium.ttf")
}

let finishedMazes = {
  backtracker: false,
  traversal: false,
  prim: false,
  wilson: false
}

export let currentTimeoutDeleter

export function setup() {
  createCanvas(windowWidth, windowHeight)
  noSmooth()
  textFont(urbanist)

  let DENSITY = config.cells
  cellSize = SIZE / DENSITY
  borderSize = cellSize / 5

  recursiveBacktrackerMaze = new BacktrackerMaze(DENSITY, () => {
    finishedMazes.backtracker = true
  })
  randomTraversalMaze = new RandomTraversalMaze(DENSITY, () => {
    finishedMazes.traversal = true
  })
  primMaze = new PrimMaze(DENSITY, () => {
    finishedMazes.prim = true
  })
  wilsonMaze = new WilsonMaze(DENSITY, () => {
    finishedMazes.wilson = true
  })

  recursiveBacktrackerMaze.generate()
  randomTraversalMaze.generate()
  primMaze.generate()
  wilsonMaze.generate()
}

function draw() {
  // PAGE BACKGROUND
  background("#99a2af")

  drawMaze(
    recursiveBacktrackerMaze,
    ORIGIN_X + xOffset,
    ORIGIN_Y - SIZE / 2,
    "Recursive Backtracker"
  )

  drawMaze(
    primMaze,
    ORIGIN_X + SIZE + xOffset * 2,
    ORIGIN_Y - SIZE / 2,
    "Prim's Algorithm"
  )

  drawMaze(
    randomTraversalMaze,
    ORIGIN_X + SIZE * 2 + xOffset * 3,
    ORIGIN_Y - SIZE / 2,
    "Random Traversal"
  )

  // FRAMERATE

  // push()
  // fill("#fff")
  // textSize(20)
  // text(Math.floor(frameRate()), windowWidth - 250, windowHeight - 50)
  // pop()

  if (
    finishedMazes.backtracker &&
    finishedMazes.traversal &&
    finishedMazes.prim
  ) {
    finishedMazes = {
      backtracker: false,
      traversal: false,
      prim: false,
      wilson: false
    }
    console.log("All mazes completed")
    if (currentTimeoutDeleter) {
      console.log("Got here")
      clearTimeout(currentTimeoutDeleter)
    }

    currentTimeoutDeleter = setTimeout(() => {
      console.log("Location 2")

      config.cells = Math.ceil(Math.random() * 99) + 1 // minimum 2
      setup()
    }, 10000)
  }
}

function drawMaze(Maze, x, y, title) {
  // MAZE CELLS
  push()
  Maze.cells.forEach((distance, position) => {
    drawSquare(Maze, distance, position, x, y)
  })
  pop()

  // MAZE FRAME
  push()
  strokeWeight(borderSize)
  noFill()
  square(x, y, SIZE)

  pop()

  // MAZE BORDERS
  push()
  strokeWeight(borderSize)
  strokeCap(PROJECT)
  Maze.rightBorders.forEach((border, pos) => {
    if (border) {
      let xPos = Maze.getX(pos)
      let yPos = Maze.getY(pos)

      line(
        x + cellSize * xPos + cellSize,
        y + cellSize * yPos,
        x + cellSize * xPos + cellSize,
        y + cellSize * yPos + cellSize
      )
    }
  })

  Maze.bottomBorders.forEach((border, pos) => {
    if (border) {
      let yPos = Maze.getY(pos)
      let xPos = Maze.getX(pos)

      line(
        x + cellSize * xPos,
        y + cellSize * yPos + cellSize,
        x + cellSize * xPos + cellSize,
        y + cellSize * yPos + cellSize
      )
    }
  })

  pop()

  // MAZE SOLUTION
  if (DRAW_SOLUTION) {
    push()

    Maze.solution.forEach((square1, i) => {
      drawSolutionLine(Maze, square1, Maze.solution[i + 1], x, y)
    })

    pop()
  }

  // MAZE TITLE
  push()
  fill("white")
  textSize(30)
  textAlign(CENTER)
  text(
    title + ": " + (Maze.solution.length ? Maze.solution.length : "..."),
    x + SIZE / 2,
    y - 30
  )
  pop()
}

function drawSolutionLine(Maze, square1, square2, x, y) {
  let sWeight = (cellSize - borderSize) / 3

  if (sWeight > 10) sWeight = 10

  strokeWeight(sWeight)

  stroke("#BF1A2F") // red

  let xPos1 = x + Maze.getX(square1) * cellSize + cellSize / 2
  let yPos1 = y + Maze.getY(square1) * cellSize + cellSize / 2

  let xPos2 = x + Maze.getX(square2) * cellSize + cellSize / 2
  let yPos2 = y + Maze.getY(square2) * cellSize + cellSize / 2

  line(xPos1, yPos1, xPos2, yPos2)
}

function drawSquare(Maze, distance, position, x, y) {
  let xPos = x + Maze.getX(position) * cellSize
  let yPos = y + Maze.getY(position) * cellSize

  noStroke()

  if (distance === "path") {
    fill("#FFA500")
  } else if (distance !== 0) {
    fill(evaluate_cmap(distance / Maze.maxDistance, COLORSCHEME, false))
  } else {
    fill("#fff")
  }

  square(xPos, yPos, cellSize + 1) // +1 prevents bleeding from the background
}

// The below is necessary to use type="module"

window.preload = preload
window.setup = setup
window.draw = draw
