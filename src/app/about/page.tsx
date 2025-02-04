"use client"
import { Suspense, useState } from "react"
import { skills } from "@/constants"
import Link from "next/link"
import Loading from "@/components/Loading"
import dynamic from "next/dynamic"
import "@/app/about/about.scss"
const Canvas = dynamic(
  () => import("@react-three/fiber").then((mod) => mod.Canvas),
  { ssr: false }
)
const RobotPink = dynamic(() => import("@/models/RoboxPink"), { ssr: false })
const Page = () => {
  // 動畫狀態
  const [sayHi, setSayHi] = useState(false)
  // 滾動狀態
  const [scrollY, setScrollY] = useState(0)
  // 滾動高度
  const handleScroll = function (e: React.UIEvent<HTMLDivElement>) {
    const scrollPosition = e.currentTarget.scrollTop
    setScrollY(scrollPosition)
  }

  return (
    <section className=" aboutPage">
      <Canvas
        style={{
          height: "100vh",
        }}
        camera={{
          position: [2, 5, 10], // 設置相機的位置 (x, y, z)
          fov: 75, // 視野角度
          near: 0.1, // 近剪切面
          far: 1000, // 遠剪切面
        }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight intensity={3} />
        <Suspense fallback={<Loading />}>
          <RobotPink
            position={[0, -1, 2]}
            rotation={[0, 0.25, 0]}
            scale={[2, 2, 2]}
            sayHi={sayHi}
            scrollY={scrollY}
          />
        </Suspense>
      </Canvas>
      <div className="content">
        <div className="cardList" onScroll={handleScroll}>
          <div className="card">
            <h1>
              <span className="title">Hi ! </span>
              <br />I am <span className="name">Tony!</span> Nice to meet you!
              <br /> This is my Personal Introduction Web
            </h1>
            <button onClick={() => setSayHi(!sayHi)}>
              {!sayHi ? "Say Hi!!!" : "Stop"}
            </button>
          </div>
          <div className="card">
            <h1>
              <span className="title">About Web</span>
              <br />
              這個網站主要用於個人履歷介紹網站,此網站結合3D模型以及3D動畫製作而成。
              <br />
              會使用3D模型進行設計的原因是我想試著把網站的互動性提高,不再局限於平面2D的動畫。
              <br />
              使用3D模型並試著融合NEXT前端框件進行設計,一方面提高對於模型在網頁上的應用,一方面練習對於前端框架的運用。
              <br />
              由於我對於3D模型建模還在學習階段,
              <br />
              所以此網頁的模型都是在Sketchfab網站上所下載運用的。
              <br />
              未來期許自己能夠將自己創作的模型運用到網頁中,並提高對於3D網站的互動體驗
              <br />
              <br />
              感謝您瀏覽此網站!
              <br />
              若有任何疑問可以通過<Link href='/contact'>Email</Link>與我聯繫
            </h1>
          </div>
          <div className="card flex-col">
            <h1 className="title">SKILLS</h1>
            <h1>I used these skills in this work</h1>
            <div className="iconList">
              {skills.map((skill) => (
                <div className="iconItem" key={skill.id}>
                  <i className={skill.name}></i>
                  <p>{skill.alt}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Page
