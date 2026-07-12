import { profile } from '../data/resume.js'

export default function About() {
  return (
    <section className="section">
      <h2 className="section-title">
        <span className="prompt">$</span> whoami<span className="cursor" />
      </h2>
      <p className="about-summary">{profile.summary}</p>

      <div className="about-block">
        <p className="code-line">
          <span className="kw">const</span> <span className="var">contact</span> = {'{'}
        </p>
        <p className="code-line indent">
          email: <a className="str" href={`mailto:${profile.email}`}>"{profile.email}"</a>,
        </p>
        <p className="code-line indent">
          linkedin: <a className="str" href={profile.linkedin} target="_blank" rel="noreferrer">"{profile.linkedin.replace('https://www.', '')}"</a>,
        </p>
        <p className="code-line indent">
          location: <span className="str">"{profile.location}"</span>,
        </p>
        <p className="code-line">{'}'}</p>
      </div>

      <div className="about-stats">
        <div className="stat">
          <span className="stat-value">10+</span>
          <span className="stat-label">years experience</span>
        </div>
        <div className="stat">
          <span className="stat-value">4</span>
          <span className="stat-label">companies</span>
        </div>
        <div className="stat">
          <span className="stat-value">10+</span>
          <span className="stat-label">projects shipped</span>
        </div>
      </div>
    </section>
  )
}
