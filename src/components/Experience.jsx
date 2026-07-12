import { useState } from 'react'
import { experience } from '../data/resume.js'

export default function Experience() {
  const [active, setActive] = useState(0)
  const job = experience[active]

  return (
    <section className="section">
      <h2 className="section-title">
        <span className="prompt">$</span> git log --experience<span className="cursor" />
      </h2>

      <div className="company-tabs">
        {experience.map((item, i) => (
          <button
            key={item.company}
            className={`company-tab${i === active ? ' active' : ''}`}
            onClick={() => setActive(i)}
          >
            {item.company.toLowerCase().split(' ')[0]}
          </button>
        ))}
      </div>

      <div className="job-card" key={job.company}>
        <header className="job-header">
          <div>
            <h3 className="job-company">{job.company}</h3>
            <p className="job-role">{job.role}</p>
          </div>
          <div className="job-meta">
            <span>{job.period}</span>
            <span>{job.location}</span>
          </div>
        </header>
        <div className="projects">
          {job.projects.map((project) => (
            <div className="project" key={project.name}>
              <h4 className="project-name">
                <span className="prompt">*</span> {project.name}
                <span className="project-tagline"> — {project.tagline}</span>
              </h4>
              <ul className="project-points">
                {project.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
