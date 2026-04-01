"use client"
import { Canvas } from "@react-three/fiber"
import * as THREE from "three"
import { Computer } from "./components/Computer"
import CameraController from "./components/CameraController"
import Card from "./components/Card"

export default function Home() {
  return (
    <main className="home">
      <Canvas
        gl={{
          antialias: true,
          outputColorSpace: THREE.SRGBColorSpace,
          localClippingEnabled: true,
          toneMapping: THREE.ACESFilmicToneMapping,
        }}
        dpr={[1, 2]}
      >
        <directionalLight intensity={0.5}/>
        <pointLight intensity={8} color={"#ff0000"} position={[1, 2, 0]} />
        <pointLight intensity={3} color={"#00ffff"} position={[-1, 2, 0]} />
        <CameraController />
        <Computer />
      </Canvas>
      <Card />
      <p className="remind">請點擊螢幕...</p>
    </main>
  )
}
