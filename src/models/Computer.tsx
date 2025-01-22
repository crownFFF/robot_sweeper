"use client"
import * as THREE from "three"
import React, { useEffect, useRef, useState } from "react"
import { useGLTF } from "@react-three/drei"
import { useFrame, useThree } from "@react-three/fiber"
import { computerResult, computerGroup } from "@/lib"

// 攝像機控制
function CameraController() {
  // 設定相機
  const { camera } = useThree()
  const perspectiveCamera = camera as THREE.PerspectiveCamera
  // 設定目標位置
  const targetPosition = useRef(new THREE.Vector3())
  const targetLookAt = useRef(new THREE.Vector3())
  // 目標 FOV
  const targetFov = useRef(perspectiveCamera.fov)
  // 動畫
  const isAnimating = useRef(false)
  // 動畫進度 (秒)
  const animationProgress = useRef(0)
  // 動畫時長 (秒)
  const duration = 1.5

  // 移動相機
  const moveCameraTo = (
    // 位置
    position: THREE.Vector3,
    lookAt: THREE.Vector3,
    fov: number
  ) => {
    // 將新目標位置複製
    targetPosition.current.copy(position)
    targetLookAt.current.copy(lookAt)
    // 設定新的目標視場角
    targetFov.current = fov
    // 初始化動畫狀態
    animationProgress.current = 0
    isAnimating.current = true
  }

  //  useFrame 是 React Three Fiber 中用於在每一幀中執行邏輯的鉤子
  useFrame((_, delta) => {
    // delta 每幀間的時間間隔，使用它來確保動畫與幀率無關
    // 底線 _ 的作用是表示「不使用的參數」。這是一個程式設計中的約定，通常用於強調該參數被忽略或目前不需要。

    if (!isAnimating.current) return
    // 更新動畫進度
    animationProgress.current += delta

    const t = Math.min(animationProgress.current / duration, 1) // 進度值 [0, 1]

    // 使用插值更新位置和方向
    //  lerp（線性插值）方法
    // 插值比例由 t 控制，t=0 表示完全在初始位置，t=1 表示完全到達目標位置。
    perspectiveCamera.position.lerp(targetPosition.current, t)

    // 使用 lerpVectors 在相機當前的方向向量與目標方向向量之間進行插值
    const currentLookAt = new THREE.Vector3().lerpVectors(
      perspectiveCamera.getWorldDirection(new THREE.Vector3()),
      targetLookAt.current.clone().sub(perspectiveCamera.position),
      t
    )
    // 新的目標方向向量加上相機當前位置，並將相機設置為朝向該點
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
    // 當 FOV 或其他相機屬性改變時，必須呼叫 updateProjectionMatrix 更新相機的投影矩陣，確保變化正確應用到渲染中
    perspectiveCamera.updateProjectionMatrix()

    // 終止動畫
    if (t >= 1) {
      isAnimating.current = false
    }
  })

  return { moveCameraTo }
}

const Computer: React.FC<computerGroup> = ({ setting, setInfo, ...props }) => {
  const { nodes, materials } = useGLTF("/computers.glb") as computerResult
  const screenRef = useRef<THREE.Mesh>(null!)
  // 返回控制
  const [back, setBack] = useState(false)
  // 螢幕放大尺寸
  const [resize, setResize] = useState({
    position: [
      [0.06, 0.07, 0.3],
      [-0.18, -0.025, 0.5],
      [-0.035, 0.023, 0.025],
      [0.05, 0.07, 0.1],
      [0.2, 0.025, 0.06],
      [-1.8, -0.3, 0.06],
      [-0.05, -0.028, 0.055],
      [0.025, -0.075, 0.2],
      [0.22, -0.09, 0.1],
    ],
    fov: 25,
  })
  // 影片貼圖
  const [videoTexture, setVideoTexture] = useState<THREE.VideoTexture[]>([])
  const videoRef = useRef<HTMLVideoElement[]>([])

  // 聲明攝像機控制方法
  const cameraController = CameraController()
  // 點擊功能
  const handleClick = (
    positionArr: number[],
    num: number,
    position: "right" | "left"
  ) => {
    if (back) {
      // 相機移動到原點
      cameraController.moveCameraTo(
        setting.position,
        new THREE.Vector3(0, 0, 0),
        setting.fov
      )
      // 訊息控制
      setInfo({
        show: !back,
        number: num,
        position: position,
      })
    } else {
      // 座標轉換為 THREE.Vector3Tuple 格式
      const targetPosition: THREE.Vector3Tuple =
        screenRef.current.position.toArray()
      // 相機移動到目標位置
      cameraController.moveCameraTo(
        new THREE.Vector3(
          targetPosition[0] - positionArr[0],
          targetPosition[1] + positionArr[1],
          targetPosition[2] + positionArr[2]
        ),
        new THREE.Vector3(...targetPosition),
        resize.fov
      )
      // 設定訊息顯示時間
      setTimeout(() => {
        setInfo({
          show: !back,
          number: num,
          position: position,
        })
      }, 800)
    }
    // 更新狀態
    setBack(!back)
  }

  // 忽略eslint
  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    // 螢幕尺寸移動位置
    const handleResize = () => {
      const width = window.innerWidth
      if (width > 768 && width <= 1000) {
        setResize({
          position: [
            [0.04, 0.1, 0.5],
            [-0.25, -0.025, 0.5],
            [-0.045, 0.028, 0.025],
            [0.07, 0.075, 0.1],
            [0.15, 0.015, 0.06],
            [-1.9, -0.2, 0.02],
            [-0.2, -0.1, 0.2],
            [0.035, -0.075, 0.2],
            [0.18, -0.075, 0.1],
          ],
          fov: 25,
        })
      } else if (width > 460 && width <= 768) {
        setResize({
          position: [
            [0.04, 0.1, 0.5],
            [-0.25, -0.025, 0.5],
            [-0.045, 0.028, 0.025],
            [0.07, 0.075, 0.1],
            [0.15, 0.015, 0.06],
            [-2.5, -0.5, 0.05],
            [-0.2, -0.1, 0.2],
            [0.035, -0.075, 0.2],
            [0.18, -0.075, 0.1],
          ],
          fov: 35,
        })
      } else if (width <= 460) {
        setResize({
          position: [
            [0.04, 0.1, 0.5],
            [-0.25, -0.025, 0.5],
            [-0.045, 0.028, 0.025],
            [0.07, 0.075, 0.1],
            [0.15, 0.015, 0.06],
            [-1.9, -0.2, 0.02],
            [-0.2, -0.1, 0.2],
            [0.035, -0.075, 0.2],
            [0.18, -0.075, 0.1],
          ],
          fov: 50,
        })
      }
    }
    handleResize()
    // 監聽
    window.addEventListener("resize", handleResize)

    // 添加影片貼圖
    const videoSrcs = [
      {
        src: "/video/aboutme.mp4",
        repeat: [3.5, 3],
        offset: [-0.05, -1.2],
      },
      {
        src: "/video/LearningExperience.mp4",
        repeat: [3.9, 2.5],
        offset: [-1.4, -1.66],
      },
      {
        src: "/video/WorkExperience.mp4",
        repeat: [3.9, 2.6],
        offset: [-0.15, -1.75],
      },
      {
        src: "/video/Project.mp4",
        repeat: [4, 1.5],
        offset: [-1.5, -0.25],
      },
      {
        src: "/video/Licenses.mp4",
        repeat: [3.5, 1],
        offset: [-0.1, -0.05],
      },
      {
        src: "/video/PersonalStatement.mp4",
        repeat: [4, 2.5],
        offset: [-1.45, -1.7],
      },
      {
        src: "/video/Skills.mp4",
        repeat: [3, 1],
        offset: [-1.05, -0.075],
      },
      {
        src: "/video/FutureExpectations.mp4",
        repeat: [4, 2],
        offset: [-1.5, -0.65],
      },
      {
        src: "/video/Copyright.mp4",
        repeat: [3.5, 1.5],
        offset: [-1.2, -0.35],
      },
    ]

    // 設定影片
    const video = videoSrcs.map((videoData, index) => {
      const video = document.createElement("video")
      // 設定影片來源
      video.src = videoData.src
      // 循環播放
      video.loop = true
      // 靜音
      video.muted = true
      // 自動撥放
      video.play()
      // 影片存入videoRef.current
      videoRef.current[index] = video
      // 將 HTML 視頻元素轉換為可用於材質的紋理
      const videoTexture = new THREE.VideoTexture(video)
      // repeat：設置紋理在水平和垂直方向上的重複次數。
      videoTexture.repeat.set(videoData.repeat[0], videoData.repeat[1])
      // offset：設置紋理的偏移量（即起始點）。
      videoTexture.offset.set(videoData.offset[0], videoData.offset[1])
      return videoTexture
    })
    setVideoTexture(video)

    return () => {
      // 釋放資源
      window.removeEventListener("resize", handleResize)
      videoRef.current.forEach((video) => {
        video.pause()
        video.src = ""
      })
      videoTexture.forEach((video) => video.dispose())
    }
  }, [])
  /* eslint-enable react-hooks/exhaustive-deps */

  return (
    <group {...props} dispose={null}>
      {/* 1 */}
      <group position={[0.27, 1.529, -2.613]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_206.geometry}
          material={materials.Texture}
        />
        <mesh
          onClick={() => handleClick(resize.position[0], 1, "right")}
          ref={screenRef}
          castShadow
          receiveShadow
          geometry={nodes.Object_207.geometry}
          material={materials.Screen}
        >
          <meshBasicMaterial map={videoTexture![0]} />
        </mesh>
      </group>
      {/* 2 */}
      <group position={[-1.43, 2.496, -1.8]} rotation={[0, 1.002, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_209.geometry}
          material={materials.Texture}
        />
        <mesh
          onClick={() => handleClick(resize.position[1], 2, "right")}
          ref={screenRef}
          castShadow
          receiveShadow
          geometry={nodes.Object_210.geometry}
          material={materials.Screen}
        >
          <meshBasicMaterial map={videoTexture![1]} />
        </mesh>
      </group>
      {/* 3 */}
      <group position={[-2.731, 0.629, -0.522]} rotation={[0, 1.087, 0]}>
        <mesh
          onClick={() => handleClick(resize.position[2], 3, "right")}
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
        >
          <meshBasicMaterial map={videoTexture![2]} />
        </mesh>
      </group>
      {/* 4 */}
      <group position={[1.845, 0.377, -1.771]} rotation={[0, -Math.PI / 9, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_215.geometry}
          material={materials.Texture}
        />
        <mesh
          onClick={() => handleClick(resize.position[3], 4, "left")}
          ref={screenRef}
          castShadow
          receiveShadow
          geometry={nodes.Object_216.geometry}
          material={materials.Screen}
        >
          <meshBasicMaterial map={videoTexture![3]} />
        </mesh>
      </group>
      {/* 5 */}
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
          onClick={() => handleClick(resize.position[4], 5, "right")}
          ref={screenRef}
          castShadow
          receiveShadow
          geometry={nodes.Object_219.geometry}
          material={materials.Screen}
        >
          <meshBasicMaterial map={videoTexture![4]} />
        </mesh>
      </group>
      {/* 6 */}
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
          onClick={() => handleClick(resize.position[5], 6, "right")}
          ref={screenRef}
          castShadow
          receiveShadow
          geometry={nodes.Object_222.geometry}
          material={materials.Screen}
        >
          <meshBasicMaterial map={videoTexture![5]} />
        </mesh>
      </group>
      {/* 7 */}
      <group position={[-3.899, 4.287, -2.642]} rotation={[0, 0.539, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_224.geometry}
          material={materials.Texture}
        />
        <mesh
          onClick={() => handleClick(resize.position[6], 7, "right")}
          ref={screenRef}
          castShadow
          receiveShadow
          geometry={nodes.Object_225.geometry}
          material={materials.Screen}
        >
          <meshBasicMaterial map={videoTexture![6]} />
        </mesh>
      </group>
      {/* 8 */}
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
          onClick={() => handleClick(resize.position[7], 8, "left")}
          ref={screenRef}
          castShadow
          receiveShadow
          geometry={nodes.Object_225.geometry}
          material={materials.Screen}
          rotation={[0, 0.52, 0]}
        >
          <meshBasicMaterial map={videoTexture![7]} />
        </mesh>
      </group>
      {/* 9 */}
      <group position={[4.683, 4.29, -1.558]} rotation={[0, -Math.PI / 3, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_230.geometry}
          material={materials.Texture}
        />
        <mesh
          onClick={() => handleClick(resize.position[8], 9, "right")}
          ref={screenRef}
          castShadow
          receiveShadow
          geometry={nodes.Object_231.geometry}
          material={materials.Screen}
        >
          <meshBasicMaterial map={videoTexture![8]} />
        </mesh>
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
