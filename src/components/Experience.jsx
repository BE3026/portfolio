import "./Experience.css";

function Experience() {
  const experiences = [
    {
      company: "Tata Consultancy Services",
      role: "Software Engineer",
      duration: "Nov 2024 - Present",
      description:
        "Working on enterprise banking applications using Angular, JavaScript and Node.js. Developing new features, fixing production issues, integrating REST APIs and collaborating with cross-functional teams."
    },
    {
      company: "Nokia",
      role: "Software Engineering Intern",
      duration: "2024",
      description:
        "Worked on frontend development and gained practical experience in web technologies, debugging and software development practices."
    }
  ];

  return (
    <section className="experience" id="experience">
      <h2 className="section-title">Experience</h2>

      <div className="timeline">

        {experiences.map((exp, index) => (
          <div className="timeline-item" key={index}>

            <div className="timeline-dot"></div>

            <div className="timeline-card">

              <h3>{exp.role}</h3>

              <h4>{exp.company}</h4>

              <span>{exp.duration}</span>

              <p>{exp.description}</p>

            </div>

          </div>
        ))}

      </div>
    </section>
  );
}

export default Experience;