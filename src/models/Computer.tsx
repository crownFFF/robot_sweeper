"use client"
import * as THREE from "three"
import React, { useEffect, useRef, useState } from "react"
import { useGLTF } from "@react-three/drei"
import { GLTF } from "three-stdlib"
import { useFrame, useThree } from "@react-three/fiber"

type GLTFResult = GLTF & {
  nodes: {
    Object_4: THREE.Mesh
    Object_6: THREE.Mesh
    Object_8: THREE.Mesh
    Object_10: THREE.Mesh
    Object_12: THREE.Mesh
    Object_14: THREE.Mesh
    Object_16: THREE.Mesh
    Object_18: THREE.Mesh
    Object_20: THREE.Mesh
    Object_22: THREE.Mesh
    Object_24: THREE.Mesh
    Object_26: THREE.Mesh
    Object_28: THREE.Mesh
    Object_30: THREE.Mesh
    Object_32: THREE.Mesh
    Object_34: THREE.Mesh
    Object_36: THREE.Mesh
    Object_38: THREE.Mesh
    Object_40: THREE.Mesh
    Object_42: THREE.Mesh
    Object_44: THREE.Mesh
    Object_46: THREE.Mesh
    Object_48: THREE.Mesh
    Object_50: THREE.Mesh
    Object_52: THREE.Mesh
    Object_54: THREE.Mesh
    Object_56: THREE.Mesh
    Object_58: THREE.Mesh
    Object_60: THREE.Mesh
    Object_62: THREE.Mesh
    Object_64: THREE.Mesh
    Object_66: THREE.Mesh
    Object_68: THREE.Mesh
    Object_70: THREE.Mesh
    Object_72: THREE.Mesh
    Object_74: THREE.Mesh
    Object_76: THREE.Mesh
    Object_78: THREE.Mesh
    Object_80: THREE.Mesh
    Object_82: THREE.Mesh
    Object_84: THREE.Mesh
    Object_86: THREE.Mesh
    Object_88: THREE.Mesh
    Object_90: THREE.Mesh
    Object_92: THREE.Mesh
    Object_94: THREE.Mesh
    Object_96: THREE.Mesh
    Object_98: THREE.Mesh
    Object_100: THREE.Mesh
    Object_102: THREE.Mesh
    Object_104: THREE.Mesh
    Object_106: THREE.Mesh
    Object_108: THREE.Mesh
    Object_110: THREE.Mesh
    Object_112: THREE.Mesh
    Object_114: THREE.Mesh
    Object_116: THREE.Mesh
    Object_118: THREE.Mesh
    Object_120: THREE.Mesh
    Object_122: THREE.Mesh
    Object_124: THREE.Mesh
    Object_126: THREE.Mesh
    Object_128: THREE.Mesh
    Object_130: THREE.Mesh
    Object_132: THREE.Mesh
    Object_134: THREE.Mesh
    Object_136: THREE.Mesh
    Object_138: THREE.Mesh
    Object_140: THREE.Mesh
    Object_142: THREE.Mesh
    Object_144: THREE.Mesh
    Object_146: THREE.Mesh
    Object_148: THREE.Mesh
    Object_150: THREE.Mesh
    Object_152: THREE.Mesh
    Object_154: THREE.Mesh
    Object_156: THREE.Mesh
    Object_158: THREE.Mesh
    Object_160: THREE.Mesh
    Object_162: THREE.Mesh
    Object_164: THREE.Mesh
    Object_166: THREE.Mesh
    Object_168: THREE.Mesh
    Object_170: THREE.Mesh
    Object_172: THREE.Mesh
    Object_174: THREE.Mesh
    Object_176: THREE.Mesh
    Object_178: THREE.Mesh
    Object_180: THREE.Mesh
    Object_182: THREE.Mesh
    Object_184: THREE.Mesh
    Object_186: THREE.Mesh
    Object_188: THREE.Mesh
    Object_190: THREE.Mesh
    Object_192: THREE.Mesh
    Object_194: THREE.Mesh
    Object_196: THREE.Mesh
    Object_198: THREE.Mesh
    Object_200: THREE.Mesh
    Object_202: THREE.Mesh
    Object_204: THREE.Mesh
    Object_206: THREE.Mesh
    Object_207: THREE.Mesh
    Object_209: THREE.Mesh
    Object_210: THREE.Mesh
    Object_212: THREE.Mesh
    Object_213: THREE.Mesh
    Object_215: THREE.Mesh
    Object_216: THREE.Mesh
    Object_218: THREE.Mesh
    Object_219: THREE.Mesh
    Object_221: THREE.Mesh
    Object_222: THREE.Mesh
    Object_224: THREE.Mesh
    Object_225: THREE.Mesh
    Object_227: THREE.Mesh
    Object_228: THREE.Mesh
    Object_230: THREE.Mesh
    Object_231: THREE.Mesh
  }
  materials: {
    Texture: THREE.MeshStandardMaterial
    ["Material.001"]: THREE.MeshStandardMaterial
    Screen: THREE.MeshStandardMaterial
  }
}
type Info = {
  show: boolean
  number: number
  position: "right" | "left"
}
type Group = JSX.IntrinsicElements["group"] & {
  setInfo: React.Dispatch<React.SetStateAction<Info>>
}

function CameraController() {
  const { camera } = useThree()
  const perspectiveCamera = camera as THREE.PerspectiveCamera
  const targetPosition = useRef(new THREE.Vector3())
  const targetLookAt = useRef(new THREE.Vector3())
  const targetFov = useRef(perspectiveCamera.fov) // 目標 FOV
  const isAnimating = useRef(false)
  const animationProgress = useRef(0) // 動畫進度 (秒)

  const duration = 1.5 // 動畫時長 (秒)

  const moveCameraTo = (
    position: THREE.Vector3,
    lookAt: THREE.Vector3,
    fov: number
  ) => {
    targetPosition.current.copy(position)
    targetLookAt.current.copy(lookAt)
    targetFov.current = fov
    // 初始化動畫狀態
    animationProgress.current = 0
    isAnimating.current = true
  }

  useFrame((_, delta) => {
    if (!isAnimating.current) return
    // 更新動畫進度
    animationProgress.current += delta
    const t = Math.min(animationProgress.current / duration, 1) // 進度值 [0, 1]

    // 使用插值更新位置和方向
    perspectiveCamera.position.lerp(targetPosition.current, t)

    const currentLookAt = new THREE.Vector3().lerpVectors(
      perspectiveCamera.getWorldDirection(new THREE.Vector3()),
      targetLookAt.current.clone().sub(perspectiveCamera.position),
      t
    )
    perspectiveCamera.lookAt(
      perspectiveCamera.position.clone().add(currentLookAt)
    )

    // 插值計算新的 FOV
    perspectiveCamera.fov = THREE.MathUtils.lerp(
      perspectiveCamera.fov,
      targetFov.current,
      t
    )

    // 更新投影矩陣
    perspectiveCamera.updateProjectionMatrix()

    // 終止動畫
    if (t >= 1) {
      isAnimating.current = false
    }
  })

  return { moveCameraTo }
}

const Computer: React.FC<Group> = ({ setInfo, ...props }) => {
  const cameraController = CameraController()
  const { nodes, materials } = useGLTF("/computers.glb") as GLTFResult
  const screenRef = useRef<THREE.Mesh>(null!)
  const [videoTexture, setVideoTexture] = useState<THREE.VideoTexture | null>(
    null
  )
  const [back, setBack] = useState(false)

  const handleClick = (
    positionArr: number[],
    num: number,
    position: "right" | "left"
  ) => {
    if (back) {
      cameraController.moveCameraTo(
        new THREE.Vector3(0, 0, 5),
        new THREE.Vector3(0, 0, 0),
        75
      )
      setInfo({
        show: !back,
        number: num,
        position: position,
      })
    } else {
      const targetPosition: THREE.Vector3Tuple =
        screenRef.current.position.toArray()
      cameraController.moveCameraTo(
        new THREE.Vector3(
          targetPosition[0] - positionArr[0],
          targetPosition[1] + positionArr[1],
          targetPosition[2] + positionArr[2]
        ),
        new THREE.Vector3(...targetPosition),
        25
      )
      setTimeout(() => {
        setInfo({
          show: !back,
          number: num,
          position: position,
        })
      }, 800)
    }
    setBack(!back)
  }

  useEffect(() => {
    const video = document.createElement("video")
    video.src = "/video/success.mp4"
    video.loop = true
    video.muted = true
    video.play()
    const videoTexture = new THREE.VideoTexture(video)
    videoTexture.repeat.set(3.5, 3)
    videoTexture.offset.set(-0.05, -1.2)
    setVideoTexture(videoTexture)
    return () => {
      video.pause()
      video.src = ""
      videoTexture.dispose()
    }
  }, [])

  return (
    <group {...props} dispose={null}>
      <group position={[0.27, 1.529, -2.613]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_206.geometry}
          material={materials.Texture}
        />
        <mesh
          onClick={() => handleClick([0.05, 0.05, 0.2], 1, "right")}
          ref={screenRef}
          castShadow
          receiveShadow
          geometry={nodes.Object_207.geometry}
          material={materials.Screen}
        >
          <meshBasicMaterial map={videoTexture} />
        </mesh>
      </group>
      <group position={[-1.43, 2.496, -1.8]} rotation={[0, 1.002, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_209.geometry}
          material={materials.Texture}
        />
        <mesh
          onClick={() => handleClick([-0.025, -0.005, 0.1], 2, "right")}
          ref={screenRef}
          castShadow
          receiveShadow
          geometry={nodes.Object_210.geometry}
          material={materials.Screen}
        />
      </group>
      <group position={[-2.731, 0.629, -0.522]} rotation={[0, 1.087, 0]}>
        <mesh
          onClick={() => handleClick([-0.035, 0.026, 0.03], 3, "right")}
          ref={screenRef}
          castShadow
          receiveShadow
          geometry={nodes.Object_212.geometry}
          material={materials.Texture}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_213.geometry}
          material={materials.Screen}
        />
      </group>
      <group position={[1.845, 0.377, -1.771]} rotation={[0, -Math.PI / 9, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_215.geometry}
          material={materials.Texture}
        />
        <mesh
          onClick={() => handleClick([0.04, 0.07, 0.1], 4, "left")}
          ref={screenRef}
          castShadow
          receiveShadow
          geometry={nodes.Object_216.geometry}
          material={materials.Screen}
        />
      </group>
      <group
        position={[3.11, 2.145, -0.18]}
        rotation={[0, -0.793, 0]}
        scale={0.81}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_218.geometry}
          material={materials.Texture}
        />
        <mesh
          onClick={() => handleClick([0.5, 0.055, 0.06], 5, "right")}
          ref={screenRef}
          castShadow
          receiveShadow
          geometry={nodes.Object_219.geometry}
          material={materials.Screen}
        />
      </group>
      <group
        position={[-3.417, 3.056, 1.303]}
        rotation={[0, 1.222, 0]}
        scale={0.9}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_221.geometry}
          material={materials.Texture}
        />
        <mesh
          onClick={() => handleClick([-0.5, -0.1, 0.06], 6, "right")}
          ref={screenRef}
          castShadow
          receiveShadow
          geometry={nodes.Object_222.geometry}
          material={materials.Screen}
        />
      </group>
      <group position={[-3.899, 4.287, -2.642]} rotation={[0, 0.539, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_224.geometry}
          material={materials.Texture}
        />
        <mesh
          onClick={() => handleClick([-0.035, -0.025, 0.05], 7, "right")}
          ref={screenRef}
          castShadow
          receiveShadow
          geometry={nodes.Object_225.geometry}
          material={materials.Screen}
        />
      </group>
      <group
        position={[0.992, 4.287, -4.209]}
        rotation={[0, 0.429, 0]}
        scale={[-1, 1, 1]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_227.geometry}
          material={materials.Texture}
        />
        <mesh
          onClick={() => handleClick([0.01, -0.075, 0.2], 8, "left")}
          ref={screenRef}
          castShadow
          receiveShadow
          geometry={nodes.Object_228.geometry}
          material={materials.Screen}
        />
      </group>
      <group position={[4.683, 4.29, -1.558]} rotation={[0, -Math.PI / 3, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_230.geometry}
          material={materials.Texture}
        />
        <mesh
          onClick={() => handleClick([0.45, -0.15, 0.1], 9, "right")}
          ref={screenRef}
          castShadow
          receiveShadow
          geometry={nodes.Object_231.geometry}
          material={materials.Screen}
        />
      </group>

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4.geometry}
        material={materials.Texture}
        position={[0.165, 0.794, -1.972]}
        rotation={[-0.544, 0.929, -1.119]}
        scale={0.5}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_6.geometry}
        material={materials.Texture}
        position={[-2.793, 0.27, 1.816]}
        rotation={[-1.44, 1.219, 1.432]}
        scale={0.5}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_8.geometry}
        material={materials.Texture}
        position={[-5.603, 4.615, -0.027]}
        rotation={[-1.955, 0.163, 1.202]}
        scale={0.5}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_10.geometry}
        material={materials.Texture}
        position={[2.621, 1.985, -2.473]}
        rotation={[-0.419, -0.704, -1.851]}
        scale={0.5}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_12.geometry}
        material={materials.Texture}
        position={[4.598, 3.459, 1.19]}
        rotation={[-1.236, -0.719, 0.48]}
        scale={0.5}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_14.geometry}
        material={materials["Material.001"]}
        scale={13}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_16.geometry}
        material={materials.Texture}
        position={[0.63, 0, -3]}
        rotation={[0, 0.17, 0]}
        scale={1.52}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_18.geometry}
        material={materials.Texture}
        position={[-0.186, 0, -2.962]}
        rotation={[0, -0.064, 0]}
        scale={1.52}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_20.geometry}
        material={materials.Texture}
        position={[-2.36, 0.32, -2.018]}
        rotation={[0, 0.534, -Math.PI / 2]}
        scale={1.52}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_22.geometry}
        material={materials.Texture}
        position={[-2.288, 1.56, -2.263]}
        rotation={[0, -0.012, -Math.PI / 2]}
        scale={1.52}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_24.geometry}
        material={materials.Texture}
        position={[-2.424, 0.938, -2.247]}
        rotation={[Math.PI, -0.136, -Math.PI / 2]}
        scale={[-1.52, 1.52, 1.52]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_26.geometry}
        material={materials.Texture}
        position={[-2.195, 2.188, -1.867]}
        rotation={[Math.PI, -0.512, -Math.PI / 2]}
        scale={[-1.52, 1.52, 1.52]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_28.geometry}
        material={materials.Texture}
        position={[0.353, 2.352, -3.336]}
        rotation={[-0.255, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_30.geometry}
        material={materials.Texture}
        position={[0.183, 2.801, -2.854]}
        rotation={[0.093, 0.146, -0.014]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_32.geometry}
        material={materials.Texture}
        position={[-3.528, 0, 0.586]}
        rotation={[Math.PI, -1.085, Math.PI]}
        scale={1.52}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_34.geometry}
        material={materials.Texture}
        position={[-2.896, 0.3, -1.466]}
        rotation={[Math.PI, -1.347, Math.PI / 2]}
        scale={1.52}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_36.geometry}
        material={materials.Texture}
        position={[-3.528, 1.528, 0.586]}
        rotation={[0, 0.911, 0]}
        scale={1.52}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_38.geometry}
        material={materials.Texture}
        position={[1.895, 0, -1.944]}
        rotation={[0, -0.436, 0]}
        scale={[1.5, 1, 1.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_40.geometry}
        material={materials.Texture}
        position={[3.423, 0, 0.005]}
        rotation={[-Math.PI, 1.127, -Math.PI]}
        scale={1.52}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_42.geometry}
        material={materials.Texture}
        position={[3.224, 0, -0.804]}
        rotation={[0, -1.324, 0]}
        scale={1.52}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_44.geometry}
        material={materials.Texture}
        position={[3.53, 1.834, 0.44]}
        rotation={[-Math.PI, 1.324, Math.PI / 2]}
        scale={1.52}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_46.geometry}
        material={materials.Texture}
        position={[1.862, 1.61, -1.807]}
        rotation={[0, -Math.PI / 3, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_48.geometry}
        material={materials.Texture}
        position={[4.086, 2.183, 2.41]}
        rotation={[0, -1.548, 1.571]}
        scale={1.52}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_50.geometry}
        material={materials.Texture}
        position={[4.255, 0.943, 2.219]}
        rotation={[0, -1.002, Math.PI / 2]}
        scale={1.52}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_52.geometry}
        material={materials.Texture}
        position={[4.314, 1.565, 2.343]}
        rotation={[Math.PI, 1.149, Math.PI / 2]}
        scale={[-1.52, 1.52, 1.52]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_54.geometry}
        material={materials.Texture}
        position={[3.87, 0.315, 2.35]}
        rotation={[3.142, 1.526, 1.571]}
        scale={[-1.52, 1.52, 1.52]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_56.geometry}
        material={materials.Texture}
        position={[3.954, 2.491, 1.607]}
        rotation={[0, -Math.PI / 3, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_58.geometry}
        material={materials.Texture}
        position={[-3.79, 0, 1.656]}
        rotation={[0, 1.393, 0]}
        scale={[-1.52, 1.52, 1.52]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_60.geometry}
        material={materials.Texture}
        position={[-3.79, 1.528, 1.656]}
        rotation={[-Math.PI, -1.218, -Math.PI]}
        scale={[-1.52, 1.52, 1.52]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_62.geometry}
        material={materials.Texture}
        position={[-3.693, 0, 2.585]}
        rotation={[0, -1.568, 0]}
        scale={1.52}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_64.geometry}
        material={materials.Texture}
        position={[-5.36, 2.183, 0.811]}
        rotation={[0, 0.772, Math.PI / 2]}
        scale={1.52}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_66.geometry}
        material={materials.Texture}
        position={[-5.614, 0.943, 0.817]}
        rotation={[0, 1.318, 1.571]}
        scale={1.52}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_68.geometry}
        material={materials.Texture}
        position={[-5.564, 1.565, 0.69]}
        rotation={[-Math.PI, -1.171, Math.PI / 2]}
        scale={[-1.52, 1.52, 1.52]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_70.geometry}
        material={materials.Texture}
        position={[-5.257, 0.315, 1.01]}
        rotation={[-Math.PI, -0.795, Math.PI / 2]}
        scale={[-1.52, 1.52, 1.52]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_72.geometry}
        material={materials.Texture}
        position={[-5.474, 2.794, 0.745]}
        rotation={[Math.PI, -1.155, Math.PI / 2]}
        scale={1.52}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_74.geometry}
        material={materials.Texture}
        position={[-5.39, 4.034, 0.986]}
        rotation={[Math.PI, -0.609, Math.PI / 2]}
        scale={1.52}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_76.geometry}
        material={materials.Texture}
        position={[-5.289, 3.412, 0.894]}
        rotation={[0, 0.757, Math.PI / 2]}
        scale={[-1.52, 1.52, 1.52]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_78.geometry}
        material={materials.Texture}
        position={[-5.696, 4.662, 0.718]}
        rotation={[0, 1.133, Math.PI / 2]}
        scale={[-1.52, 1.52, 1.52]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_80.geometry}
        material={materials.Texture}
        position={[-5.283, 0, -2.328]}
        rotation={[0, 0.755, 0]}
        scale={1.52}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_82.geometry}
        material={materials.Texture}
        position={[-5.952, 0, -0.641]}
        rotation={[0, 0.953, 0]}
        scale={1.52}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_84.geometry}
        material={materials.Texture}
        position={[-5.486, 0, -1.385]}
        rotation={[-Math.PI, -0.985, -Math.PI]}
        scale={1.52}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_86.geometry}
        material={materials.Texture}
        position={[-4.476, 0, -2.749]}
        rotation={[-Math.PI, -0.568, -Math.PI]}
        scale={1.52}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_88.geometry}
        material={materials.Texture}
        position={[-3.012, 0, -3.79]}
        rotation={[0, 0.597, 0]}
        scale={1.52}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_90.geometry}
        material={materials.Texture}
        position={[-3.716, 0, -2.886]}
        rotation={[0, 0.644, 0]}
        scale={1.52}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_92.geometry}
        material={materials.Texture}
        position={[-2.082, 0, -4.324]}
        rotation={[-Math.PI, -0.597, -Math.PI]}
        scale={1.52}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_94.geometry}
        material={materials.Texture}
        position={[-1.016, 0, -4.489]}
        rotation={[0, 0.308, 0]}
        scale={1.52}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_96.geometry}
        material={materials.Texture}
        position={[-0.084, 0, -5.026]}
        rotation={[-Math.PI, -0.039, -Math.PI]}
        scale={1.52}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_98.geometry}
        material={materials.Texture}
        position={[-5.315, 1.833, -1.412]}
        rotation={[0, 1.062, Math.PI / 2]}
        scale={1.52}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_100.geometry}
        material={materials.Texture}
        position={[-4.181, 1.833, -3.064]}
        rotation={[-Math.PI, -0.465, -Math.PI / 2]}
        scale={1.52}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_102.geometry}
        material={materials.Texture}
        position={[-1.758, 1.833, -3.605]}
        rotation={[0, -1.165, Math.PI / 2]}
        scale={1.52}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_104.geometry}
        material={materials.Texture}
        position={[-0.254, 1.833, -5.542]}
        rotation={[0, 1.553, 1.571]}
        scale={1.52}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_106.geometry}
        material={materials.Texture}
        position={[-4.194, 1.836, -2.768]}
        rotation={[0, 0.655, Math.PI / 2]}
        scale={[-1.52, 1.52, 1.52]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_108.geometry}
        material={materials.Texture}
        position={[-5.283, 2.143, -2.328]}
        rotation={[-Math.PI, -0.755, -Math.PI]}
        scale={1.52}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_110.geometry}
        material={materials.Texture}
        position={[-5.952, 2.143, -0.641]}
        rotation={[-Math.PI, -0.953, -Math.PI]}
        scale={1.52}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_112.geometry}
        material={materials.Texture}
        position={[-5.486, 2.143, -1.385]}
        rotation={[0, 0.985, 0]}
        scale={1.52}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_114.geometry}
        material={materials.Texture}
        position={[-4.476, 2.143, -2.749]}
        rotation={[0, 0.568, 0]}
        scale={1.52}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_116.geometry}
        material={materials.Texture}
        position={[-3.012, 2.143, -3.79]}
        rotation={[-Math.PI, -0.597, -Math.PI]}
        scale={1.52}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_118.geometry}
        material={materials.Texture}
        position={[-3.727, 2.143, -3.1]}
        rotation={[-Math.PI, -0.644, -Math.PI]}
        scale={1.52}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_120.geometry}
        material={materials.Texture}
        position={[-2.082, 2.143, -4.324]}
        rotation={[0, 0.597, 0]}
        scale={1.52}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_122.geometry}
        material={materials.Texture}
        position={[-1.016, 2.143, -4.489]}
        rotation={[-Math.PI, -0.308, -Math.PI]}
        scale={1.52}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_124.geometry}
        material={materials.Texture}
        position={[-0.084, 2.143, -5.026]}
        rotation={[0, 0.039, 0]}
        scale={1.52}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_126.geometry}
        material={materials.Texture}
        position={[-5.315, 3.976, -1.412]}
        rotation={[0, 1.062, Math.PI / 2]}
        scale={1.52}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_128.geometry}
        material={materials.Texture}
        position={[-4.181, 3.976, -3.064]}
        rotation={[-Math.PI, -0.465, -Math.PI / 2]}
        scale={1.52}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_130.geometry}
        material={materials.Texture}
        position={[-1.173, 3.976, -4.449]}
        rotation={[0, 0.168, Math.PI / 2]}
        scale={1.52}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_132.geometry}
        material={materials.Texture}
        position={[-0.941, 3.976, -4.664]}
        rotation={[Math.PI, 0.018, -Math.PI / 2]}
        scale={1.52}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_134.geometry}
        material={materials.Texture}
        position={[-4.194, 3.979, -2.768]}
        rotation={[0, 0.655, Math.PI / 2]}
        scale={[-1.52, 1.52, 1.52]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_136.geometry}
        material={materials.Texture}
        position={[-1.095, 4.291, -4.434]}
        rotation={[0, 0.357, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_138.geometry}
        material={materials.Texture}
        position={[-5.246, 4.291, -1.466]}
        rotation={[0, 1.246, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_140.geometry}
        material={materials.Texture}
        position={[5.531, 2.183, 0.174]}
        scale={[-1, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_142.geometry}
        material={materials.Texture}
        position={[5.786, 0.943, 0.18]}
        scale={[-1, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_144.geometry}
        material={materials.Texture}
        position={[5.736, 1.565, 0.053]}
        scale={[-1, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_146.geometry}
        material={materials.Texture}
        position={[5.428, 0.315, 0.373]}
        scale={[-1, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_148.geometry}
        material={materials.Texture}
        position={[5.646, 2.794, 0.107]}
        scale={[-1, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_150.geometry}
        material={materials.Texture}
        position={[5.562, 4.034, 0.348]}
        scale={[-1, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_152.geometry}
        material={materials.Texture}
        position={[5.461, 3.412, 0.256]}
        scale={[-1, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_154.geometry}
        material={materials.Texture}
        position={[5.868, 4.662, 0.081]}
        scale={[-1, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_156.geometry}
        material={materials.Texture}
        position={[4.856, 0, -2.541]}
        scale={[-1, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_158.geometry}
        material={materials.Texture}
        position={[5.525, 0, -0.854]}
        scale={[-1, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_160.geometry}
        material={materials.Texture}
        position={[5.059, 0, -1.597]}
        scale={[-1, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_162.geometry}
        material={materials.Texture}
        position={[4.05, 0, -2.962]}
        scale={[-1, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_164.geometry}
        material={materials.Texture}
        position={[2.585, 0, -4.002]}
        scale={[-1, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_166.geometry}
        material={materials.Texture}
        position={[3.289, 0, -3.098]}
        scale={[-1, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_168.geometry}
        material={materials.Texture}
        position={[1.655, 0, -4.536]}
        scale={[-1, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_170.geometry}
        material={materials.Texture}
        position={[0.59, 0, -4.701]}
        scale={[-1, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_172.geometry}
        material={materials.Texture}
        position={[4.888, 1.833, -1.624]}
        scale={[-1, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_174.geometry}
        material={materials.Texture}
        position={[3.754, 1.833, -3.277]}
        scale={[-1, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_176.geometry}
        material={materials.Texture}
        position={[1.332, 1.833, -3.817]}
        scale={[-1, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_178.geometry}
        material={materials.Texture}
        position={[3.767, 1.836, -2.98]}
        scale={[-1, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_180.geometry}
        material={materials.Texture}
        position={[4.856, 2.143, -2.541]}
        scale={[-1, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_182.geometry}
        material={materials.Texture}
        position={[5.525, 2.143, -0.854]}
        scale={[-1, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_184.geometry}
        material={materials.Texture}
        position={[5.059, 2.143, -1.597]}
        scale={[-1, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_186.geometry}
        material={materials.Texture}
        position={[4.05, 2.143, -2.962]}
        scale={[-1, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_188.geometry}
        material={materials.Texture}
        position={[2.585, 2.143, -4.002]}
        scale={[-1, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_190.geometry}
        material={materials.Texture}
        position={[3.3, 2.143, -3.312]}
        scale={[-1, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_192.geometry}
        material={materials.Texture}
        position={[1.655, 2.143, -4.536]}
        scale={[-1, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_194.geometry}
        material={materials.Texture}
        position={[0.59, 2.143, -4.701]}
        scale={[-1, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_196.geometry}
        material={materials.Texture}
        position={[4.888, 3.976, -1.624]}
        scale={[-1, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_198.geometry}
        material={materials.Texture}
        position={[3.754, 3.976, -3.277]}
        scale={[-1, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_200.geometry}
        material={materials.Texture}
        position={[0.746, 3.976, -4.662]}
        scale={[-1, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_202.geometry}
        material={materials.Texture}
        position={[3.767, 3.979, -2.98]}
        scale={[-1, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_204.geometry}
        material={materials.Texture}
        position={[3.198, 4.291, -3.092]}
        rotation={[0, -0.563, 0]}
        scale={[-1, 1, 1]}
      />
    </group>
  )
}

export default Computer
