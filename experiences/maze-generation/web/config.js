import { setup as updateMain } from "./main.js"

export let config = {
  cells: 20, // the only editable value so far
  backtracker: true,
  traversal: true,
  prim: true,
  wilson: true
}

export let isAutomaticMode = true // true or false
let deleteTimeout

function messageHandler(message) {
  const handlers = {
    cells: (value) => round(Math.pow(value * 10, 2)) // scale between 1 and 100
  }

  config[message.type] = handlers[message.type](message.value)

  console.log(`Set ${message.type} to ${config[message.type]}`)

  isAutomaticMode = false

  if (deleteTimeout) clearTimeout(deleteTimeout)

  deleteTimeout = setTimeout(() => {
    isAutomaticMode = true
    config.cells = 20
    updateMain()
  }, 20000)

  updateMain()
}

function round(num) {
  if (num < 2) {
    return 2
  } else {
    return Math.ceil(num)
  }
}

window.messageHandler = messageHandler // purely for local testing

const client = new FootronMessaging.Messaging()
client.mount()
client.addMessageListener(messageHandler)
