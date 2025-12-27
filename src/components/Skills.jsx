
import React from 'react'

const skills = [
  { name: 'C# / .NET', level: 90 },
  { name: 'ASP.NET Core', level: 85 },
  { name: 'React', level: 75 },
  { name: 'SQL', level: 80 },
  { name: 'Azure', level: 65 },
  { name: 'GitHub Actions', level: 70 },
]

export default function Skills() {
  return (
    <section id="skills" className="section">
      <h2>Skills</h2>
      <ul className="skills">
        {skills.map(s => (
          <li key={s.name}>
            <div className="skill-title">
              <span>{s.name}</span>
              <span className="skill-percent">{s.level}%</span>
            </div>
            <div className="bar">
              <div className="bar-fill" style={{ width: `${s.level}%` }} />
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
