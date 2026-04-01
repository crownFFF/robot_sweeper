"use client"
import { Canvas } from "@react-three/fiber"
import * as THREE from "three"
import SubsystemWorld from "../components/SubsystemWorld"
import { getProject } from "@theatre/core"
import project from "../assets/states/project.json"
import { useEffect, useMemo, useRef } from "react"
import { editable as e, PerspectiveCamera, SheetProvider } from "@theatre/r3f"
import { createDraggable } from "animejs"
import { projectList } from "../lib/info"
import robot from "@/app/assets/project/robot.png"
import Image from "next/image"
import Link from "next/link"

const Project = () => {
  const sheet = useMemo(
    () => getProject("demoProject", { state: project }).sheet("demoSheet"),
    [],
  )
  useEffect(() => {
    let isMounted = true
    if (!isMounted) return
    sheet.project.ready.then(() => {
      sheet.sequence.play({
        iterationCount: Infinity,
      })
    })
    return () => {
      isMounted = false
      sheet.sequence.pause()
    }
  }, [sheet])
  const root = useRef(null)
  useEffect(() => {
    if (!root.current) return
    const cards = Array.from(root.current.querySelectorAll(".card"))
    const draggables = cards.map(card =>
      createDraggable(card, {
        container: document.body,
      }),
    )
    return () => {
      draggables.forEach(draggable => {
        draggable?.revert?.()
      })
    }
  }, [])
  return (
    <>
      <Canvas
        gl={{
          antialias: true,
          outputColorSpace: THREE.SRGBColorSpace,
          localClippingEnabled: true,
          toneMapping: THREE.ACESFilmicToneMapping,
        }}
        dpr={[1, 2]}
      >
        <SheetProvider sheet={sheet}>
          <PerspectiveCamera
            theatreKey="Camera"
            makeDefault
            position={[5, 5, -5]}
            fov={75}
          />
          <e.pointLight intensity={100} theatreKey="Light" />
          <SubsystemWorld />
        </SheetProvider>
      </Canvas>
      <section className="cards" ref={root}>
        {projectList.map(p => (
          <article
            className="card"
            style={{ "--position": p.sort, "--delay": p.delay }}
            key={p.sort}
          >
            <h1>
              {p.name} <span>{p.subTitle}</span>
            </h1>
            <Image
              src={p.img}
              alt={p.name}
              width={1920}
              height={919}
              loading="eager"
            />
            <ul>
              {p.skill.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
            <hr />
            <p>{p.info}</p>
            <hr />
            <Link href={p.link} target="_blank">
              Link
            </Link>
          </article>
        ))}
      </section>
    </>
  )
}

export default Project
