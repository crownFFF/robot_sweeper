"use client"
import Link from "next/link"
import React, { useState } from "react"
import "@/scss/navber.scss"
import Logo from "./Logo"
const Navber = () => {
  const [isPlay, setIsplay] = useState(false)

  return (
    <header
      onMouseEnter={() => setIsplay(true)}
      onMouseLeave={() => setIsplay(false)}
    >
      <section>
        {/* logo */}
        <Logo isPlay={isPlay}/>
        {/* navber */}
        <nav>
          <Link href="./">HOME</Link>
          <Link href="./about">ABOUT</Link>
          <Link href="./contact">CONTACT</Link>
          <Link href="./project">PROJECT</Link>
          <Link href="./notfound">NOT-FOUND</Link>
        </nav>
      </section>
    </header>
  )
}

export default Navber
