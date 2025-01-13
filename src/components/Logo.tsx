"use client"
import React, { useEffect, useRef } from "react"
import Lottie, { LottieRefCurrentProps } from "lottie-react"
import robotAnimatiom from "@/animation/robot.json"

const Logo: React.FC<{ isPlay: boolean }> = ({ isPlay }) => {
  const lottieRef = useRef<LottieRefCurrentProps>(null!)

  useEffect(() => {
    if (isPlay) {
      lottieRef.current.setDirection(1)
      lottieRef.current.play()
    } else {
      lottieRef.current.setDirection(-1)
      lottieRef.current.play()
    }
  }, [isPlay])
  return (
    <div className="logoBlock">
      <Lottie
        lottieRef={lottieRef}
        animationData={robotAnimatiom}
        autoplay={false}
        loop={false}
        className="logo"
      ></Lottie>
    </div>
  )
}

export default Logo
