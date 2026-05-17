import { useState } from 'react'
import SectionHeader from '../components/SectionHeader'
import ProjectCard from '../components/ProjectCard'
import './Portfolio.css'

export default function Portfolio() {
  const [filter, setFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'Fashion E-Commerce Platform',
      description: 'A fully responsive e-commerce platform with product filtering, cart management, and Stripe payment integration.',
      tech: ['React', 'Tailwind CSS', 'JavaScript'],
      type: 'frontend',
      gradient: 'linear-gradient(135deg, #C4607A, #F0CCDA)',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com'
    },
    {
      id: 2,
      title: 'MERN Task Management App',
      description: 'Full-stack task management application with real-time updates, user authentication, and MongoDB backend.',
      tech: ['React', 'Node.js', 'MongoDB', 'Express'],
      type: 'full-stack',
      gradient: 'linear-gradient(135deg, #9B4F8A, #D4A5D4)',
      isLive: true,
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com'
    },
    {
      id: 3,
      title: 'AI Image Caption Generator',
      description: 'Python-based AI model that generates descriptive captions for images using deep learning. Educational project.',
      tech: ['Python', 'TensorFlow', 'OpenCV'],
      type: 'ai-ml',
      isLearning: true,
      gradient: 'linear-gradient(135deg, #FFF5E0, #F5D88A)',
      liveUrl: '#',
      githubUrl: 'https://github.com'
    },
    {
      id: 4,
      title: 'Personal Blog Platform',
      description: 'Feature-rich blogging platform with markdown support, comments, and SEO optimization. Built with modern stack.',
      tech: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
      type: 'full-stack',
      gradient: 'linear-gradient(135deg, #166534, #86EFAC)',
      isLive: true,
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com'
    },
    {
      id: 5,
      title: 'Weather Dashboard',
      description: 'Interactive weather application with real-time data, multiple locations, and beautiful visualizations.',
      tech: ['React', 'APIs', 'CSS Animations'],
      type: 'frontend',
      gradient: 'linear-gradient(135deg, #87CEEB, #E0F6FF)',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com'
    },
    {
      id: 6,
      title: 'Data Science Analytics Dashboard',
      description: 'Interactive dashboard for data visualization and analysis. Demonstrates Python data science capabilities.',
      tech: ['Python', 'Pandas', 'Plotly'],
      type: 'ai-ml',
      isLearning: true,
      gradient: 'linear-gradient(135deg, #8B5A00, #FFE8B6)',
      liveUrl: '#',
      githubUrl: 'https://github.com'
    }
  ]

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.type === filter)

  return (
    <>
      <section className="portfolio-section">
        <SectionHeader 
          eyebrow="Selected work"
          heading="Projects with <em>purpose</em>"
        />

        {/* Filter Tabs */}
        <div className="filter-tabs">
          {['all', 'frontend', 'full-stack', 'ai-ml'].map(tab => (
            <button 
              key={tab}
              className={`filter-tab ${filter === tab ? 'active' : ''}`}
              onClick={() => setFilter(tab)}
            >
              {tab === 'all' && 'All'}
              {tab === 'frontend' && 'Frontend'}
              {tab === 'full-stack' && 'Full Stack'}
              {tab === 'ai-ml' && 'AI/ML'}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid grid-2">
          {filteredProjects.map(project => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              tech={project.tech}
              type={project.type}
              gradient={project.gradient}
              isLive={project.isLive}
              isLearning={project.isLearning}
              liveUrl={project.liveUrl}
              githubUrl={project.githubUrl}
            />
          ))}
        </div>
      </section>
    </>
  )
}
