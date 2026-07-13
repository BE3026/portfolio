import "./About.css";

function About() {
  return (
    <section id="about" className="about">

      <h2 className="section-title">About Me</h2>

      <div className="about-container">

        <div className="about-text">

          <h3>Who am I?</h3>

          <p>
            I'm Bharath Eswar, a Frontend Developer with experience in
            React, Angular, JavaScript, and Node.js.
          </p>

          <p>
            I enjoy building responsive and user-friendly web applications.
            I love learning new technologies and writing clean, maintainable
            code.
          </p>

          <p>
            Currently working on enterprise banking applications and
            continuously improving my frontend development skills.
          </p>

        </div>

        <div className="about-info">

          <div className="info-card">
            <h4>Experience</h4>
            <p>Software Engineer</p>
          </div>

          <div className="info-card">
            <h4>Location</h4>
            <p>Chennai, India</p>
          </div>

          <div className="info-card">
            <h4>Specialization</h4>
            <p>Frontend Development</p>
          </div>

          <div className="info-card">
            <h4>Tech Stack</h4>
            <p>React • Angular • Node.js</p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default About;