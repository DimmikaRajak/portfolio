import './PhotoCard.css'

export default function PhotoCard({ 
  photoUrl = '/her-photo.jpg',
  name = 'Her Name',
  role = 'Frontend Developer',
  badges = []
}) {
  return (
    <div className="photo-card-wrapper">
      <div className="photo-card">
        <img src={photoUrl} alt={name} />
        <div className="photo-overlay">
          <p className="photo-name">{name}</p>
          <p className="photo-role">{role}</p>
        </div>
      </div>

      {/* Floating Badges */}
      {badges.length > 0 && badges.map((badge, idx) => (
        <div key={idx} className={`floating-badge badge-pos-${badge.position}`}>
          {badge.type === 'available' && (
            <div className="badge badge-green">
              <span className="pulsing-dot"></span>
              <span>{badge.label}</span>
            </div>
          )}
          {badge.type === 'building' && (
            <div className="badge badge-pink">
              <div className="badge-content">
                <span className="badge-label">Currently Building</span>
                <span className="badge-value">{badge.label}</span>
              </div>
            </div>
          )}
          {badge.type === 'learning' && (
            <div className="badge badge-purple">
              <div className="badge-content">
                <span className="badge-label">Currently Learning</span>
                <span className="badge-value">{badge.label}</span>
              </div>
            </div>
          )}
          {badge.type === 'stack' && (
            <div className="badge badge-stack">
              {badge.label}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
