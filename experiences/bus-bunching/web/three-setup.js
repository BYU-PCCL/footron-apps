import {
  WebGLRenderer,
  PerspectiveCamera,
  Scene,
  AmbientLight,
  Clock,
  DirectionalLight,
  Mesh,
  MeshBasicMaterial,
  TubeGeometry,
  OrthographicCamera,
  Vector3,
} from "three/src/Three.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

import * as ROUTES from "./routes.js";
import * as MODELS from "./models";

export const DEV_STATE = false;
const ORTHO_CAMERA = true;

export const WINDOW_WIDTH = 2736;
export const WINDOW_HEIGHT = 1216;
export const ASPECT_RATIO = WINDOW_WIDTH / WINDOW_HEIGHT;
const DISPLAY_PATH = DEV_STATE;

export const clock = new Clock(true);

export const route = ROUTES.bigRoute;
const routeGeometry = new TubeGeometry(route, 100, 2, 8, false);
const material = new MeshBasicMaterial({ color: 0xff0000 });
const routeObject = new Mesh(routeGeometry, material);
routeObject.scale.set(4, 4, 4);

// Renderer
export const renderer = new WebGLRenderer({
  antialias: true, // to consider
  powerPreference: "high-performance",
});
renderer.setSize(WINDOW_WIDTH, WINDOW_HEIGHT);
renderer.shadowMap.enabled = true;
document.body.appendChild(renderer.domElement);

// Camera
const perspectiveCamera = new PerspectiveCamera(
  75, // degrees
  WINDOW_WIDTH / WINDOW_HEIGHT, // aspect ratio
  0.1, // near
  100 // far
);
const ZOOM = 1 / 25;

const orthographicCamera = new OrthographicCamera(
  (WINDOW_WIDTH * ZOOM) / -2,
  (WINDOW_WIDTH * ZOOM) / 2,
  (WINDOW_HEIGHT * ZOOM) / 2,
  (WINDOW_HEIGHT * ZOOM) / -2,
  0.1, // near
  200 // far
);

export const camera = ORTHO_CAMERA ? orthographicCamera : perspectiveCamera;

const CAMERA_POSITION = new Vector3(20, 32, 40);
const CAMERA_OFFSET = new Vector3(-4, 9, 2);
camera.position.set(0, 0, 0);
camera.position.add(CAMERA_POSITION);
camera.lookAt(0, 0, 0);
camera.position.add(CAMERA_OFFSET);

export const controls = DEV_STATE
  ? new OrbitControls(camera, renderer.domElement)
  : null;

// Scene
export const scene = new Scene();

const key = new DirectionalLight(0xfffffa, 6);
key.position.set(5000, 10000, -5000);

const fill = new AmbientLight(0x87ceeb, 4);
// fill.position.set(-100, -100, 100);

export function buildScene() {
  // console.log("BUILDING SCENE");
  if (DISPLAY_PATH) ROUTES.displayPath(route, scene);
  scene.add(key);
  scene.add(fill);
  scene.add(MODELS.loadedModels["road"]);
}
