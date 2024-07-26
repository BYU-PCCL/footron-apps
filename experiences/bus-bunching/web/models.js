import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

const loader = new GLTFLoader();
const busStopGeometry = new THREE.BoxGeometry(0.2, 2, 0.2).translate(0, 1, 0);
const busStopMaterial = new THREE.MeshBasicMaterial({ color: 0xaaaaff });
export const busStop = new THREE.Mesh(busStopGeometry, busStopMaterial);

const busGeometry = new THREE.BoxGeometry(0.6, 0.5, 1.5);
const busMaterial = new THREE.MeshBasicMaterial({ color: 0xffaa00 });
export let bus = new THREE.Mesh(busGeometry, busMaterial);
export let busBack = new THREE.Mesh(busGeometry, busMaterial);

export async function loadModels(onLoad) {
  loader.load(
    "./models/uvx-front.glb",
    function (gltf) { // on load
      gltf.scene.scale.set(0.3, 0.3, 0.3);
      bus = gltf.scene;
      onLoad();

    },
    function (xhr) { // progress
      console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
    },
    function (error) {
      console.log("failed to load asset");
      onLoad();

    }
  );
  loader.load(
    "./models/uvx-back.glb",
    function (gltf) { // on load
      gltf.scene.scale.set(0.3, 0.3, 0.3);
      busBack = gltf.scene;
    },
    function (xhr) { // progress
      console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
    },
    function (error) {
      console.log("failed to load asset");
    }
);
}

const groundGeometry = new THREE.PlaneGeometry(50, 50, 32, 32);
groundGeometry.rotateX(Math.PI / 2);
const groundMaterial = new THREE.MeshStandardMaterial({
  color: 0x555566,
  side: THREE.DoubleSide,
});
export const groundMesh = new THREE.Mesh(groundGeometry, groundMaterial);
