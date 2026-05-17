import { useEffect, useRef, useState } from 'react'
import './StatPill.css'

export default function StatPill({ value, label, type = 'primary' }) {
  const [count, setCount] = useState(0)
  const counterRef = useRef(null)

  useEffect(() => {
    const numValue = parseInt(value)
    if (isNaN(numValue)) {
      setCount(value)
      return
    }

    let start = 0
    const end = numValue
    const duration = 2000
    const increment = end / (duration / 16)

    const interval = setInterval(() => {
      start += increment
      if (start >= end) {
        setCount(end)
        clearInterval(interval)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)

    return () => clearInterval(interval)
  }, [value])

  return (
    <div className={`stat-pill stat-pill-${type}`}>
      <div className="stat-number">{count}{typeof value === 'string' && value.includes('+') ? '+' : ''}</div>
      <div className="stat-label">{label}</div>
    </div>
  )
}
