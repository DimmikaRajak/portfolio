import './SkillCard.css'

export default function SkillCard({ 
  icon, 
  title, 
  skills = [],
  isLearning = false 
}) {
  return (
    <div className={`skill-card ${isLearning ? 'skill-card-learning' : ''}`}>
      <div className="skill-icon">
        <i className={icon}></i>
      </div>
      <h4 className="skill-title">{title}</h4>
      <div className="skill-list">
        {skills.map((skill, idx) => (
          <span key={idx} className="skill-tag">
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}
