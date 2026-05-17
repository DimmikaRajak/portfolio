import { Link } from 'react-router-dom'
import PhotoCard from '../components/PhotoCard'
import './Home.css'

export default function Home() {
  const badges = [
    {
      position: 'top-right',
      type: 'available',
      label: 'Available to hire'
    },
    {
      position: 'left-top',
      type: 'building',
      label: 'AI Portfolio Platform'
    },
    {
      position: 'right-middle',
      type: 'learning',
      label: 'AI · Data Science'
    },
    {
      position: 'bottom',
      type: 'stack',
      label: 'React · Full Stack · AI'
    }
  ]

  return (
    <section className="hero">
      <div className="hero-grid">
        {/* Left Column */}
        <div className="hero-left">
          {/* Badge */}
          <div className="hero-badge" style={{ animationDelay: '0ms' }}>
            <span className="badge-dot"></span>
            <span>Frontend · Full Stack · AI/ML Learner</span>
          </div>

          {/* Heading */}
          <h1 style={{ animationDelay: '100ms' }} className="animate-fadeSlideIn">
            I build things that are <em>beautiful</em> and functional.
          </h1>

          {/* Subtext */}
          <p style={{ animationDelay: '200ms' }} className="hero-intro animate-fadeSlideIn">
            Hi! I'm <strong>Dimmika Rajak</strong>, a passionate full-stack developer based in Indore, India. 
            I love crafting beautiful, responsive web experiences with React and modern tools, 
            and I'm currently exploring AI/ML to bring intelligent features to my projects.
          </p>

          {/* CTAs */}
          <div className="hero-buttons" style={{ animationDelay: '300ms' }}>
            <Link to="/portfolio" className="btn btn-primary">
              View My Work
              <i className="ti ti-arrow-right"></i>
            </Link>
            <a href="/resume.pdf" className="btn btn-outline">
              <i className="ti ti-download"></i>
              Download CV
            </a>
          </div>

          {/* Tech Stack */}
          <div className="tech-stack" style={{ animationDelay: '400ms' }}>
            <span className="tech-tag">React</span>
            <span className="tech-tag">Node.js</span>
            <span className="tech-tag">MongoDB</span>
            <span className="tech-tag">Tailwind</span>
            <span className="tech-tag">Express</span>
            <span className="tech-tag-learning">✦ AI/ML — learning</span>
            <span className="tech-tag-learning">✦ Python — learning</span>
          </div>
        </div>

        {/* Right Column - Photo */}
        <div className="hero-right">
          <PhotoCard
            photoUrl="/dimmika.png"
            name="Dimmika Rajak"
            role="Frontend Developer · Full Stack"
            badges={badges}
          />
        </div>
      </div>
    </section>
  )
}
