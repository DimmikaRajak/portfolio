import { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [status, setStatus] = useState('idle') // idle | sending | sent | error | copied

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setStatus('error')
      return
    }

    if (!isValidEmail(formData.email)) {
      setStatus('error')
      return
    }

    setStatus('sending')

    const EMAILJS_SERVICE = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const EMAILJS_TEMPLATE = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    const payload = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
    }

    if (EMAILJS_SERVICE && EMAILJS_TEMPLATE && EMAILJS_PUBLIC_KEY) {
      try {
        const emailjsModule = await import('@emailjs/browser')
        const emailjs = emailjsModule.default || emailjsModule
        if (typeof emailjs.send === 'function') {
          await emailjs.send(EMAILJS_SERVICE, EMAILJS_TEMPLATE, payload, EMAILJS_PUBLIC_KEY)

          setStatus('sent')
          setFormData({ name: '', email: '', subject: '', message: '' })
          return
        }
      } catch (err) {
        console.warn('EmailJS send failed:', err)
      }
    }

    try {
      const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`)
      const body = encodeURIComponent(`${formData.subject}\n\n${formData.message}\n\nFrom: ${formData.email}`)
      const mailto = `mailto:rajakdimika@gmail.com?subject=${subject}&body=${body}`
      window.location.href = mailto
      setStatus('sent')
      setFormData({ name: '', email: '', subject: '', message: '' })
      return
    } catch (err) {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText('rajakdimika@gmail.com')
        setStatus('copied')
      } else {
        setStatus('error')
      }
    }
  }

  return (
    <>
      <section className="contact-hero">
        <div className="contact-header">
          <h1>
            Let's build something <em>beautiful</em> together
          </h1>
          <p>
            I'm always interested in hearing about new projects and opportunities. 
            Feel free to reach out if you'd like to collaborate!
          </p>
        </div>
      </section>

      <section className="contact-content">
        <div className="contact-grid grid-2">
          {/* Contact Form */}
          <div className="contact-form-wrapper">
            <h3>Send a message</h3>
            <form onSubmit={handleSubmit} className="contact-form" noValidate>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Project inquiry, collaboration, etc."
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button type="submit" className="btn btn-gradient btn-full" disabled={status === 'sending'}>
                {status === 'sending' ? 'Opening mail...' : 'Send Message'}
                <i className="ti ti-send"></i>
              </button>

              <div className="form-status" aria-live="polite">
                {status === 'sent' && <p className="status-success">Mail client opened. Complete the email to send.</p>}
                {status === 'copied' && <p className="status-info">Couldn\'t open mailer — email address copied to clipboard.</p>}
                {status === 'error' && <p className="status-error">Please complete all fields with a valid email.</p>}
              </div>
            </form>
          </div>

          {/* Contact Links */}
          <div className="contact-links-wrapper">
            <h3>Find me here</h3>
            <div className="contact-links">
              <a href="mailto:her@email.com" className="contact-link">
                <i className="ti ti-mail"></i>
                <div>
                  <p className="contact-label">Email</p>
                  <p className="contact-value">rajakdimika@gmail.com</p>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/dimmika-rajak-6b20792b8/" target="_blank" rel="noopener noreferrer" className="contact-link">
                <i className="ti ti-brand-linkedin"></i>
                <div>
                  <p className="contact-label">LinkedIn</p>
                  <p className="contact-value">Dimmika Rajak</p>
                </div>
              </a>

              <a href="https://github.com/dimmika-rajak" target="_blank" rel="noopener noreferrer" className="contact-link">
                <i className="ti ti-brand-github"></i>
                <div>
                  <p className="contact-label">GitHub</p>
                  <p className="contact-value">dimmika-rajak</p>
                </div>
              </a>

              <a href="/resume.pdf" className="contact-link">
                <i className="ti ti-file-cv"></i>
                <div>
                  <p className="contact-label">Resume</p>
                  <p className="contact-value">Download CV</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-quote">
        <p className="quote">
          "Good code is its own best documentation."
        </p>
      </section>
    </>
  )
}
