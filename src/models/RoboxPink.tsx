"use client"
import * as THREE from "three"
import React, { useEffect, useRef } from "react"
import { useGLTF, useAnimations } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { RobotResult, RobotPopups } from "@/lib"

const RobotPink: React.FC<RobotPopups> = ({ scrollY, sayHi, ...props }) => {
  const group = useRef<THREE.Group>(null!)
  const { nodes, materials, animations } = useGLTF(
    "/cute_home_robot.glb"
  ) as RobotResult
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    const action = actions["Take 001"]
    if (!action) return
    if (sayHi) {
      action.play()
      action.paused = false
    } else {
      action.paused = true
    }
  }, [actions, sayHi])

  useFrame(() => {
    if (group.current) {
      group.current.rotation.y = -scrollY * 0.01
    }
  })

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.057}
        >
          <group
            name="edca9fd234644d5480a540acc91ca584fbx"
            rotation={[Math.PI / 2, 0, 0]}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group name="Object_4">
                  <primitive object={nodes._rootJoint} />
                  <skinnedMesh
                    name="Object_7"
                    geometry={nodes.Object_7.geometry}
                    material={materials.M_Metal1}
                    skeleton={nodes.Object_7.skeleton}
                  />
                  <skinnedMesh
                    name="Object_8"
                    geometry={nodes.Object_8.geometry}
                    material={materials.M_Pantalla1}
                    skeleton={nodes.Object_8.skeleton}
                  />
                  <skinnedMesh
                    name="Object_9"
                    geometry={nodes.Object_9.geometry}
                    material={materials.M_Pantalla2}
                    skeleton={nodes.Object_9.skeleton}
                  />
                  <skinnedMesh
                    name="Object_10"
                    geometry={nodes.Object_10.geometry}
                    material={materials.M_Rueda}
                    skeleton={nodes.Object_10.skeleton}
                  />
                  <group
                    name="Object_6"
                    position={[0, 10, 0]}
                    rotation={[-Math.PI / 2, 0, 0]}
                  />
                  <group
                    name="Robo"
                    position={[0, 10, 0]}
                    rotation={[-Math.PI / 2, 0, 0]}
                  />
                  <group
                    name="Cylinder001"
                    position={[-0.121, 0, -0.603]}
                    rotation={[-Math.PI / 2, 0, 0]}
                  >
                    <mesh
                      name="Cylinder001_M_Suelo_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cylinder001_M_Suelo_0.geometry}
                      material={materials.M_Suelo}
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

export default RobotPink
