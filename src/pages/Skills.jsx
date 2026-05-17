import SectionHeader from '../components/SectionHeader'
import SkillCard from '../components/SkillCard'
import './Skills.css'

export default function Skills() {
  const skills = [
    {
      icon: 'ti ti-brand-react',
      title: 'Frontend Development',
      skills: ['React', 'Tailwind', 'HTML', 'CSS', 'JavaScript']
    },
    {
      icon: 'ti ti-server',
      title: 'Backend Development',
      skills: ['Node.js', 'Express', 'MongoDB', 'REST APIs']
    },
    {
      icon: 'ti ti-layout',
      title: 'UI/UX Design',
      skills: ['Figma basics', 'Responsive design', 'Accessibility']
    },
    {
      icon: 'ti ti-git-branch',
      title: 'Development Tools',
      skills: ['Git', 'GitHub', 'VS Code', 'Postman']
    },
    {
      icon: 'ti ti-lock',
      title: 'Auth & APIs',
      skills: ['JWT', 'OAuth', 'REST', 'API design']
    },
    {
      icon: 'ti ti-brain',
      title: 'AI/ML ✦',
      skills: ['Python', 'Learning', 'Data Science basics'],
      isLearning: true
    }
  ]

  return (
    <>
      {/* Skills Section */}
      <section className="skills-section">
        <SectionHeader 
          eyebrow="Capabilities"
          heading="What I <em>bring</em> to every project"
        />

        <div className="skills-grid grid-3">
          {skills.map((skill, idx) => (
            <SkillCard 
              key={idx}
              icon={skill.icon}
              title={skill.title}
              skills={skill.skills}
              isLearning={skill.isLearning}
            />
          ))}
        </div>
      </section>

      {/* Learning Banner */}
      <section className="learning-banner">
        <div className="banner-content">
          <div className="banner-left">
            <i className="ti ti-sparkles"></i>
            <div>
              <h4>Currently on a learning journey</h4>
              <p>Actively building Python and ML skills alongside full stack work</p>
            </div>
          </div>
          <span className="banner-badge badge-amber">✦ In progress</span>
        </div>
      </section>

      {/* Certifications */}
      <section className="certifications-section">
        <SectionHeader 
          eyebrow="Credentials"
          heading="Certifications & <em>Achievements</em>"
        />

        <div className="certs-grid grid-3">
          <div className="cert-card">
            <div className="cert-icon">
              <i className="ti ti-cloud"></i>
            </div>
            <h4>Azure Fundamentals</h4>
            <p className="cert-issuer">Microsoft</p>
            <p className="cert-year">2024</p>
          </div>

          <div className="cert-card">
            <div className="cert-icon">
              <i className="ti ti-cloud"></i>
            </div>
            <h4>AWS Cloud Practitioner</h4>
            <p className="cert-issuer">Amazon Web Services</p>
            <p className="cert-year">2024</p>
          </div>

          <div className="cert-card">
            <div className="cert-icon">
              <i className="ti ti-code"></i>
            </div>
            <h4>Full Stack Web Development</h4>
            <p className="cert-issuer">IIT Bootcamp</p>
            <p className="cert-year">2024</p>
          </div>

          <div className="cert-card">
            <div className="cert-icon">
              <i className="ti ti-robot"></i>
            </div>
            <h4>AI/ML for Drones</h4>
            <p className="cert-issuer">IIT Indore + MeitY</p>
            <p className="cert-year">2024</p>
          </div>

          <div className="cert-card">
            <div className="cert-icon">
              <i className="ti ti-layout"></i>
            </div>
            <h4>Responsive Web Design</h4>
            <p className="cert-issuer">freeCodeCamp</p>
            <p className="cert-year">2023</p>
          </div>

          <div className="cert-card">
            <div className="cert-icon">
              <i className="ti ti-database"></i>
            </div>
            <h4>Database Design</h4>
            <p className="cert-issuer">Coursera</p>
            <p className="cert-year">2023</p>
          </div>
        </div>
      </section>
    </>
  )
}
