import "./Skills.css";

function Skills() {
  const skills = [
    { name: "React", level: 90 },
    { name: "Angular", level: 95 },
    { name: "JavaScript", level: 90 },
    { name: "Node.js", level: 80 },
    { name: "HTML", level: 95 },
    { name: "CSS", level: 90 },
    { name: "SCSS", level: 90 },
    { name: "Git", level: 85 }
  ];

  return (
    <section id="skills" className="skills">
      <h2 className="section-title">My Skills</h2>

      <div className="skills-grid">
        {skills.map((skill) => (
          <div className="skill-card" key={skill.name}>
            <div className="skill-header">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>

            <div className="progress-bar">
              <div
                className="progress"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;