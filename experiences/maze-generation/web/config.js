import { setup as updateMain } from "./main.js"

export let config = {
  cells: 30, // the only editable value so far
  backtracker: true,
  traversal: true,
  prim: true,
  wilson: true
}

function messageHandler(message) {
  console.log(message)
  const handlers = {
    cells: (value) => roundToNearestTen(Math.pow(value * 10, 2)) // scale between 1 and 100
  }

  config[message.type] = handlers[message.type](message.value)

  updateMain()
}

function roundToNearestTen(num) {
  if (num < 10) {
    return 10
  } else {
    return Math.ceil(num / 10) * 10
  }
}

window.messageHandler = messageHandler // purely for local testing

const client = new FootronMessaging.Messaging()
client.mount()
client.addMessageListener(messageHandler)
