import { GLTF } from "three-stdlib"
import * as THREE from "three"

export type Info = {
  show: boolean
  number: number
  position: "right" | "left"
}
export type setting = {
  position: THREE.Vector3
  fov: number
}

export type computerResult = GLTF & {
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
export type computerGroup = JSX.IntrinsicElements["group"] & {
  setInfo: React.Dispatch<React.SetStateAction<Info>>,
  setting:setting
}
export type CarResult = GLTF & {
  nodes: {
    Object_78: THREE.SkinnedMesh
    _rootJoint: THREE.Bone
  }
  materials: {
    Mat_Robot: THREE.MeshStandardMaterial
  }
}
export type CarProps = JSX.IntrinsicElements["group"] & {
  currentAnimation: string
}
export type RobotResult = GLTF & {
  nodes: {
    Object_7: THREE.SkinnedMesh
    Object_8: THREE.SkinnedMesh
    Object_9: THREE.SkinnedMesh
    Object_10: THREE.SkinnedMesh
    Cylinder001_M_Suelo_0: THREE.Mesh
    _rootJoint: THREE.Bone
  }
  materials: {
    M_Metal1: THREE.MeshStandardMaterial
    M_Pantalla1: THREE.MeshStandardMaterial
    M_Pantalla2: THREE.MeshStandardMaterial
    M_Rueda: THREE.MeshStandardMaterial
    M_Suelo: THREE.MeshStandardMaterial
  }
}
export type RobotPopups = JSX.IntrinsicElements["group"] & {
  sayHi: boolean
  scrollY: number
}
export interface AlertProps {
  show: boolean
  type: string
}