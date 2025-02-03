"use client"
import React, { Suspense, useEffect } from "react"
import dynamic from "next/dynamic"
import Loading from "@/components/Loading"
const Canvas = dynamic(
  () => import("@react-three/fiber").then((mod) => mod.Canvas),
  { ssr: false }
)
const CityBox = dynamic(() => import("@/models/CityBox"), { ssr: false })
import { getProject } from "@theatre/core"
import { editable as e, SheetProvider } from "@theatre/r3f"
import { PerspectiveCamera } from "@theatre/r3f"
import cityState from "@/assets/states/cityState.json"
import "@/app/project/project.scss"
import Image from "next/image"
import studio from "@theatre/studio"
import r3fExtension from "@theatre/r3f/dist/extension"

const demoProject = getProject("demoProject", { state: cityState }).sheet(
  "demoSheet"
)

// studio.initialize()
// studio.extend(r3fExtension)

const Page = () => {
  useEffect(() => {
    demoProject.project.ready.then(() =>
      demoProject.sequence.play({
        iterationCount: Infinity,
        range: [0, 19],
        rate: 1,
      })
    )
  }, [])

  return (
    <section className="projectPage">
      <Canvas style={{ width: "100vw", height: "100vh" }}>
        <SheetProvider sheet={demoProject}>
          <PerspectiveCamera
            theatreKey="Camera"
            makeDefault
            position={[5, 5, -5]}
            fov={75}
          />
          <e.pointLight intensity={100} theatreKey="Light" />
          <Suspense fallback={<Loading />}>
            <CityBox />
          </Suspense>
        </SheetProvider>
      </Canvas>
      <div className="pro_list">
        <div className="por_item">
          <div className="pro_img">
            <Image src="/images/TS.png" alt="TS" width="100" height="100" priority />
          </div>
          <div className="pro_info">
            <div className="title">TypeScript Learn</div>
            <div className="skill">
              <p>TypeScript</p>
            </div>
            <div className="content">
              <p>TypeScript的學習筆記</p>
              <p>記錄從零開始學習TypeScript的過程</p>
              <p>整理成MarkDown筆記</p>
            </div>
            <div className="href">
              <a href="https://crownfff.github.io/TS/" target="_blank">
                網址連結
              </a>
            </div>
          </div>
        </div>
        <div className="por_item">
          <div className="pro_img">
            <Image
              src="/images/dashboard.png"
              alt="dashboard"
              width="100"
              height="100"
              priority
            />
          </div>
          <div className="pro_info">
            <div className="title">DashBoard</div>
            <div className="skill">
              <p>react</p>
              <p>next.js</p>
              <p>TypeScript</p>
            </div>
            <div className="content">
              <p>next官方網站的學習內容</p>
              <p>跟著官方學習手冊建構而成的儀表板網站</p>
              <p>學習next基礎以及與資料庫連結</p>
            </div>
            <div className="href">
              <a
                href="https://next-practice-18i382tvl-crowns-projects-4209376d.vercel.app/"
                target="_blank"
              >
                網址連結
              </a>
            </div>
          </div>
        </div>
        <div className="por_item">
          <div className="pro_img">
            <Image
              src="/images/island.png"
              alt="Island"
              width="100"
              height="100"
              priority
            />
          </div>
          <div className="pro_info">
            <div className="title">Three_Island</div>
            <div className="skill">
              <p>react</p>
              <p>next.js</p>
              <p>three.js</p>
              <p>TypeScript</p>
              <p>R3F</p>
              <p>SCSS</p>
              <p>Tailwind</p>
            </div>
            <div className="content">
              <p>使用next框架建構的3D網站</p>
              <p>
                此網站為根據
                <a
                  href="https://www.youtube.com/watch?v=FkowOdMjvYo"
                  target="_blank"
                >
                  Youtube教學
                </a>
                製作而成
              </p>
              <p>
                <a
                  href="https://www.youtube.com/watch?v=FkowOdMjvYo"
                  target="_blank"
                >
                  素材網址
                </a>
              </p>
              <p>此網站設置滑鼠點擊以及鍵盤左右按鍵功能</p>
              <p>控制模型的動畫以及旋轉</p>
            </div>
            <div className="href">
              <a href="https://three-next-teal.vercel.app/" target="_blank">
                網址連結
              </a>
            </div>
          </div>
        </div>
        <div className="por_item">
          <div className="pro_img">
            <Image
              src="/images/robot.png"
              alt="robot"
              width="100"
              height="100"
              priority
            />
          </div>
          <div className="pro_info">
            <div className="title">Robot-個人資訊網站</div>
            <div className="skill">
              <p>react</p>
              <p>next.js</p>
              <p>three.js</p>
              <p>Theatre.js</p>
              <p>TypeScript</p>
              <p>R3F</p>
              <p>SCSS</p>
            </div>
            <div className="content">
              <p>使用next建構的3D個人網站</p>
              <p>以THREE.js呈現3D模型</p>
              <p>以及使用Theatre.js製作3D動畫</p>
            </div>
            <div className="href">
              <a href="https://robot-sweeper.vercel.app/" target="_blank">
                網址連結
              </a>
            </div>
          </div>
        </div>
        <div className="por_item"></div>
        <div className="por_item"></div>
        <div className="por_item"></div>
        <div className="por_item"></div>
        <div className="por_item"></div>
        <div className="por_item"></div>
        <div className="por_item"></div>
        <div className="por_item"></div>
      </div>
    </section>
  )
}

export default Page
