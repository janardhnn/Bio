
import React from 'react'

export default function Navbar() {
  return (
    <header className="navbar">
      <a className="brand" href="#">Jana</a>
      <nav>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
      </nav>
    </header>
  )
}
