import { profile } from "../data/resume.js";

const NAV = [
  { id: "about", label: "about" },
  { id: "skills", label: "skills" },
  { id: "experience", label: "experience" },
  { id: "education", label: "education" },
];

export default function Sidebar({ section, onNavigate, theme, onToggleTheme }) {
  return (
    <aside className="sidebar">
      <div>
        <div className="sidebar-avatar" aria-hidden="true">
          {profile.name
            .split(" ")
            .map((w) => w[0])
            .join("")
            .toLowerCase()}
        </div>
        <p className="sidebar-name">{profile.name}</p>
        <p className="sidebar-role">
          <span className="prompt">$</span>{" "}
          {profile.title.toLowerCase().replace(/ /g, "-")}
        </p>

        <nav className="sidebar-nav">
          {NAV.map((item) => (
            <button
              key={item.id}
              className={`nav-item${section === item.id ? " active" : ""}`}
              onClick={() => onNavigate(item.id)}
            >
              <span className="nav-prefix">
                {section === item.id ? ">" : " "}
              </span>
              cd ./{item.label}
            </button>
          ))}
        </nav>
      </div>

      <div className="sidebar-footer">
        <a className="sidebar-link" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>
        <a
          className="sidebar-link"
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
        >
          linkedin/javed-bhakshey
        </a>
        <a
          className="download-resume"
          href="/Javed_Bhakshey_Senior_Software_Developer.pdf"
          download="Javed_Bhakshey_Senior_Software_Developer.pdf"
        >
          [⇩ download_resume.pdf]
        </a>
        <button className="theme-toggle" onClick={onToggleTheme}>
          [{theme === "dark" ? "☀ light_mode" : "☾ dark_mode"}]
        </button>
      </div>
    </aside>
  );
}
