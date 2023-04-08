import { config } from "./config.js"

/* CONSTANTS */

const PI = Math.PI
const sin = Math.sin
const cos = Math.cos

/* CONFIG */

let {
  count,
  g,
  speed,
  friction,
  m1,
  m2,
  l1,
  l2,
  defaultTheta1,
  defaultTheta2
} = config

let pendulums = []

export { pendulums }

export function setup() {
  ;({
    count,
    g,
    speed,
    friction,
    m1,
    m2,
    l1,
    l2,
    defaultTheta1,
    defaultTheta2
  } = config)

  pendulums = []

  for (var i = 0; i < count; i++) {
    let newP = [
      ((defaultTheta1 + i * (1 / count)) * PI) / 180,
      ((defaultTheta2 + i * (1 / count)) * PI) / 180,
      0,
      0
    ]

    pendulums.push(newP)
  }

  document.getElementById("pendulum-count").innerText =
    count
      .toString()
      .split("")
      .reduce(
        (acc, curr, i, arr) =>
          i > 0 && i < arr.length && (arr.length - i) % 3 === 0
            ? acc + "," + curr
            : acc + curr,
        ""
      ) + " double pendulums"
}

setup()

// type Pendulum = [number, number, number, number]
// theta1, theta2, dTheta1, dTheta2

// Borrowed from https://github.com/micaeloliveira/physics-sandbox/blob/feature/new-styling/assets/javascripts/pendulum.js, then adjusted for improved performance and friction

export function update(p) {
  let mu = 1 + m1 / m2

  let [theta1, theta2, dTheta1, dTheta2] = p

  let thetaDiff = theta1 - theta2

  let cosThetaDiff = cos(thetaDiff)
  let sinThetaDiff = sin(thetaDiff)

  let sinTheta1 = sin(theta1)
  let sinTheta2 = sin(theta2)

  let cosTheta1 = cos(theta1)
  let cosTheta2 = cos(theta2)

  let d2Theta1 =
    (g * (sinTheta2 * cosThetaDiff - mu * sinTheta1) -
      (l2 * dTheta2 * dTheta2 + l1 * dTheta1 * dTheta1 * cosThetaDiff) *
        sinThetaDiff) /
    (l1 * (mu - cosThetaDiff * cosThetaDiff))

  let d2Theta2 =
    (mu * g * (sinTheta1 * cosThetaDiff - sinTheta2) +
      (mu * l1 * dTheta1 * dTheta1 + l2 * dTheta2 * dTheta2 * cosThetaDiff) *
        sinThetaDiff) /
    (l2 * (mu - cosThetaDiff * cosThetaDiff))

  d2Theta1 += -d2Theta1 * friction
  d2Theta2 += -d2Theta2 * friction

  p[2] += d2Theta1 * speed
  p[3] += d2Theta2 * speed

  p[2] += -p[2] * friction
  p[3] += -p[3] * friction

  p[0] += p[2] * speed
  p[1] += p[3] * speed

  // friction *= 1.000000000001

  return [
    l1 * sinTheta1,
    -l1 * cosTheta1,
    l1 * sinTheta1 + l2 * sinTheta2,
    -l1 * cosTheta1 - l2 * cosTheta2
  ]
}

export function updateGeometry(line) {
  for (var i = 0; i < pendulums.length; i++) {
    let [x1, y1, x2, y2] = update(pendulums[i])

    let geoPosition = line.geometry.attributes.position

    // There are 12 elements of each pendulum.

    geoPosition.array[i * 12 + 3] = x1
    geoPosition.array[i * 12 + 4] = y1

    geoPosition.array[i * 12 + 6] = x1
    geoPosition.array[i * 12 + 7] = y1

    geoPosition.array[i * 12 + 9] = x2
    geoPosition.array[i * 12 + 10] = y2
  }

  line.geometry.attributes.position.needsUpdate = true
}
