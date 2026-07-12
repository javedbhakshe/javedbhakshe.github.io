import { education } from '../data/resume.js'

export default function Education() {
  return (
    <section className="section">
      <h2 className="section-title">
        <span className="prompt">$</span> cat ./education<span className="cursor" />
      </h2>
      <div className="education-grid">
        {education.map((edu) => (
          <div className="education-card" key={edu.institute}>
            <h3 className="education-institute">{edu.institute}</h3>
            <p className="education-degree">{edu.degree}</p>
            <p className="education-meta">
              {edu.location} · {edu.period}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
