import "./Projects.css";

import project1 from "../assets/banking-image.jpg";
import project2 from "../assets/blog-image.jpg";
import project3 from "../assets/emotion-image.jpg";

function Projects() {
  const projects = [
    {
      image: project1,
      title: "Banking Payment Integration",
      description:
        "Integrated payment gateway using Angular and Node.js with secure payment flow and REST APIs.",
      tech: "Angular • Node.js • REST API",
      github: "#",
      live: "https://yonoretail.sbi.bank.in/",
    },
    {
      image: project2,
      title: "React Blog Website",
      description:
        "A responsive blog application with reusable React components and clean UI.",
      tech: "React • CSS • JavaScript",
      github: "https://github.com/BE3026/Readit",
      live: "#",
    },
    {
      image: project3,
      title: "Emotion Detection Chatbot",
      description:
        "AI-based chatbot that detects emotions using computer vision and suggests suitable content.",
      tech: "Python • OpenCV • Streamlit",
      github:
        "https://github.com/BE3026/Human-Based-Consoling-and-Empathetic-Chatbot",
      live: "#",
    },
  ];

  return (
    <section className="projects" id="projects">
      <h2 className="section-title">Featured Projects</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} />

            <div className="project-content">
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <span>{project.tech}</span>

              <div className="project-buttons">
                {project.github !== "#" && <a href={project.github}>GitHub</a>}
                {project.live !== "#" && <a href={project.live}>Live Demo</a>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
