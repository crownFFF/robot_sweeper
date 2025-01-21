"use client"
import * as THREE from "three"
import Loading from "@/components/Loading"
import React, { Suspense, useEffect, useState } from "react"
import { list } from "@/constants"
import dynamic from "next/dynamic"
import { Info } from "@/lib"
const Canvas = dynamic(
  () => import("@react-three/fiber").then((mod) => mod.Canvas),
  { ssr: false }
)
const Computer = dynamic(() => import("@/models/Computer"), { ssr: false })

export default function Home() {
  const [info, setInfo] = useState<Info>({
    show: false,
    number: 0,
    position: "right",
  })
  const [setting, setSetting] = useState({
    position: new THREE.Vector3(0, 0, 2.5),
    fov: 100,
  })

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      if (width > 768 && width <= 1000) {
        setSetting({
          position: new THREE.Vector3(0, 0, 4),
          fov: 100,
        })
      } else if (width > 460 && width <= 768) {
        setSetting({
          position: new THREE.Vector3(0, 0, 5.5),
          fov: 100,
        })
      } else if (width <= 460) {
        setSetting({
          position: new THREE.Vector3(0, 0, 7.5),
          fov: 100,
        })
      }
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <section className="homePage">
      <Canvas
        style={{ width: "100vw", height: "100vh" }}
        camera={{ position: setting.position, fov: setting.fov }}
      >
        <directionalLight intensity={2} />
        <Suspense fallback={<Loading />}>
          <Computer position={[0, -3, -1]} setInfo={setInfo} setting={setting}/>
        </Suspense>
      </Canvas>
      {info.show && (
        <div className={`infoBlock ${info.position}`}>
          <h1 className="title">{list[info.number - 1].title}</h1>
          <div className="content"></div>
        </div>
      )}
    </section>
  )
}
