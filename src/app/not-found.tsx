'use client'
import Lottie, { LottieRefCurrentProps } from "lottie-react"
import notFoundAnimatiom from "@/animation/notfound.json"
import { useRef } from "react"

export default function NotFound() {
    const notRef = useRef<LottieRefCurrentProps>(null!)
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Lottie
        lottieRef={notRef}
        animationData={notFoundAnimatiom}
        autoplay={true}
        loop={false}
      ></Lottie>
    </div>
  )
}
