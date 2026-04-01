"use client"
import { useAnimations, useGLTF } from "@react-three/drei"
import { useEffect, useRef } from "react"
import useFormStore from "../store/useForm"
const Robot = () => {
  const group = useRef(null)
  const { scene, animations } = useGLTF("./models/car.glb")
  const { actions } = useAnimations(animations, group)
  const currentAnimation = useFormStore(s => s.currentAnimation)
  useEffect(() => {
    Object.values(actions).forEach(a => a?.stop())
    if (actions[currentAnimation]) {
      actions[currentAnimation]?.play()
    }
  }, [actions, currentAnimation])
  return (
    <primitive
      ref={group}
      object={scene}
      position={[0, -1.5, 0]}
      rotation={[0, -Math.PI / 8, 0]}
    />
  )
}
useGLTF.preload("./models/car.glb")
export default Robot
