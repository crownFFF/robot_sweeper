"use client"

import { createDraggable } from "animejs"
import { useEffect } from "react"
/**
 * @param {{
 *   root: React.RefObject<HTMLElement | null>,
 *   container?: HTMLElement | null
 * }} props
 */
const useDraggable = ({ root, target, container }) => {
  useEffect(() => {
    if (!root.current) return
    const targetElement = target ?? root.current
    const targetContainer = container ?? document.body

    const draggable = createDraggable(targetElement, {
      container: targetContainer,
      cursor:{
        onGrab:"grabbing"
      }
    })
    return () => {
      draggable?.revert?.()
    }
  }, [root, target, container])
}

export default useDraggable
