import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import Stats from "three/addons/libs/stats.module.js";

import Bus from "./bus.js";
import BusStop from "./bus-stop.js";
import * as ROUTES from "./routes.js";
import { renderer, camera, scene, route } from "./three-setup.js";
import * as MODELS from "./models";

const NUM_STOPS = 2;
const NUM_BUSES = 5;
const BUS_STOP_SYMBOLS = ["■", "▲", "●", "♥", "＋"];
const BUS_STOP_COLORS = ["#EE6352", "#08B2E3", "#57A773", "#8657a7", "#a78757"];
const BUS_STOP_OFFSET = 4;
const WINDOW_WIDTH = 2736;
const WINDOW_HEIGHT = 1216;
const HALF_WIDTH = WINDOW_WIDTH / 2;
const HALF_HEIGHT = WINDOW_HEIGHT / 2;
const BUS_LENGTH = 1.5 / route.getLength();
let loaded = false;

const stats = new Stats();
const body = document.querySelector("body");
body.appendChild(stats.dom);

let busStops = [];
let buses = [];

const controls = new OrbitControls(camera, renderer.domElement); // REMOVE BEFORE PROD

MODELS.loadModels(startScene);

let clock = new THREE.Clock(true);
let dTime = clock.getDelta();

function animate(time) {
  controls.update(); // REMOVE IN PROD
  dTime = clock.getDelta();
  if (loaded) {
    for (let i = 0; i < NUM_BUSES; i++) {
      updateBus(buses[i], dTime);
    }
    for (let i = 0; i < NUM_STOPS; i++) {
      updateStop(busStops[i], dTime);
    }
  }
  stats.update();
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();

// HELPER FUNCTIONS
function putDiv(div, position) {
  position.x = position.x * HALF_WIDTH + HALF_WIDTH;
  position.y = -(position.y * HALF_HEIGHT) + HALF_HEIGHT;
  div.style.top = `${position.y}px`;
  div.style.left = `${position.x}px`;
}

function offsetFromPath(percentage, offset) {
  let pointOnRoute = route.getPointAt(percentage);
  let vectorOutFromPath = new THREE.Vector3(0, 0, 0);
  route.getTangentAt(percentage, vectorOutFromPath);
  vectorOutFromPath.setZ(0);
  vectorOutFromPath
    .normalize()
    .multiplyScalar(offset)
    .applyAxisAngle(new THREE.Vector3(0, 1, 0), Math.PI / 2);
  return pointOnRoute.add(vectorOutFromPath);
}

function updateBus(bus, dTime) {
  bus.drivingTarget = bus.destination.position;
  if (NUM_BUSES > 1) {
    if (bus.nextBus.destination == bus.destination) {
      bus.drivingTarget = bus.nextBus.position - 4 * BUS_LENGTH;
    }
  }
  bus.update(dTime);
  let routePosition = route.getPointAt(bus.position);
  let followPosition = route.getPointAt( (1 + bus.position - BUS_LENGTH) % 1);
  bus.model.position.copy(routePosition);
  bus.backHalf.position.copy(followPosition)
  bus.model.lookAt(
    route.getTangentAt(bus.position).normalize().add(routePosition)
  );
  bus.backHalf.lookAt(bus.model.position);
  const infoDiv = document.getElementById(bus.id);
  const canvasPosition = routePosition.project(camera);
  putDiv(infoDiv, canvasPosition);
}

function updateStop(stop, dTime) {
  stop.update(dTime);
  putDiv(
    document.getElementById(stop.id),
    offsetFromPath(stop.position, BUS_STOP_OFFSET).project(camera)
  );
}

function startScene() {
  // STOPS
  for (let i = 0; i < NUM_STOPS; i++) {
    let stop = new BusStop(
      i,
      BUS_STOP_SYMBOLS[i % BUS_STOP_SYMBOLS.length],
      BUS_STOP_COLORS[i % BUS_STOP_COLORS.length]
    );

    let stopModel = MODELS.busStop.clone();
    scene.add(stopModel);
    let routePercentage = i / NUM_STOPS;
    stopModel.position.copy(offsetFromPath(routePercentage, 0.5));
    stop.model = stopModel;

    stop.position = routePercentage;
    busStops.push(stop);
  }
  for (let i = 0; i < busStops.length; i++) {
    busStops[i].next = busStops[(i + 1) % busStops.length];
    busStops[i].nextStops = busStops.map((x) => x);
    busStops[i].nextStops.splice(i, 1);
  }

  // BUSES
  for (let i = 0; i < NUM_BUSES; i++) {
    let bus = new Bus(i);
    let busModel = MODELS.bus.clone();
    let backModel = MODELS.busBack.clone();
    busModel.position.copy(route.getPointAt(i / NUM_BUSES));
    scene.add(busModel);
    scene.add(backModel);
    bus.model = busModel;
    bus.backHalf = backModel;
    bus.position = i / NUM_BUSES;
    bus.destination = busStops[Math.ceil(bus.position * NUM_STOPS) % NUM_STOPS];
    buses.push(bus);
  }
  for (let i = 0; i < NUM_BUSES; i++) {
    buses[i].nextBus = buses[(i + 1) % NUM_BUSES];
  }
  loaded = true;
}
