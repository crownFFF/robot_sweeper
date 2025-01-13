"use client"
import React, { useRef } from "react"
import Lottie, { LottieRefCurrentProps } from "lottie-react"
import successAnimatiom from "@/animation/success.json"

interface AlertProps {
  show?: boolean
  type: string
}

const Alert = ({ show, type }: AlertProps) => {
  const lottieRef = useRef<LottieRefCurrentProps>(null!)

  return (
    <div className="alertBlock">
      {type === "success" ? (
        <Lottie
          lottieRef={lottieRef}
          animationData={successAnimatiom}
          autoplay={true}
          loop={false}
          className="logo"
        />
      ) : (
        <div className="errorBlock">OOH!!{show} Something went wrong </div>
      )}
    </div>
  )
}

export default Alert
