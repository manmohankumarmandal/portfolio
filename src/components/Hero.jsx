import { FaGithub, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";

const socials = [
  { icon: FaGithub, href: "https://github.com", label: "GitHub" },
  { icon: FaLinkedinIn, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: FaTwitter, href: "https://twitter.com", label: "Twitter" },
  { icon: FaInstagram, href: "https://instagram.com", label: "Instagram" },
];

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-grid">
        <div className="hero-content">
          <p className="hero-greeting">Hello, I&apos;m</p>
          <h1 className="hero-name gradient-text">Manmohan Kumar</h1>
          <h2 className="hero-role">Full Stack Developer</h2>
          <p className="hero-bio">
            I build modern, responsive web applications with clean code and
            thoughtful UX. Passionate about turning ideas into polished digital
            products using the MERN stack and beyond.
          </p>

          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">
              Hire Me
            </a>
            <a
              href="/manmohan_resume.pdf"
              className="btn btn-outline"
              download
            >
              <FiDownload />
              Download CV
            </a>
          </div>

          <div className="hero-social">
            <span>Follow Me</span>
            <div className="social-icons">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-glow" aria-hidden="true" />
          <div className="hero-ring" aria-hidden="true" />
          <div className="float-card code" aria-hidden="true">
            {"</>"}
          </div>
          <div className="float-card braces" aria-hidden="true">
            {"{}"}
          </div>
          <div className="dot-grid" aria-hidden="true" />
          <div className="hero-photo-wrap">
            <img
              className="hero-photo"
              src="src/assets/manmohan.png"
              alt="Manmohan Kumar"
              onError={(e) => {
                e.currentTarget.style.display = "none";
                e.currentTarget.nextSibling.style.display = "flex";
              }}
            />
            <div className="hero-photo-fallback" style={{ display: "none" }}>
              MK
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
