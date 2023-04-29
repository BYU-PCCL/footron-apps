import { evaluate_cmap } from "./colormaps.js"

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
  // clear "cleared" cells from Wilson's algorithm
  if (maze.cleared && maze.cleared.length > 0) {
    for (var i = 0; i < maze.cleared.length; i++) {
      let clearedIndex = maze.cleared[i]

      let xPos = maze.getX(clearedIndex)
      let yPos = maze.getY(clearedIndex)

      drawRect(
        buffer,
        xPos * cellSize + 1,
        yPos * cellSize + 1,
        cellSize,
        cellSize,
        pixelWidth,
        WHITE
      )
    }

    maze.cleared = []
  }

  for (var i = 0; i < maze.cells.length; i++) {
    let distance = maze.cells[i]

    if (distance !== 0) {
      let xPos = maze.getX(i)
      let yPos = maze.getY(i)

      let color

      if (distance === "path") {
        color = [255, 165, 0]
      } else {
        color = evaluate_cmap(distance / maze.maxDistance, "BuPu", false)
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
    }
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
