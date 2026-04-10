"use client"
import useMusicStore from "../store/useMusic"

const MusicAside = () => {
  const isPlaying = useMusicStore(s => s.isPlaying)
  const volume = useMusicStore(s => s.volume)
  const setVolume = useMusicStore(s => s.setVolume)
  const play = useMusicStore(s => s.play)
  const pause = useMusicStore(s => s.pause)
  const handleClick = () => {
    isPlaying ? pause() : play()
  }
  return (
    <aside>
      <button onClick={handleClick}>{isPlaying ? "PAUSE" : "PLAY"}</button>
      <input
        type="range"
        style={{ "--range": volume * 100 }}
        defaultValue={volume * 100}
        onChange={e => {
          setVolume(e.target.value / 100)
        }}
        disabled={!isPlaying}
      />
      <p>{Number((volume * 100).toFixed(2))}%</p>
    </aside>
  )
}

export default MusicAside
