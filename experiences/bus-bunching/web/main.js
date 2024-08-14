import { Vector3 } from "three/src/Three.js";

import Bus from "./bus.js";
import BusStop from "./bus-stop.js";
import {
  renderer,
  camera,
  scene,
  route,
  clock,
  WINDOW_HEIGHT,
  WINDOW_WIDTH,
  buildScene,
  controls,
  DEV_STATE,
} from "./three-setup.js";
import * as MODELS from "./models";

const NUM_STOPS = 5;
const NUM_BUSES = 3;
const BUS_STOP_SYMBOLS = ["■", "▲", "●", "♥"];
const BUS_STOP_COLORS = ["#EE6352", "#08B2E3", "#57A773", "#8657a7", "#2222AA"];
const BUS_STOP_OFFSET = 4;
const HALF_WIDTH = WINDOW_WIDTH / 2;
const HALF_HEIGHT = WINDOW_HEIGHT / 2;
const BUS_LENGTH = 4.5 / route.getLength();
let loaded = false;

let busStops = [];
let buses = [];

console.log("LOAD MODELS");
MODELS.loadModels(startScene);

let dTime = clock.getDelta();

function animate() {
  if (DEV_STATE) {
    controls.update();
  }
  if (loaded) {
    dTime = clock.getDelta();
    for (let i = 0; i < NUM_BUSES; i++) {
      updateBus(buses[i], dTime);
    }
    for (let i = 0; i < NUM_STOPS; i++) {
      updateStop(busStops[i], dTime);
    }
  }
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
  let vectorOutFromPath = new Vector3(0, 0, 0);
  route.getTangentAt(percentage, vectorOutFromPath);
  vectorOutFromPath
    .normalize()
    .multiplyScalar(offset)
    .applyAxisAngle(new Vector3(0, 1, 0), Math.PI / 2);
  return pointOnRoute.add(vectorOutFromPath);
}

function updateBus(bus, dTime) {
  bus.drivingTarget = bus.destination.position;
  let nextBumper = (1 + bus.nextBus.position - BUS_LENGTH) % 1;
  if (NUM_BUSES > 1) {
    if (
      (nextBumper <= bus.destination.position && nextBumper > bus.position) ||
      (bus.nextBus.destination == bus.destination &&
        (bus.position < bus.nextBus.position || bus.nextBus.position == 0))
    ) {
      bus.drivingTarget = nextBumper;
    } else {
      bus.drivingTarget = bus.destination.position;
    }
  }
  bus.update(dTime);
  let routePosition = route.getPointAt(bus.position);
  bus.model.position.copy(routePosition);
  bus.model.lookAt(
    route.getTangentAt(bus.position).normalize().add(routePosition)
  );
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
  console.log("START SCENE");
  buildScene();
  // STOPS
  for (let i = 0; i < NUM_STOPS; i++) {
    let stop = new BusStop(
      i,
      BUS_STOP_SYMBOLS[i % BUS_STOP_SYMBOLS.length],
      BUS_STOP_COLORS[i % BUS_STOP_COLORS.length]
    );

    let routePercentage = i / NUM_STOPS;

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
    let busModel = MODELS.loadedModels["bus"].clone();
    busModel.position.copy(route.getPointAt(i / NUM_BUSES));
    scene.add(busModel);
    bus.model = busModel;
    bus.position = i / NUM_BUSES;
    bus.destination = busStops[Math.ceil(bus.position * NUM_STOPS) % NUM_STOPS];
    buses.push(bus);
  }
  for (let i = 0; i < NUM_BUSES; i++) {
    buses[i].nextBus = buses[(i + 1) % NUM_BUSES];
    document.addEventListener("keydown", function (e) {
      // TODO: This should listen for the messaging system as well
      buses[i].holdBus(e);
    });
    document.addEventListener("keyup", function (e) {
      buses[i].startBus(e);
    });
    scene.add(buses[i].model);
  }
  loaded = true;
}
