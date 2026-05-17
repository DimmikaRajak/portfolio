import './Badge.css'

export default function Badge({ 
  content, 
  type = 'default', 
  position = 'static',
  icon = null,
  children 
}) {
  const badgeClass = `badge badge-${type} badge-pos-${position}`

  return (
    <div className={badgeClass}>
      {icon && <span className="badge-icon">{icon}</span>}
      <div className="badge-content">
        {children || content}
      </div>
    </div>
  )
}
