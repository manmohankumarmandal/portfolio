import { FiExternalLink } from 'react-icons/fi'
import CodeHub from "../assets/CodeHub.webp";
import FoodDelivery from "../assets/food-delivery.webp";
import VideoConference from "../assets/Videoconferencing.jpg";
import WeatherDashboard from "../assets/Weather.jpg";
const projects = [
  {
    title: 'CodeHub-Developers Collaboration Platform',
    description:
      'CodeHub is a version control and collaboration platform used to host code repositories, track changes, manage projects, and work with teams efficiently.',
    image:CodeHub,
    link: '#',
  },
  {
    title: 'Food delivery website',
    description:
      'A MERN stack-based food ordering platform that allows users to browse menus, add items to the cart, place orders, and track order status with secure authentication.',
    image:FoodDelivery,
    link: '#',
  },
  {
    title: 'Video Conferencing website',
    description:
      'Built a real-time video conferencing web application using the MERN stack, WebRTC, and Socket.IO. Implemented secure user authentication, video/audio calling, chat messaging, and meeting room management for seamless online communication.',
    image:VideoConference,
    link: '#',
  },
  {
    title: 'Weather Dashboard',
    description:
      'Clean weather UI with location search, forecasts, and responsive charts.',
    image:WeatherDashboard,
    link: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects">
      <div className="section-header">
        <h2 className="section-title">Projects</h2>
        <a href="#projects" className="view-all">
          View All
        </a>
      </div>
      <div className="projects-list">
        {projects.map((project) => (
          <article key={project.title} className="project-card">
            <img
              src={project.image}
              alt={project.title}
              className="project-thumb"
            />
            <div className="project-body">
              <div className="project-top">
                <h3 className="project-title">{project.title}</h3>
                <a
                  href={project.link}
                  className="project-link"
                  aria-label={`Open ${project.title}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiExternalLink />
                </a>
              </div>
              <p className="project-desc">{project.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
