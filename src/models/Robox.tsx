"use client"
import * as THREE from "three"
import React, { useEffect, useRef } from "react"
import { useGLTF, useAnimations } from "@react-three/drei"
import { GLTF } from "three-stdlib"


type GLTFResult = GLTF & {
  nodes: {
    body_low_sweeper_0: THREE.Mesh
    body_low_glass_0: THREE.Mesh
    sweepers_low_sweeper_0: THREE.Mesh
    backWheel_low_sweeper_0: THREE.Mesh
    frontAxel_low_sweeper_0: THREE.Mesh
    frontWheel_low_sweeper_0: THREE.Mesh
    bar_low_sweeper_0: THREE.Mesh
    topCamera_low_sweeper_0: THREE.Mesh
    Object_26: THREE.SkinnedMesh
    eyes_blueLight_0: THREE.Mesh
    Object_35: THREE.SkinnedMesh
    Object_43: THREE.SkinnedMesh
    Object_44: THREE.SkinnedMesh
    Object_53: THREE.SkinnedMesh
    Object_54: THREE.SkinnedMesh
    Torus_blueLight_0: THREE.Mesh
    _rootJoint: THREE.Bone
    _rootJoint_1: THREE.Bone
    _rootJoint_2: THREE.Bone
    _rootJoint_3: THREE.Bone
  }
  materials: {
    sweeper: THREE.MeshPhysicalMaterial
    glass: THREE.MeshPhysicalMaterial
    blueLight: THREE.MeshStandardMaterial
    safety_light: THREE.MeshPhysicalMaterial
  }
}

const Robot = (props: JSX.IntrinsicElements["group"]) => {
  const group = useRef<THREE.Group>(null!)
  const { nodes, materials, animations } = useGLTF(
    "/autonomous_robot_sweeper.glb"
  ) as GLTFResult
  const { actions } = useAnimations(animations, group)
  console.log(actions)
  useEffect(()=>{
    actions["Scene"]?.play()
  },[actions])
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group
            name="64d1ef9beccb46059d069faacb3fa6fafbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="body_low"
                  position={[0, -8.918, 0]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="body_low_sweeper_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.body_low_sweeper_0.geometry}
                    material={materials.sweeper}
                  />
                  <mesh
                    name="body_low_glass_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.body_low_glass_0.geometry}
                    material={materials.glass}
                  />
                </group>
                <group
                  name="sweepers_low"
                  position={[0, -8.918, 113.565]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="sweepers_low_sweeper_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.sweepers_low_sweeper_0.geometry}
                    material={materials.sweeper}
                  />
                </group>
                <group
                  name="backWheel_low"
                  position={[0, 15.895, -216.952]}
                  rotation={[1.125, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="backWheel_low_sweeper_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.backWheel_low_sweeper_0.geometry}
                    material={materials.sweeper}
                  />
                </group>
                <group
                  name="frontAxel_low"
                  position={[0, 25.478, 12.612]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="frontAxel_low_sweeper_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.frontAxel_low_sweeper_0.geometry}
                    material={materials.sweeper}
                  />
                </group>
                <group
                  name="frontWheel_low"
                  position={[0, -8.918, 105.334]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="frontWheel_low_sweeper_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.frontWheel_low_sweeper_0.geometry}
                    material={materials.sweeper}
                  />
                </group>
                <group
                  name="bar_low"
                  position={[0, 0, -165.953]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="bar_low_sweeper_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.bar_low_sweeper_0.geometry}
                    material={materials.sweeper}
                  />
                </group>
                <group
                  name="topCamera_low"
                  position={[0, 173.53, -86.903]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="topCamera_low_sweeper_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.topCamera_low_sweeper_0.geometry}
                    material={materials.sweeper}
                  />
                </group>
                <group
                  name="brushRight"
                  position={[-50.484, 21.958, 21.239]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
                <group
                  name="brushLeft"
                  position={[80.677, -8.918, 122.037]}
                  rotation={[-Math.PI / 2, 0, -0.209]}
                  scale={100}
                />
                <group
                  name="light"
                  position={[37.354, 155.637, -132.402]}
                  rotation={[-1.826, 0.135, 0.307]}
                  scale={100}
                />
                <group
                  name="Armature"
                  position={[-50.168, 34.883, 21.396]}
                  rotation={[Math.PI / 2, 0, -Math.PI]}
                  scale={28.405}
                >
                  <group name="Object_23">
                    <primitive object={nodes._rootJoint} />
                    <skinnedMesh
                      name="Object_26"
                      geometry={nodes.Object_26.geometry}
                      material={materials.sweeper}
                      skeleton={nodes.Object_26.skeleton}
                    />
                    <group
                      name="Object_25"
                      position={[-50.484, 21.958, 21.239]}
                      rotation={[-Math.PI / 2, 0, 0]}
                      scale={100}
                    />
                  </group>
                </group>
                <group
                  name="eyes"
                  position={[-0.004, 134.144, 6.321]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={2.033}
                >
                  <mesh
                    name="eyes_blueLight_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.eyes_blueLight_0.geometry}
                    material={materials.blueLight}
                  />
                </group>
                <group
                  name="Armature001"
                  position={[50.506, 34.883, 21.396]}
                  rotation={[Math.PI / 2, 0, -Math.PI]}
                  scale={28.405}
                >
                  <group name="Object_32">
                    <primitive object={nodes._rootJoint_1} />
                    <skinnedMesh
                      name="Object_35"
                      geometry={nodes.Object_35.geometry}
                      material={materials.sweeper}
                      skeleton={nodes.Object_35.skeleton}
                    />
                    <group
                      name="Object_34"
                      position={[80.677, -8.918, 122.037]}
                      rotation={[-Math.PI / 2, 0, -0.209]}
                      scale={100}
                    />
                  </group>
                </group>
                <group
                  name="spinningLight"
                  position={[36.816, 151.755, -131.427]}
                  rotation={[-1.838, 0.138, 0.038]}
                  scale={8.473}
                >
                  <group
                    name="Armature003"
                    position={[0, -0.028, 0]}
                    rotation={[0, 0, -2.762]}
                  >
                    <group name="Object_40">
                      <primitive object={nodes._rootJoint_2} />
                      <skinnedMesh
                        name="Object_43"
                        geometry={nodes.Object_43.geometry}
                        material={materials.safety_light}
                        skeleton={nodes.Object_43.skeleton}
                      />
                      <skinnedMesh
                        name="Object_44"
                        geometry={nodes.Object_44.geometry}
                        material={materials.sweeper}
                        skeleton={nodes.Object_44.skeleton}
                      />
                      <group
                        name="Object_42"
                        position={[37.354, 155.637, -132.402]}
                        rotation={[-1.826, 0.135, 0.307]}
                        scale={100}
                      />
                    </group>
                  </group>
                </group>
                <group
                  name="light001"
                  position={[-36.948, 155.644, -132.376]}
                  rotation={[-1.819, -0.129, 0.239]}
                  scale={100}
                />
                <group
                  name="spinnigLight2"
                  position={[-36.419, 151.755, -131.427]}
                  rotation={[-1.831, -0.126, -0.034]}
                  scale={8.473}
                >
                  <group
                    name="Armature002"
                    position={[0, -0.028, 0]}
                    rotation={[0, 0, -2.762]}
                  >
                    <group name="Object_50">
                      <primitive object={nodes._rootJoint_3} />
                      <skinnedMesh
                        name="Object_53"
                        geometry={nodes.Object_53.geometry}
                        material={materials.safety_light}
                        skeleton={nodes.Object_53.skeleton}
                      />
                      <skinnedMesh
                        name="Object_54"
                        geometry={nodes.Object_54.geometry}
                        material={materials.sweeper}
                        skeleton={nodes.Object_54.skeleton}
                      />
                      <group
                        name="Object_52"
                        position={[-36.948, 155.644, -132.376]}
                        rotation={[-1.819, -0.129, 0.239]}
                        scale={100}
                      />
                    </group>
                  </group>
                </group>
                <group name="Torus" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <mesh
                    name="Torus_blueLight_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Torus_blueLight_0.geometry}
                    material={materials.blueLight}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

export default Robot
