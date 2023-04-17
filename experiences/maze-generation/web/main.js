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

export let SIZE = 550

let sidebarSize = 456
let innerWidth = windowWidth - sidebarSize
let gutter = (innerWidth - SIZE * 3) / 4 // the "gutters" between the mazes

let ORIGIN_X = windowWidth - innerWidth // move it to the right to make space for explanatory sidebar
let ORIGIN_Y = windowHeight / 2

let cellSize, borderSize

let mazeDescriptions = {
  backtracker: document.getElementById("backtracker"),
  traversal: document.getElementById("traversal"),
  prim: document.getElementById("prim"),
  wilson: document.getElementById("wilson")
}

let mazeTitles = {
  backtracker: document.getElementById("backtracker-title"),
  traversal: document.getElementById("traversal-title"),
  prim: document.getElementById("prim-title"),
  wilson: document.getElementById("wilson-title")
}

let mazes = {
  backtracker: BacktrackerMaze,
  traversal: RandomTraversalMaze,
  prim: PrimMaze,
  wilson: WilsonMaze
}

let currentTimeoutDeleter

let mazeIsCompleted = false
let mazesToGenerate

function showMazeMetaLarge(id) {
  mazeDescriptions[id].style.display = "inline-block"
  mazeDescriptions[id].style.top = windowHeight / 2 + 100 + "px"
  mazeDescriptions[id].style.width = innerWidth - SIZE - 200 - 200 + "px"
  mazeDescriptions[id].style.left = sidebarSize + SIZE + 200 + 100 + "px"
  mazeDescriptions[id].className = "large"

  mazeTitles[id].style.display = "inline-block"
  mazeTitles[id].style.top = windowHeight / 2 - 200 + "px" // 30 - borderSize + "px"
  mazeTitles[id].style.width = innerWidth - SIZE - 200 + "px"
  mazeTitles[id].style.left = sidebarSize + SIZE + 200 + "px"
  mazeTitles[id].className = "large"

  const spanElement = document.querySelector(`#${id}-title span`)
  spanElement.innerHTML = "Solution length: ..."
}

function showMazeMetaSmall(id, left) {
  mazeDescriptions[id].style.display = "inline-block"
  mazeDescriptions[id].style.top = windowHeight / 2 + SIZE / 2 + 50 + "px"
  mazeDescriptions[id].style.width = SIZE + "px"
  mazeDescriptions[id].style.left = left + "px"
  mazeDescriptions[id].className = "small"

  mazeTitles[id].style.display = "inline-block"
  mazeTitles[id].style.top = 200 + "px"
  mazeTitles[id].style.width = SIZE + "px"
  mazeTitles[id].style.left = left + "px"
  mazeTitles[id].className = "small"

  const spanElement = document.querySelector(`#${id}-title span`)
  spanElement.innerHTML = "Solution length: ..."
}

export function setup() {
  createCanvas(windowWidth, windowHeight)
  noSmooth()

  if (currentTimeoutDeleter) {
    clearTimeout(currentTimeoutDeleter)
  }

  SIZE = config.focusMaze ? 1050 : 550
  let DENSITY = config.cells
  cellSize = SIZE / DENSITY
  borderSize = cellSize / 5
  mazeIsCompleted = false

  for (const id in mazeDescriptions) {
    mazeDescriptions[id].style.display = "none"
    mazeTitles[id].style.display = "none"
  }

  if (config.focusMaze) {
    showMazeMetaLarge(config.focusMaze)
  } else {
    showMazeMetaSmall("backtracker", sidebarSize + gutter)
    showMazeMetaSmall("prim", sidebarSize + SIZE + gutter * 2)
    showMazeMetaSmall("traversal", sidebarSize + SIZE * 2 + gutter * 3)
  }

  mazesToGenerate = config.focusMaze
    ? [new mazes[config.focusMaze](DENSITY)]
    : [
        new BacktrackerMaze(DENSITY),
        new PrimMaze(DENSITY),
        new RandomTraversalMaze(DENSITY)
      ]

  mazesToGenerate.forEach((maze) => {
    maze.generate()
  })
}

function draw() {
  // PAGE BACKGROUND
  background("#99a2af")

  let centeredY = ORIGIN_Y - SIZE / 2

  if (mazesToGenerate.length === 1) {
    drawMaze(mazesToGenerate[0], sidebarSize + 200, centeredY)
  } else {
    let [recursiveBacktrackerMaze, primMaze, randomTraversalMaze] =
      mazesToGenerate

    drawMaze(recursiveBacktrackerMaze, ORIGIN_X + gutter, centeredY)

    drawMaze(primMaze, ORIGIN_X + SIZE + gutter * 2, centeredY)

    drawMaze(randomTraversalMaze, ORIGIN_X + SIZE * 2 + gutter * 3, centeredY)
  }

  // FRAMERATE

  // push()
  // fill("#fff")
  // textSize(20)
  // text(Math.floor(frameRate()), windowWidth - 250, windowHeight - 50)
  // pop()

  // CHECK IF ALL MAZES ARE COMPLETED
  if (!mazeIsCompleted) {
    let completed = true

    for (var i = 0; i < mazesToGenerate.length; i++) {
      if (!mazesToGenerate[i].completed) completed = false
    }

    if (completed) {
      console.log("completed")
      mazeIsCompleted = true
      if (currentTimeoutDeleter) {
        clearTimeout(currentTimeoutDeleter)
      }

      currentTimeoutDeleter = setTimeout(() => {
        config.cells = Math.ceil(Math.random() * 99) + 1 // minimum 2
        setup()
      }, 10000)
    }
  }
}

function drawMaze(Maze, x, y) {
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

  // MAZE EXPLANATION
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

window.setup = setup
window.draw = draw
