import {WebGLRenderer, PerspectiveCamera, Scene, AmbientLight} from "three/src/Three.js";
import * as ROUTES from "./routes.js";
import * as MODELS from "./models"; 

const WINDOW_WIDTH = 2736;
const WINDOW_HEIGHT = 1216;
const DISPLAY_PATH = true;


export const route = ROUTES.circleRoute

// Renderer
export const renderer = new WebGLRenderer({
  antialias: true, // to consider
  powerPreference: "high-performance",
});
renderer.setSize(WINDOW_WIDTH, WINDOW_HEIGHT);
document.body.appendChild(renderer.domElement);

// Camera
export const camera = new PerspectiveCamera(
  75,                           // degrees
  WINDOW_WIDTH / WINDOW_HEIGHT, // aspect ratio
  0.1,                          // near
  100                           // far
);

camera.position.set(0, 25, 9);
camera.lookAt(0, 0, 9);


// Scene
export const scene = new Scene();
if (DISPLAY_PATH) ROUTES.displayPath(route, scene);

scene.add(new AmbientLight());


scene.add(MODELS.groundMesh);








