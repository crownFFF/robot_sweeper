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
              <p>這份作品為以我個人的資訊介紹做為內容來呈現,主要打造為個人資訊履歷網站</p>
              <p>在這個作品中,使用了NEXT作為框架,結合了3D模型來作呈現</p>
              <p>以電腦、機器這方面的素材作為主題,走向較為工業的風格</p>
              <p>LOGO以lottie製作生成的動畫LOGO</p>
              <p>首頁在互動方面以電腦螢幕作為基礎,將各個螢幕與不同的資訊連結,點擊每個螢幕都會呈現不同的資訊,並將畫面向螢幕作動畫過度,</p>
              <p>螢幕上的動畫雜訊與標題呈現出工業的氛圍</p>
              <p>在關於頁面以及聯絡頁面,結合了機器人模型作為呈現,並將畫面滾動或是點擊與模型綁定,呈現不一樣的動畫</p>
              <p>在聯絡頁面使用了第三方庫結合Email,可以實際將郵件寄送</p>
              <p>在作品頁面,內容呈現以個人的學習作品,以及自己發想的作品,在背景方面以3D模型並結合了3D動畫來呈現,</p>
              <p>以透過camera以及燈光來調整動畫</p>
            </div>
            <div className="href">
              <a href="https://robot-sweeper.vercel.app/" target="_blank">
                網址連結
              </a>
            </div>
          </div>
        </div>
        <div className="por_item">
        <div className="pro_img">
            <Image
              src="/images/coffee.png"
              alt="robot"
              width="100"
              height="100"
              priority
            />
          </div>
          <div className="pro_info">
            <div className="title">Figma-GABI</div>
            <div className="skill">
              <p>Figma</p>
            </div>
            <div className="content">
              <p>運用Figma模擬咖啡餐館官網設計</p>
              <p>內建模擬網站元件</p>
              <p>模擬展現出實際網站效果</p>
            </div>
            <div className="href">
              <a href="https://www.figma.com/proto/Q2bVkkDjaYydbpU1ESDUpK/coffee?" target="_blank">
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
      </div>
    </section>
  )
}

export default Page
