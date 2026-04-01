"use client"
import { useFrame, useThree } from "@react-three/fiber"
import * as THREE from "three"
import useCameraStore from "../store/useCamera"
import { useEffect, useMemo } from "react"

const CameraController = () => {
  const { camera } = useThree()
  const isFocus = useCameraStore(s => s.isFocus)
  const originPosition = useCameraStore(s => s.originPosition)
  const originLookAt = useCameraStore(s => s.originLookAt)
  const targetPosition = useCameraStore(s => s.targetPosition)
  const targetLookAt = useCameraStore(s => s.targetLookAt)
  const setOrigin = useCameraStore(s => s.setOrigin)

  const currentLookAt = useMemo(() => new THREE.Vector3(0, 1, 0), [])
  const tempTarget = useMemo(() => new THREE.Vector3(), [])

  useEffect(() => {
    setOrigin(camera.position.clone(), new THREE.Vector3(0, 1, 0))
  }, [camera, setOrigin])

  useFrame((_, delta) => {
    const lerpAlpha = 1 - Math.exp(-4 * delta)
    if (isFocus === "focus") {
      camera.position.lerp(targetPosition, lerpAlpha)
      currentLookAt.lerp(targetLookAt, lerpAlpha)
    }else{
      camera.position.lerp(originPosition,lerpAlpha)
      currentLookAt.lerp(originLookAt,lerpAlpha)
    }
    tempTarget.copy(currentLookAt)
    camera.lookAt(tempTarget)
  })

  return null
}

export default CameraController
