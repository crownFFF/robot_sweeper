"use client"
import React, { Suspense, useRef, useState } from "react"
import Loading from "@/components/Loading"
import emailjs from "@emailjs/browser"
import useAlert from "@/hooks/useAlert"
import Alert from "@/components/Alert"
import dynamic from "next/dynamic"
import "@/app/contact/contact.scss"
const Canvas = dynamic(
  () => import("@react-three/fiber").then((mod) => mod.Canvas),
  { ssr: false }
)
const Car = dynamic(() => import("@/models/Car"), { ssr: false })

const Page = () => {
  // 綁定表單
  const formRef = useRef(null)
  // 控制初始值
  const [value, setValue] = useState({ name: "", email: "", message: "" })
  // 控制模型動畫
  const [currentAnimation, setCurrentAnimation] = useState("Static Pose")
  // 送出加載控制
  const [isLoading, setIsLoading] = useState(false)
  // 提示彈窗
  const { alert, showAlert, hideAlert } = useAlert()
  // 表單輸入綁定
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValue({ ...value, [e.target.name]: e.target.value })
  }
  // 表單focus
  const handleFocus = () => {
    // 模型動畫
    setCurrentAnimation("Idle.2")
  }
  // 表單Blur
  const handleBlur = () => {
    // 模型動畫
    setCurrentAnimation("Static Pose")
  }
  // 表單送出
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // 阻止默認
    e.preventDefault()
    // 加載控制
    setIsLoading(true)
    // 模型動畫
    setCurrentAnimation("Arranque")
    // email組件
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        {
          from_name: value.name,
          to_name: "Tony",
          from_email: value.email,
          message: value.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
      )
      .then(() => {
        setIsLoading(false)
        showAlert({ show: true, type: "success" })
        setTimeout(() => {
          hideAlert()
          setCurrentAnimation("Static Pose")
          setValue({ name: "", email: "", message: "" })
        }, 4000)
      })
      .catch((error) => {
        showAlert({ show: true, type: "danger" })
        setCurrentAnimation("Static Pose")
        console.error(error)
      })
  }

  return (
    <section className="contactPage">
      {alert.show && <Alert {...alert} />}
      <form ref={formRef} onSubmit={handleSubmit}>
        <label>
          Your Name
          <input
            type="text"
            name="name"
            required
            value={value.name}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </label>
        <label>
          Your Email
          <input
            type="email"
            name="email"
            required
            value={value.email}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </label>
        <label>
          Message
          <textarea
            name="message"
            value={value.message}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </label>
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Sending..." : "Send Message"}
        </button>
      </form>
      <Canvas
        camera={{ position: [0, 2, 5], far: 1000, near: 0.1, fov: 75 }}
        className="canvasBlock"
      >
        <directionalLight intensity={5} position={[0, 1.5, 2.5]} />
        <Suspense fallback={<Loading />}>
          <Car
            position={[0, 0, 0.5]}
            rotation={[0, -0.4, 0]}
            scale={[0.8, 0.8, 0.8]}
            currentAnimation={currentAnimation}
          />
        </Suspense>
      </Canvas>
    </section>
  )
}

export default Page
