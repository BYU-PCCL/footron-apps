import "./style.css"

import { Messaging } from "@footron/messaging"

const worker = new Worker(new URL("./worker.js", import.meta.url), {
  type: "module"
})
// Get the canvas elements
const largeCanvas = document.getElementById("large-canvas")
const backtrackerCanvas = document.getElementById("backtracker-canvas")
const primCanvas = document.getElementById("prim-canvas")
const traversalCanvas = document.getElementById("traversal-canvas")

// Use the OffscreenCanvas API and send to the worker thread
const large = largeCanvas.transferControlToOffscreen()
const backtracker = backtrackerCanvas.transferControlToOffscreen()
const prim = primCanvas.transferControlToOffscreen()
const traversal = traversalCanvas.transferControlToOffscreen()

function getSizes() {
  return {
    large: { width: largeCanvas.clientWidth, height: largeCanvas.clientHeight },
    backtracker: {
      width: backtrackerCanvas.clientWidth,
      height: backtrackerCanvas.clientHeight
    },
    prim: { width: primCanvas.clientWidth, height: primCanvas.clientHeight },
    traversal: {
      width: traversalCanvas.clientWidth,
      height: traversalCanvas.clientHeight
    }
  }
}

function sendSizes() {
  worker.postMessage({
    type: "resize",
    sizes: getSizes()
  })
}

let config = {
  cells: 20,
  speed: "normal", // 'fast', 'normal', 'slow'
  focusMaze: "backtracker" // false or "backtracker", "prim", "traversal", "wilson"
}

updateDOM()

worker.postMessage(
  {
    type: "init",
    canvases: { large, backtracker, prim, traversal },
    config: config
  },
  [large, backtracker, prim, traversal]
)

sendSizes()

window.addEventListener("resize", sendSizes)

const client = new Messaging()
client.mount()

function getNewConfig(message) {
  const handlers = {
    cells: (value) => round(Math.pow(value * 10, 2)), // scale between 1 and 100
    speed: (value) => {
      if (value === 0) return "slow"
      if (value === 1) return "fast"
      return "normal"
    },
    focusMaze: (value) => (value === "false" ? false : value)
  }

  let config = {}

  config[message.type] = handlers[message.type](message.value)

  console.log(`Set ${message.type} to ${config[message.type]}`)

  return config
}

function round(num) {
  if (num < 2) {
    return 2
  } else {
    return Math.ceil(num)
  }
}

function updateDOM() {
  if (config.focusMaze) {
    document.getElementById("large-container").classList.remove("hidden")
    document.getElementById("small-container").classList.add("hidden")
  } else {
    document.getElementById("small-container").classList.remove("hidden")
    document.getElementById("large-container").classList.add("hidden")
  }

  // TODO: reset solution length
  // TODO: change description and title of mazes in focus mode
}

function messageHandler(message) {
  let config = { ...config, ...getNewConfig(message) }

  updateDOM()
  sendSizes()
  sendConfigChange(config)
}

client.addMessageListener(messageHandler)

window.messageHandler = messageHandler // purely for local testing

function sendConfigChange(config) {
  worker.postMessage({
    type: "config",
    config: config
  })
}

worker.addEventListener("message", function handleMessageFromWorker(msg) {
  if (msg.data.type === "solution") {
    let solutionLength = msg.data.solutionLength

    let maze = msg.data.maze

    document.getElementById(maze + "-solution-length").innerHTML =
      "Solution length: " + solutionLength
  }
})

function resetSolutionLengths() {
  for (const maze of ["backtracker", "prim", "traversal", "large"]) {
    document.getElementById(maze + "-solution-length").innerHTML =
      "Solution length: ..."
  }
}
