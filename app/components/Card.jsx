"use client"
import useCameraStore from "../store/useCamera"
import { info } from "../lib/info"
import Image from "next/image"
import { useEffect, useRef } from "react"
import { createDraggable, createScope } from "animejs"
import useDraggable from "../hooks/useDraggable"

const RenderContent = ({ content }) => {
  if (Array.isArray(content)) {
    return (
      <p>
        {content.map((c, i) => (
          <span key={i}>{c}</span>
        ))}
      </p>
    )
  }

  return <p>{content}</p>
}

const Card = () => {
  const isFocus = useCameraStore(s => s.isFocus)
  const targetId = useCameraStore(s => s.targetId)
  const normal = useCameraStore(s => s.normal)
  const list = info[targetId] || "Null"
  const root = useRef(null)
  useDraggable({ root })
  return (
    <article
      className={`${isFocus === "focus" ? "show" : "hide"} ${list.class ?? ""}`}
      ref={root}
    >
      <h1 className="title">{list.title}</h1>
      <section className="content">
        {list.img && (
          <Image
            src={list.img.src}
            alt={list.img.alt}
            width={list.img.width}
            height={list.img.height}
          />
        )}
        <ul>
          {list.info &&
            list.info.map((info, index) => (
              <li key={index}>
                <p>{info.label}</p>
                {info.link && (
                  <a href={info.link} target="_blank">
                    {info.link}
                  </a>
                )}
                <RenderContent content={info.content} />
              </li>
            ))}
        </ul>
      </section>
      <button onClick={normal}><i className="off_ic"/></button>
    </article>
  )
}

export default Card
