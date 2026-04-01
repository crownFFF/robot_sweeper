import * as THREE from "three"
export const screenList = {
  screenA: {
    targetId: "screenA",
    position: new THREE.Vector3(-1.25, 0, -0.5),
    lookAt: new THREE.Vector3(-3, -0.25, -1.5),
  },
  screenB: {
    targetId: "screenB",
    position: new THREE.Vector3(-0.25, 1.75, -0.75),
    lookAt: new THREE.Vector3(-1.75, 1.75, -1.5),
  },
  screenB2: {
    targetId: "screenB2",
    position: new THREE.Vector3(-1.75, 2, 1.75),
    lookAt: new THREE.Vector3(-2.05, 2, 1.5),
  },
  screenC: {
    targetId: "screenC",
    position: new THREE.Vector3(-0.25, 0.65, -1.25),
    lookAt: new THREE.Vector3(-0.20, 0.64, -1.3),
  },
  screenC2: {
    targetId: "screenC2",
    position: new THREE.Vector3(2.25, 1, 1),
    lookAt: new THREE.Vector3(2.26, 1.01, 0.95),
  },
  screenD: {
    targetId: "screenD",
    position: new THREE.Vector3(1, -0.5, -0.25),
    lookAt: new THREE.Vector3(1, -0.5, -0.5),
  },
  screenD2: {
    targetId: "screenD2",
    position: new THREE.Vector3(-3.5, 3.5, -1),
    lookAt: new THREE.Vector3(-3.75, 3.5, -1.25),
  },
  screenD3: {
    targetId: "screenD3",
    position: new THREE.Vector3(2, 3.8, -2.5),
    lookAt: new THREE.Vector3(2, 3.75, -2.75),
  },
  screenD4: {
    targetId: "screenD4",
    position: new THREE.Vector3(2.5, 3.8, -2),
    lookAt: new THREE.Vector3(3.25, 3.75, -2.25),
  },
}
export const videoSrcs = [
  {
    name: "screen_screenC",
    src: "/screen/aboutme.mp4",
    repeat: [3.5, 3],
    offset: [-0.05, -1.2],
  },
  {
    name: "screen_screenB",
    src: "/screen/learning_experience.mp4",
    repeat: [3.9, 2.5],
    offset: [-1.4, -1.66],
  },
  {
    name: "screen_screenA",
    src: "/screen/work_experience.mp4",
    repeat: [3.9, 2.6],
    offset: [-0.15, -1.75],
  },
  {
    name: "screen_screenD",
    src: "/screen/project.mp4",
    repeat: [4, 1.5],
    offset: [-1.5, -0.25],
  },
  {
    name: "screen_screenC2",
    src: "/screen/licenses.mp4",
    repeat: [3.5, 1],
    offset: [-0.1, -0.05],
  },
  {
    name: "screen_screenB2",
    src: "/screen/personal_statement.mp4",
    repeat: [4, 2.5],
    offset: [-1.45, -1.7],
  },
  {
    name: "screen_screenD2",
    src: "/screen/skills.mp4",
    repeat: [3, 1],
    offset: [-1.05, -0.075],
  },
  {
    name: "screen_screenD3",
    src: "/screen/future_expectations.mp4",
    repeat: [4, 2],
    offset: [-1.5, -0.65],
  },
  {
    name: "screen_screenD4",
    src: "/screen/copyright.mp4",
    repeat: [3.5, 1.5],
    offset: [-1.2, -0.35],
  },
]
