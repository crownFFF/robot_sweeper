import React from "react"
import { useGLTF } from "@react-three/drei"
import { cityResult } from "@/lib"


const CityBox = (props: JSX.IntrinsicElements["group"]) => {
  const { nodes, materials } = useGLTF("/subsystem_world.glb") as cityResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group
          position={[3.253, 19.236, 15.999]}
          rotation={[0, Math.PI / 2, 0]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.vents004_0.geometry}
            material={materials.Vents}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.vents004_0_1.geometry}
            material={materials.Vents}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.vents004_0_2.geometry}
            material={materials.Vents}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.vents004_0_3.geometry}
            material={materials.Vents}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.vents004_0_4.geometry}
            material={materials.Vents}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.vents004_1.geometry}
            material={materials.Boxes}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.vents004_1_1.geometry}
            material={materials.Boxes}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.vents004_1_2.geometry}
            material={materials.Boxes}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.vents004_1_3.geometry}
            material={materials.Boxes}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.vents004_1_4.geometry}
            material={materials.Boxes}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.vents004_1_5.geometry}
            material={materials.Boxes}
          />
        </group>
      </group>
    </group>
  )
}
export default CityBox