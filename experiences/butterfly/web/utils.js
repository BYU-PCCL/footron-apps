import { setup as updateMain } from "./main"
import { setup as updateMath } from "./math"

export let config = {
  count: 1000, // the only editable value so far
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

// setTimeout(() => {
//   config.count = 5
//   updateMath()
//   updateMain()
// }, 1000)
// config.count = 5

function messageHandler(message) {
  const handlers = {
    pendulums: pendulumCountHandler
  }

  handlers[message.type](message.value)
}

function pendulumCountHandler(value) {
  console.log(value)
  config.count = Math.pow(Math.floor(value * Math.cbrt(100000)), 3) // scale between 1 and 100000
}

const client = new FootronMessaging.Messaging()
client.mount()
client.addMessageListener(messageHandler)
