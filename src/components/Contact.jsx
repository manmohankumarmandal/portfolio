import { useState } from 'react'
import { FiSend, FiMail, FiPhone, FiMapPin, FiLinkedin } from 'react-icons/fi'

const info = [
  { icon: FiMail, text: 'manmohankumarmandal5@gmail.com' },
  { icon: FiPhone, text: '+91 95089 57893' },
  { icon: FiMapPin, text: 'India' },
  { icon: FiLinkedin, text: 'linkedin.com/in/manmohan-kumar-mandal-677b57281' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Thanks ${form.name || 'there'}! Your message has been recorded.`)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact">
      <h2 className="section-title">Contact Me</h2>
      <div className="contact-layout">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-field">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-field">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="form-field">
            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            <FiSend />
            Send Message
          </button>
        </form>

        <div className="contact-info">
          {info.map(({ icon: Icon, text }) => (
            <div key={text} className="contact-item">
              <span className="icon">
                <Icon />
              </span>
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
