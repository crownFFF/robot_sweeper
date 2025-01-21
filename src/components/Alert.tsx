"use client"
import React, { useRef } from "react"
import { LottieRefCurrentProps } from "lottie-react"
import successAnimatiom from "@/animation/success.json"
import dynamic from "next/dynamic"
import { AlertProps } from '@/lib'

const Lottie = dynamic(() => import("lottie-react"), { ssr: false })

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
