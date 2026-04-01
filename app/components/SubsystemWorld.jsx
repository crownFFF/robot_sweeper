import { useGLTF } from "@react-three/drei"

const SubsystemWorld = () => {
  const { scene } = useGLTF("./models/subsystem_world.glb")
  return <primitive object={scene}/>
}
useGLTF.preload("./models/subsystem_world.glb")
export default SubsystemWorld
