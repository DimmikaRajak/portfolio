import SectionHeader from '../components/SectionHeader'
import StatPill from '../components/StatPill'
import './About.css'

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-grid grid-2">
          <div className="about-quote">
            <p className="quote-text">
              "I don't just write code — I craft <em>experiences</em> that feel right."
            </p>
          </div>

          <div className="about-stats">
            <StatPill value="15" label="Projects built & shipped" type="primary" />
            <StatPill value="3" label="Internships completed" type="purple" />
            <StatPill value="20" label="Certifications earned" type="amber" />
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="about-journey">
        <SectionHeader 
          eyebrow="About Me"
          heading="My <em>Journey</em>"
        />

        <div className="journey-content">
          <p>
            Hi! I'm a passionate developer from Indore, India, with a deep love for building clean, 
            beautiful interfaces. What started as curiosity about how websites work has blossomed into 
            a genuine passion for crafting digital experiences that are both functional and delightful.
          </p>

          <p>
            Over the past 2+ years, I've completed 3 internships where I worked with modern tech stacks 
            including React, Node.js, MongoDB, and Tailwind CSS. I've built 15+ projects ranging from 
            static landing pages to complex full-stack applications. Each project has been a learning 
            opportunity, teaching me not just to code, but to think like a designer and problem-solver.
          </p>

          <p>
            Recently, I've expanded my horizons beyond web development. I'm actively learning Python 
            and diving deep into AI/ML concepts. Rather than viewing this as a distraction, I see it as 
            a strength — the ability to adapt, learn, and grow. These skills will enable me to build 
            smarter, more intelligent applications in the future.
          </p>

          <p>
            Beyond code, I'm driven by curiosity. I love exploring new technologies, contributing to 
            the developer community, and mentoring others who are starting their coding journey. 
            I believe in continuous learning and pushing boundaries.
          </p>
        </div>
      </section>

      {/* Highlights */}
      <section className="about-highlights">
        <div className="highlights-grid grid-3">
          <div className="highlight-card">
            <h4>💻 Frontend Specialist</h4>
            <p>Expert in React, responsive design, and modern CSS. I create interfaces that are both beautiful and intuitive.</p>
          </div>

          <div className="highlight-card">
            <h4>🔗 Full Stack Capable</h4>
            <p>Comfortable with Node.js, Express, and MongoDB. I can build complete applications from database to UI.</p>
          </div>

          <div className="highlight-card">
            <h4>🤖 AI/ML Learner</h4>
            <p>Currently exploring Python and data science. Excited about combining AI with web development.</p>
          </div>
        </div>
      </section>
    </>
  )
}
