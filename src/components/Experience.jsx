const experiences = [
  {
    title: 'Java Programming Intern  ',
    company: 'Tech builder',
    date: 'March 2025 – June 2025',
    duties: [
      'Developed applications using Core Java, applying Object-Oriented Programming concepts and exception handling.',
      'Worked with Java 8 features, including Lambda Expressions, Stream API, Functional Interfaces, and the Date & Time API. ',
      'Wrote clean, maintainable, and efficient Java code by following best practices. ',
      'Used Git for version control and GitHub for source code management and team collaboration.',
    ],
  },
  
]

export default function Experience() {
  return (
    <section id="experience">
      <h2 className="section-title">Experience</h2>
      <div className="timeline">
        {experiences.map((job) => (
          <article key={job.title} className="timeline-item">
            <h3 className="job-title">{job.title}</h3>
            <div className="job-meta">
              <span className="job-company">{job.company}</span>
              <span className="job-date">{job.date}</span>
            </div>
            <ul className="job-duties">
              {job.duties.map((duty) => (
                <li key={duty}>{duty}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
