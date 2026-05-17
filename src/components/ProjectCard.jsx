import './ProjectCard.css'

export default function ProjectCard({ 
  title, 
  description,
  tech = [],
  gradient = 'linear-gradient(135deg, #C4607A, #F0CCDA)',
  type = 'frontend',
  isLive = false,
  isLearning = false,
  liveUrl = '#',
  githubUrl = '#'
}) {
  return (
    <div className="project-card">
      <div className="project-thumbnail" style={{ background: gradient }}>
        {isLive && <span className="live-badge">● Live</span>}
        <div className="project-type-badge">{type}</div>
      </div>

      <div className="project-body">
        <h4 className="project-title">{title}</h4>
        <p className="project-description">{description}</p>

        <div className="project-tags">
          {tech.map((t, idx) => (
            <span key={idx} className={`tag ${isLearning ? 'tag-amber' : 'tag-purple'}`}>
              {t}
            </span>
          ))}
        </div>

        <div className="project-actions">
          <a href={liveUrl} className="btn btn-outline btn-sm">
            View Live
            <i className="ti ti-external-link"></i>
          </a>
          <a href={githubUrl} className="btn btn-outline btn-sm">
            <i className="ti ti-brand-github"></i>
            GitHub
          </a>
        </div>
      </div>
    </div>
  )
}
