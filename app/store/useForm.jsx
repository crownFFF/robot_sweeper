import { create } from "zustand"
import { subscribeWithSelector } from "zustand/middleware"

const  useFormStore = create(
  subscribeWithSelector(set => ({
    value: {
      name: "",
      email: "",
      message: "",
    },
    currentAnimation: "Static Pose",
    isLoading: false,
    updateField: (name, value) => {
      set(state => ({
        value: {
          ...state.value,
          [name]: value,
        },
      }))
    },
    resetValue: () => {
      set({
        value: {
          name: "",
          email: "",
          message: "",
        },
      })
    },
    setCurrentAnimation: animation => {
      set({
        currentAnimation: animation,
      })
    },
    setIsLoading: loading => {
      set({
        isLoading: loading,
      })
    },
  })),
)
export default useFormStore