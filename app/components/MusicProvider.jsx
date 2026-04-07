"use client"

import { useEffect } from "react"
import useMusicStore from "../store/useMusic"

const MusicProvider = () => {
  const init = useMusicStore(s => s.init)
  useEffect(() => {
    init()
  }, [init])
  return null
}

export default MusicProvider
