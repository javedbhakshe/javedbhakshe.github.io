import { skills } from '../data/resume.js'

export default function Skills() {
  return (
    <section className="section">
      <h2 className="section-title">
        <span className="prompt">$</span> ls ./skills<span className="cursor" />
      </h2>
      <div className="skills-grid">
        {skills.map((group) => (
          <div className="skill-card" key={group.category}>
            <h3 className="skill-category">
              <span className="prompt">#</span> {group.category.toLowerCase().replace(/ /g, '_')}
            </h3>
            <ul className="skill-tags">
              {group.items.map((item) => (
                <li className="tag" key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
