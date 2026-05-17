import './TimelineItem.css'

export default function TimelineItem({ 
  company, 
  role, 
  duration,
  description = [],
  tech = []
}) {
  return (
    <div className="timeline-item">
      <div className="timeline-dot"></div>
      
      <div className="timeline-card card">
        <h4 className="timeline-company">{company}</h4>
        <p className="timeline-role">{role}</p>
        <p className="timeline-duration">{duration}</p>

        {description.length > 0 && (
          <ul className="timeline-description">
            {description.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        )}

        {tech.length > 0 && (
          <div className="timeline-tags">
            {tech.map((t, idx) => (
              <span key={idx} className="tech-tag">{t}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
