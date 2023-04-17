import { setup as updateMain } from "./main.js"

export let config = {
  cells: 20, // the only editable value so far,
  speed: "normal", // 'fast', 'normal', 'slow'
  focusMaze: false
}

function messageHandler(message) {
  const handlers = {
    cells: (value) => round(Math.pow(value * 10, 2)), // scale between 1 and 100
    speed: (value) => {
      if (value === 0) return "slow"
      if (value === 1) return "fast"
      return "normal"
    },
    focusMaze: (value) => value
  }

  config[message.type] = handlers[message.type](message.value)

  console.log(`Set ${message.type} to ${config[message.type]}`)

  if (message.type !== "speed") updateMain() // changes to speed shouldn't cause a re-render
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
