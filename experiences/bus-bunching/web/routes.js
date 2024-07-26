import * as THREE from "three";
import { CatmullRomCurve3 } from "three/src/Three.js";

// UVX ROUTE
export var uvxRoute = new THREE.CurvePath()
uvxRoute.add(new THREE.LineCurve(new THREE.Vector3(10,0,0), new THREE.Vector3(10,690,0)));
uvxRoute.add(new THREE.LineCurve(new THREE.Vector3(10,690,0), new THREE.Vector3(890,690,0)));
uvxRoute.add(new THREE.CubicBezierCurve3(
  new THREE.Vector3(0,1,0),
  new THREE.Vector3(0,0,1),
  new THREE.Vector3(1,0,0)
))



  // CIRCLE ROUTE
  export const circleRoute = new CatmullRomCurve3(
    [
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(5, 0, 5),
      new THREE.Vector3(0, 0, 10),
      new THREE.Vector3(-5, 0, 5),
    ],
    true
  );

export function displayPath(route, scene) {
  const routePoints = route.getPoints(1000);
  const pathGeometry = new THREE.BufferGeometry().setFromPoints(routePoints);
  const pathMaterial = new THREE.LineBasicMaterial({ color: 0x00aaaa });
  const pathObject = new THREE.Line(pathGeometry, pathMaterial);
  scene.add(pathObject);
}
