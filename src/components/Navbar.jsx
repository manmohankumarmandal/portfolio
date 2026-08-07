import { useState, useEffect } from 'react'
import { FiDownload, FiMenu, FiX } from 'react-icons/fi'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('Home')

  useEffect(() => {
    const onScroll = () => {
      const sections = links.map((l) => l.href.slice(1))
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 120) {
          const link = links.find((l) => l.href === `#${id}`)
          if (link) setActive(link.label)
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="navbar">
      <div className="container nav-inner">
        <a href="#home" className="logo">
          Portfolio<span>.</span>
        </a>

        <nav className={`nav-links ${open ? 'open' : ''}`}>
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={active === link.label ? 'active' : ''}
              onClick={() => {
                setActive(link.label)
                setOpen(false)
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a href="/Manmohan_Kumar_CV.pdf" className="btn btn-primary nav-cv" download>
          <FiDownload />
          Download CV
        </a>

        <button
          className="nav-toggle"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>
    </header>
  )
}
