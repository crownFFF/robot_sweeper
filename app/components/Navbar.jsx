"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React from "react"

const Navbar = () => {
  const path = usePathname().split("/").filter(Boolean)

  return (
    <header>
      {!path[0] ? <p>Home</p> : <Link href="/">Home</Link>}
      {path[0] === "Email" ? <p>Email</p> : <Link href="/Email">Email</Link>}
      {path[0] === "Project" ? (
        <p>Project</p>
      ) : (
        <Link href="/Project">Project</Link>
      )}
    </header>
  )
}

export default Navbar
