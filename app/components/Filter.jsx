import useMusicStore from "../store/useMusic"

export const Filter = () => {
  const play = useMusicStore(s => s.play)
  const setFirstPlay = useMusicStore(s => s.setFirstPlay)
  const musicClick = e => {
    play()
    setFirstPlay()
  }
  return (
    <section className="filter">
      <article className="popup music display">
        <p>Would you like to play some background music🎵?</p>
        <div>
          <button onClick={musicClick}>Yes</button>
          <button onClick={setFirstPlay}>no</button>
        </div>
      </article>
      <article className="mask" />
    </section>
  )
}
