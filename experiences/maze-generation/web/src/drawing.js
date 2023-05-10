import { evaluate_cmap } from "./colormaps.js"

// TODO: vDom?

// we don't need to rerender most cells unless the max distance changes
// not sure if this is worth it though

let cmap = "BuPu" // favorites: gist_ncar, BuPu, nipy_spectral

let BLACK = [0, 0, 0]
let WHITE = [255, 255, 255]

function drawRect(buffer, x, y, width, height, rowSize, color) {
  let rowBitSize = rowSize * 4

  for (let i = 0; i < width; i++) {
    for (let j = 0; j < height; j++) {
      let index = y * rowBitSize + x * 4 + i * 4 + j * rowBitSize

      buffer[index] = color[0]
      buffer[index + 1] = color[1]
      buffer[index + 2] = color[2]
      buffer[index + 3] = 255
    }
  }
}

function drawBorders(buffer, pixelWidth, color) {
  // left border
  drawRect(buffer, 0, 0, 1, pixelWidth, pixelWidth, color)

  // right border
  drawRect(buffer, pixelWidth - 1, 0, 1, pixelWidth, pixelWidth, color)

  // top border
  drawRect(buffer, 0, 0, pixelWidth, 1, pixelWidth, color)

  // bottom border
  drawRect(buffer, 0, pixelWidth - 1, pixelWidth, 1, pixelWidth, color)
}

function drawCells(buffer, maze, pixelWidth, cellSize) {
  for (var i = 0; i < maze.cells.length; i++) {
    let distance = maze.cells[i]

    if (distance !== 0) {
      let xPos = maze.getX(i)
      let yPos = maze.getY(i)

      let color = WHITE

      if (distance === "path") {
        color = [255, 165, 0]
      } else if (distance === "clear") {
      } else if (distance !== 0) {
        color = evaluate_cmap(distance / maze.maxDistance, cmap, false)
      }

      drawRect(
        buffer,
        xPos * cellSize + 1,
        yPos * cellSize + 1,
        cellSize,
        cellSize,
        pixelWidth,
        color
      )

      if (distance === "clear") {
        maze.cells[i] = 0
      }
    }
  }
}

export function drawSolution(buffer, maze, rowWidth, cellSize) {
  let solution = maze.solution

  let previousCell = 0

  for (var i = 1; i < solution.length; i++) {
    // do work heres

    let lineSize = cellSize > 2 ? cellSize : 2

    let long = cellSize > 2 ? cellSize + 2 : 2
    let short = cellSize > 2 ? 2 : 1

    let xPos1 = maze.getX(previousCell) * cellSize + lineSize / 2 // we know that lineSize is divisible by 2 because cellSize is 8
    let yPos1 = maze.getY(previousCell) * cellSize + lineSize / 2

    let xPos2 = maze.getX(solution[i]) * cellSize + lineSize / 2
    let yPos2 = maze.getY(solution[i]) * cellSize + lineSize / 2

    drawRect(
      buffer,
      xPos1 < xPos2 ? xPos1 : xPos2,
      yPos1 < yPos2 ? yPos1 : yPos2,
      xPos1 !== xPos2 ? long : short,
      yPos1 !== yPos2 ? long : short,
      rowWidth,
      [255, 0, 0]
    )

    previousCell = solution[i]
  }
}

export async function drawBorderedMaze(mazeObject, cellNumber) {
  let { maze, ctx, canvas, imageData } = mazeObject

  let buffer = imageData.data

  let cellSize = 8 // if you change this, you'll also have to change it in worker.js

  let pixelWidth = cellNumber * cellSize + 2

  drawBorders(buffer, pixelWidth, BLACK)

  drawCells(buffer, maze, pixelWidth, cellSize)

  for (var i = 0; i < maze.cells.length; i++) {
    let xPos = maze.getX(i)
    let yPos = maze.getY(i)

    // left cell wall
    if (maze.rightBorders[i - 1] || xPos === 0) {
      drawRect(
        buffer,
        xPos * cellSize + 1,
        yPos * cellSize,
        1,
        cellSize + 2,
        pixelWidth,
        BLACK
      )
    }

    // right cell wall
    if (xPos === cellNumber - 1 || maze.rightBorders[i]) {
      drawRect(
        buffer,
        xPos * cellSize + cellSize,
        yPos * cellSize,
        1,
        cellSize + 2,
        pixelWidth,
        BLACK
      )
    }

    // bottom cell wall
    if (yPos === cellNumber - 1 || maze.bottomBorders[i]) {
      drawRect(
        buffer,
        xPos * cellSize,
        yPos * cellSize + cellSize,
        cellSize + 2,
        1,
        pixelWidth,
        BLACK
      )
    }

    // top cell wall
    if (yPos === 0 || (yPos > 0 && maze.bottomBorders[i - cellNumber])) {
      drawRect(
        buffer,
        xPos * cellSize,
        yPos * cellSize + 1,
        cellSize + 2,
        1,
        pixelWidth,
        BLACK
      )
    }
  }

  if (maze.solution.length > 0) {
    drawSolution(buffer, maze, pixelWidth, cellSize)
  }

  let bitmapImageData = await createImageBitmap(imageData)

  ctx.drawImage(
    bitmapImageData,
    0,
    0,
    cellNumber * cellSize + 2,
    cellNumber * cellSize + 2,
    0,
    0,
    canvas.width,
    canvas.height
  )
}

export async function drawUnborderedMaze(mazeObject, cellNumber) {
  let { maze, ctx, canvas, imageData } = mazeObject
  let buffer = imageData.data

  let pixelWidth = cellNumber + 2

  drawBorders(buffer, pixelWidth, BLACK)

  drawCells(buffer, maze, pixelWidth, 1)

  if (maze.solution.length > 0) {
    drawSolution(buffer, maze, pixelWidth, 1)
  }

  let bitmapImageData = await createImageBitmap(imageData)

  ctx.drawImage(
    bitmapImageData,
    0,
    0,
    cellNumber + 2,
    cellNumber + 2,
    0,
    0,
    canvas.width,
    canvas.height
  )
}
