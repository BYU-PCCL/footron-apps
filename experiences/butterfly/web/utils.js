import { setup as updateMain } from "./main.js"
import { setup as updateMath } from "./math.js"

export let config = {
  count: 50000, // the only editable value so far
  g: 9.81,
  speed: 0.05,
  friction: 0.0004,
  m1: 10,
  m2: 10,
  l1: 15,
  l2: 15,
  defaultTheta1: 80,
  defaultTheta2: 90
}

function messageHandler(message) {
  console.log(message)
  const handlers = {
    count: (value) => roundToNearestTen(Math.pow(value * Math.cbrt(100000), 3)), // scale between 1 and 100000
    g: (value) => 9.81 * 2 * value // slider starts at 0.5
  }

  config[message.type] = handlers[message.type](message.value)

  updateMath()
  updateMain()
}

function roundToNearestTen(num) {
  if (num < 10) {
    return 10
  } else if (num < 100) {
    return Math.ceil(num / 10) * 10
  } else if (num < 1000) {
    return Math.ceil(num / 100) * 100
  } else {
    return Math.ceil(num / 1000) * 1000
  }
}

window.messageHandler = messageHandler // purely for local testing

const client = new FootronMessaging.Messaging()
client.mount()
client.addMessageListener(messageHandler)
