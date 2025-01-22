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
              <br /> This is my Three.js and Next.js Work
            </h1>
            <button onClick={() => setSayHi(!sayHi)}>
              {!sayHi ? "Say Hi!!!" : "Stop"}
            </button>
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
          <div className="card  flex-col">
            <h1 className="title">模型引用</h1>
            <h1>
              3D 模型來源於
              <Link href="https://sketchfab.com/Yandrack" target="_blank">
                Sketchfab 作者:Yandrack
              </Link>
              <br /> 並遵循其授權協議和使用條款
            </h1>
            <h1>模型僅用於非商業用途（如展示、學習、研究等）</h1>
            <h1>
              Sketchfab網站或原作者Yandrack對模型擁有完整的知識產權。本網站不對模型的原創性、準確性或適用性承擔責任。
            </h1>
            <h1>
              若在使用過程中侵犯到您的權益，請通過{" "}
              <Link href="mailto:asd8792323@gmail.com">聯繫郵箱</Link>{" "}
              與我聯繫，我將在收到通知後立即移除相關內容。
            </h1>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Page
