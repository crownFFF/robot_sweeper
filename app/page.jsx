"use client"
import { Canvas, useThree } from "@react-three/fiber"
import * as THREE from "three"
import { Computer } from "./components/Computer"
import CameraController from "./components/CameraController"
import Card from "./components/Card"
import { useEffect } from "react"

const ResponsiveCamera = () => {
  const { camera, size } = useThree()
  useEffect(() => {
    const aspect = size.width / size.height
    let fov = 90
    if (aspect < 1) {
      fov = 130
    } else if (aspect > 1.8) {
      fov = 60
    }
    camera.fov = fov
    camera.updateProjectionMatrix()
  }, [camera, size])
  return null
}

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
        camera={{ fov: 90 }}
      >
        <ResponsiveCamera/>
        <directionalLight intensity={0.5} />
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
