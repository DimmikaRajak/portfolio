import SectionHeader from '../components/SectionHeader'
import TimelineItem from '../components/TimelineItem'
import './Experience.css'

export default function Experience() {
  const experiences = [
    {
      company: 'Tech Startup Inc.',
      role: 'Frontend Developer Intern',
      duration: 'June 2023 - August 2023 (3 months)',
      description: [
        'Built responsive UI components using React and Tailwind CSS',
        'Collaborated with design team to implement pixel-perfect designs',
        'Optimized website performance, improving load time by 40%'
      ],
      tech: ['React', 'Tailwind CSS', 'JavaScript', 'GitHub']
    },
    {
      company: 'Digital Agency XYZ',
      role: 'Full Stack Web Developer Intern',
      duration: 'January 2024 - March 2024 (3 months)',
      description: [
        'Developed full-stack features using MERN stack',
        'Implemented user authentication with JWT',
        'Created MongoDB schemas and optimized queries'
      ],
      tech: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT']
    },
    {
      company: 'Innovation Labs',
      role: 'Web Development Intern',
      duration: 'May 2024 - July 2024 (3 months)',
      description: [
        'Developed web applications for internal tools',
        'Participated in code reviews and learned best practices',
        'Contributed to open-source projects'
      ],
      tech: ['React', 'REST APIs', 'Git', 'Agile']
    }
  ]

  const achievements = [
    {
      title: 'Best Excellence Award',
      category: 'Academic',
      issuer: 'Sage University 2024'
    },
    {
      title: '20+ Certifications',
      category: 'Professional',
      issuer: 'Azure, AWS, Full Stack, AI/ML'
    },
    {
      title: '3x Appreciated',
      category: 'Community',
      issuer: 'Community contributions'
    },
    {
      title: 'AI/ML for Drones',
      category: 'Bootcamp',
      issuer: 'IIT Indore + MeitY'
    }
  ]

  return (
    <>
      {/* Timeline Section */}
      <section className="experience-timeline">
        <SectionHeader 
          eyebrow="My Journey"
          heading="Where I've <em>grown</em>"
        />

        <div className="timeline">
          {experiences.map((exp, idx) => (
            <TimelineItem
              key={idx}
              company={exp.company}
              role={exp.role}
              duration={exp.duration}
              description={exp.description}
              tech={exp.tech}
            />
          ))}
        </div>
      </section>

      {/* Achievements Section */}
      <section className="achievements-section">
        <SectionHeader 
          eyebrow="Recognition"
          heading="Proof of <em>Work</em>"
        />

        <div className="achievements-grid grid-2">
          {achievements.map((achievement, idx) => (
            <div key={idx} className="achievement-card">
              <div className="achievement-number">{idx + 1}</div>
              <h4>{achievement.title}</h4>
              <p className="achievement-category">{achievement.category}</p>
              <p className="achievement-issuer">{achievement.issuer}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
