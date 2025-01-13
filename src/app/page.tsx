"use client"
import Loading from "@/components/Loading"
import React, { Suspense, useState } from "react"
import { list } from "@/constants"
import dynamic from 'next/dynamic'
type Info = {
  show: boolean
  number: number
  position: "right" | "left"
}
const Canvas = dynamic(() => import("@react-three/fiber").then(mod => mod.Canvas), { ssr: false })
const Computer = dynamic(() => import("@/models/Computer"), { ssr: false })

export default function Home() {
  const [info, setInfo] = useState<Info>({
    show: false,
    number: 0,
    position: "right",
  })

  return (
    <section className="homePage">
      <Canvas style={{ width: "100vw", height: "100vh" }}>
        <directionalLight intensity={2} />
        <Suspense fallback={<Loading />}>
          <Computer position={[0, -3, -1]} setInfo={setInfo} />
        </Suspense>
      </Canvas>
      {info.show && (
        <div className={`infoBlock ${info.position}`}>
          <h1 className="title">{list[info.number-1].title}</h1>
          <div className="content">
            
          </div>
        </div>
      )}
    </section>
  )
}
