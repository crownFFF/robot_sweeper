"use client"
import { Canvas } from "@react-three/fiber"
import * as THREE from "three"
import Robot from "../components/Robot"
import { useRef } from "react"
import useDraggable from "../hooks/useDraggable"
import useFormStore from "../store/useForm"
import emailjs from "@emailjs/browser"

const Email = () => {
  const root = useRef(null)
  useDraggable({ root })
  const formRef = useRef(null)

  const {
    value,
    isLoading,
    updateField,
    resetValue,
    setCurrentAnimation,
    setIsLoading,
  } = useFormStore()

  const handleChange = e => {
    updateField(e.target.name, e.target.value)
  }
  const handleFocus = () => {
    setCurrentAnimation("AllAnim")
  }
  const handleBlur = () => {
    setCurrentAnimation("Static Pose")
  }
  const handleSubmit = async e => {
    e.preventDefault()
    try {
      setIsLoading(true)
      setCurrentAnimation("Arranque")
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          from_name: value.name,
          to_name: "Tomy",
          from_email: value.email,
          message: value.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      )
      setIsLoading(false)
      if (!isLoading) {
        setCurrentAnimation("Static Pose")
        resetValue()
        formRef.current.reset()
      }
    } catch (error) {
      setIsLoading(false)
      setCurrentAnimation("Static Pose")
      console.error(error)
    }
  }

  return (
    <>
      <Canvas
        gl={{
          antialias: true,
          outputColorSpace: THREE.SRGBColorSpace,
          localClippingEnabled: true,
          toneMapping: THREE.ACESFilmicToneMapping,
        }}
        dpr={[1, 2]}
      >
        <spotLight
          position={[2, 4, 2]}
          intensity={10}
          distance={5}
          angle={Math.PI / 2}
          penumbra={1}
          decay={0}
          color={"#ff0000"}
        />
        <spotLight
          position={[-2, 4, 2]}
          intensity={10}
          distance={5}
          angle={Math.PI / 2}
          penumbra={1}
          decay={0}
          color={"#00ffff"}
        />
        <directionalLight />
        <Robot />
      </Canvas>
      <article ref={root}>
        <form ref={formRef} onSubmit={handleSubmit}>
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <label htmlFor="email">Your Email</label>
          <input
            type="text"
            id="email"
            name="email"
            required
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <label htmlFor="message">Message</label>
          <textarea
            type="text"
            id="message"
            name="message"
            required
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <button type="submit" disabled={isLoading}>
            {isLoading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </article>
    </>
  )
}

export default Email
