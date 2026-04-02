"use client"
import { useGLTF } from "@react-three/drei"
import { useEffect, useRef, useState } from "react"
import useCameraStore from "@/app/store/useCamera"
import { screenList, videoSrcs } from "@/app/lib/screenList"
import * as THREE from "three"
import { useThree } from "@react-three/fiber"

export const Computer = () => {
  const { scene } = useGLTF("./models/computers.glb")
  const cameraMove = useCameraStore(s => s.cameraMove)
  const videoTexturesRef = useRef(new Set([]))
  const videoElementsRef = useRef([])
  const [texturesReady, setTexturesReady] = useState(false)
  const { size } = useThree()
  useEffect(() => {
    const videos = []
    const textures = []
    videoSrcs.forEach((v, i) => {
      const videoElement = document.createElement("video")
      videoElement.src = v.src
      videoElement.loop = true
      videoElement.muted = true
      videoElement.playsInline = true
      videoElement.crossOrigin = "anonymous"
      const videoTexture = new THREE.VideoTexture(videoElement)
      videoTexture.repeat.set(v.repeat[0], v.repeat[1])
      videoTexture.offset.set(v.offset[0], v.offset[1])
      videoTexture.name = v.name
      videoElement.play().catch(err => {
        console.warn("video play failed:", err)
      })

      videos.push(videoElement)
      textures.push(videoTexture)
    })
    videoElementsRef.current = videos
    videoTexturesRef.current = textures
    setTexturesReady(true)
    return () => {
      videoTexturesRef.current.forEach(t => t.dispose())
      videoElementsRef.current.forEach(v => {
        v.pause()
        v.removeAttribute("src")
        v.load()
      })
      videoElementsRef.current = []
      videoTexturesRef.current = []
    }
  }, [])
  useEffect(() => {
    if (!texturesReady) return
    let i = 0
    scene.traverse(c => {
      if (c.isMesh && c.name.startsWith("screen")) {
        // if (c.userData.initialized) return
        const texture = videoTexturesRef.current[i]
        if (!texture) return
        c.userData.type = "screen"
        c.material = new THREE.MeshBasicMaterial({ map: texture })
        c.material.needsUpdate = true
        i++
      }
    })
  }, [scene, texturesReady])
  const handleClick = e => {
    const type = e?.object?.userData?.type
    const aspect = size.width / size.height
    if (type !== "screen") return
    const targetScreen = e?.object?.userData?.name?.split(" ")?.[1]
    if (!targetScreen) return
    const { targetId, position, lookAt, mobile } = screenList[targetScreen]
    const cameraConfig = aspect < 1 && mobile ? mobile : { position, lookAt }
    cameraMove(targetId, cameraConfig.position, cameraConfig.lookAt)
  }
  return (
    <primitive object={scene} onClick={handleClick} position={[0, -1.5, 0]} />
  )
}
useGLTF.preload("./models/computers.glb")
