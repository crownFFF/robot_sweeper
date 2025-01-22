"use client"
import * as THREE from "three"
import Loading from "@/components/Loading"
import React, { Suspense, useEffect, useState } from "react"
import { list } from "@/constants"
import dynamic from "next/dynamic"
import { Info } from "@/lib"
// 動態載入
const Canvas = dynamic(
  () => import("@react-three/fiber").then((mod) => mod.Canvas),
  { ssr: false }
)
// 模型
const Computer = dynamic(() => import("@/models/Computer"), { ssr: false })

export default function Home() {
  // 顯示狀態控制
  const [isShow, setIsShow] = useState(true)
  // 資訊顯示控制
  const [info, setInfo] = useState<Info>({
    show: false, //顯示
    number: 0, //索引
    position: "right", //位置
  })
  // 控制相機及模型 位置,fov
  const [setting, setSetting] = useState({
    position: new THREE.Vector3(0, 0, 2.5),
    fov: 100,
  })

  useEffect(() => {
    // 螢幕寬高設定
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
    // 監聽
    window.addEventListener("resize", handleResize)
    return () => {
      // 釋放資源
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
          <Computer
            position={[0, -3, -1]}
            setInfo={setInfo}
            setting={setting}
          />
        </Suspense>
      </Canvas>
      {info.show && (
        <div className={`infoBlock ${info.position}`}>
          <h1 className="title">
            {list[info.number - 1].title}
            <button
              className="back"
              onClick={() => {
                setIsShow(!isShow)
              }}
            >
              {isShow ? "HIDE" : "SHOW"}
            </button>
          </h1>
          {isShow && (
            <div className="content">
              {list[info.number - 1].content}
            </div>
          )}
          <div className="remind">點擊螢幕關閉...</div>
        </div>
      )}
    </section>
  )
}
