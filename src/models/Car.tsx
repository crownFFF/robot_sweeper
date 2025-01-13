"use client"
import * as THREE from "three"
import React, { useEffect, useRef } from "react"
import { useGLTF, useAnimations } from "@react-three/drei"
import { GLTF } from "three-stdlib"

type GLTFResult = GLTF & {
  nodes: {
    Object_78: THREE.SkinnedMesh
    _rootJoint: THREE.Bone
  }
  materials: {
    Mat_Robot: THREE.MeshStandardMaterial
  }
}

type CarProps = JSX.IntrinsicElements["group"] & {
  currentAnimation: string
}

const Car: React.FC<CarProps> = ({ currentAnimation, ...props }) => {
  const group = useRef<THREE.Group>(null!)
  const { nodes, materials, animations } = useGLTF("/car.glb") as GLTFResult
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    Object.values(actions).forEach((action) => action?.stop())
    console.log(actions);
    if(actions[currentAnimation]){
      
      actions[currentAnimation].play()
    }
  }, [actions, currentAnimation])

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.379}
        >
          <group
            name="b7442e26e25842a8b9888e6c536fe8d3fbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group name="Car" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <group name="Object_5">
                    <primitive object={nodes._rootJoint} />
                    <skinnedMesh
                      name="Object_78"
                      geometry={nodes.Object_78.geometry}
                      material={materials.Mat_Robot}
                      skeleton={nodes.Object_78.skeleton}
                    />
                    <group
                      name="Object_77"
                      rotation={[-Math.PI / 2, 0, 0]}
                      scale={100}
                    />
                  </group>
                </group>
                <group
                  name="Msh_Carro"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

export default Car
