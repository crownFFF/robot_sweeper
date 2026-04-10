import { create } from "zustand"
import { subscribeWithSelector } from "zustand/middleware"

const useMusicStore = create(
  subscribeWithSelector((set, get) => {
    return {
      audio: null,
      firstPlay: false,
      isPlaying: false,
      volume: 0.3,
      init: () => {
        if (get().audio) return
        const audio = new Audio("/music/bgm.mp3")
        audio.loop = true
        audio.volume = get().volume
        set({ audio })
      },
      play: () => {
        const audio = get().audio
        if (!audio) return
        audio.play()
        set({ isPlaying: true })
      },
      pause: () => {
        const audio = get().audio
        if (!audio) return
        audio.pause()
        set({ isPlaying: false })
      },
      setVolume: v => {
        const audio = get().audio
        if (!audio) return
        audio.volume = v
        set({ volume: v })
      },
      setFirstPlay:()=>{
        set({ firstPlay: true })
      }
    }
  }),
)
export default useMusicStore
