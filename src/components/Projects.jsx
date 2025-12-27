
import React from 'react'
import { projects } from '../data/projects'

export default function Projects() {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      <div className="grid">
        {projects.map(p => (
          <article className="card" key={p.title}>
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <ul className="tags">
              {p.tech.map(t => <li key={t}>{t}</li>)}
            </ul>
            <div className="card-actions">
              {p.repo && <a className="btn" href={p.repo} target="_blank" rel="noreferrer">Repo</a>}
              {p.demo && <a className="btn" href={p.demo} target="_blank" rel="noreferrer">Live</a>}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
