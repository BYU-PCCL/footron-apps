import {
  BoxGeometry,
  MeshBasicMaterial,
  MeshStandardMaterial,
  Mesh,
  PlaneGeometry,
  DoubleSide,
  LoadingManager,
} from "three/src/Three.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

const nullGeometry = new BoxGeometry(1, 1, 1);
const nullMaterial = new MeshBasicMaterial({ color: 0x00ff00 });
const nullMesh = new Mesh(nullGeometry, nullMaterial);

const busMaterial = new MeshBasicMaterial({ color: 0xffaa00 });
const busGeometry = new BoxGeometry(1, 1, 3);
let bus = new Mesh(busGeometry, busMaterial);

const groundGeometry = new PlaneGeometry(1000, 1000, 32, 32);
groundGeometry.rotateX(Math.PI / 2);
const groundMaterial = new MeshStandardMaterial({
  color: 0x555566,
  side: DoubleSide,
});
const groundMesh = new Mesh(groundGeometry, groundMaterial);

export const loadedModels = {};
loadedModels["bus"] = bus;
loadedModels["road"] = groundMesh;

const manager = new LoadingManager();
manager.onStart = function (url, itemsLoaded, itemsTotal) {
  console.log(
    "Started loading file: " +
      url +
      ".\nLoaded " +
      itemsLoaded +
      " of " +
      itemsTotal +
      " files."
  );
};

manager.onProgress = function (url, itemsLoaded, itemsTotal) {
  console.log(
    "Loading file: " +
      url +
      ".\nLoaded " +
      itemsLoaded +
      " of " +
      itemsTotal +
      " files."
  );
};

export function loadModels(callback) {
  // Callback to avoid scene starting before models are loaded.
  console.log("STARTING LOAD");
  manager.onLoad = callback;
  manager.onError = callback;
  const loader = new GLTFLoader(manager);
  loader.load("./models/small-bus.glb", (gltf) => {
    loadModel(gltf, 0.4, "bus");
  });
  loader.load("./models/scene.glb", (gltf) => {
    loadModel(gltf, 3, "road");
  });
}

function loadModel(gltf, scale, ref) {
  gltf.scene.scale.set(scale, scale, scale);
  loadedModels[ref] = gltf.scene;
}
