import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from 'react-icons/fa'
import { SiExpress, SiMongodb } from 'react-icons/si'

const skills = [
  { name: 'HTML5', icon: FaHtml5, color: '#E34F26' },
  { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6' },
  { name: 'JavaScript', icon: FaJs, color: '#F7DF1E' },
  { name: 'React', icon: FaReact, color: '#61DAFB' },
  { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
  { name: 'Express', icon: SiExpress, color: '#ffffff' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  { name: 'Git', icon: FaGitAlt, color: '#F05032' },
]

export default function Skills() {
  return (
    <section id="skills">
      <h2 className="section-title">Skills</h2>
      <div className="skills-grid">
        {skills.map(({ name, icon: Icon, color }) => (
          <div key={name} className="skill-card">
            <Icon className="skill-icon" style={{ color }} />
            <span>{name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
