export default function SectionHeader({ eyebrow, heading }) {
  return (
    <div className="section-header">
      {eyebrow && <div className="section-eyebrow">{eyebrow}</div>}
      <h2>{heading}</h2>
    </div>
  )
}
