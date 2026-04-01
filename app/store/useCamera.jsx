import { create } from "zustand"
import { subscribeWithSelector } from "zustand/middleware"
import * as THREE from "three"

const useCameraStore = create(
  subscribeWithSelector(set => {
    return {
      isFocus: "normal",
      targetId: null,
      originPosition: new THREE.Vector3(0, 0, 0),
      originLookAt: new THREE.Vector3(0, 1, 0),
      targetPosition: new THREE.Vector3(),
      targetLookAt: new THREE.Vector3(),
      focus: () => {
        set(state => ({
          isFocus: state.isFocus === "normal" ? "focus" : state.isFocus,
        }))
      },
      normal: () => {
        set(state => ({
          isFocus: state.isFocus === "focus" ? "normal" : state.isFocus,
        }))
      },
      /**
       *
       * @param {THREE.Vector3} position 鏡頭位置
       * @param {THREE.Vector3} lookAt 鏡頭看向位置
       */
      setOrigin: (position, lookAt) => {
        set(() => ({
          originPosition: position.clone(),
          originLookAt: lookAt.clone(),
        }))
      },
      /**
       *
       * @param {String} targetId 物件ID
       * @param {THREE.Vector3} position 鏡頭位置
       * @param {THREE.Vector3} lookAt 鏡頭看向位置
       */
      cameraMove: (targetId, position, lookAt) => {
        set(state => {
          const isSameTarget =
            state.isFocus === "focus" && state.targetId === targetId
          if (isSameTarget) {
            return {
              isFocus: "normal",
              targetId: null,
            }
          }
          return {
            isFocus: "focus",
            targetId: targetId,
            targetPosition: state.targetPosition.clone().copy(position),
            targetLookAt: state.targetLookAt.clone().copy(lookAt),
          }
        })
      },
    }
  }),
)
export default useCameraStore
