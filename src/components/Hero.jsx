import "./Hero.css";
import profile from "../assets/Bharath-Image.jpg";
import resume from "../assets/Resume.pdf"
function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-left">
        <p className="intro">👋 Hello, I{"'"}m</p>

        <h1>
          Bharath <span>Eswar</span>
        </h1>

        <h2>Frontend Developer</h2>

        <p className="description">
          I build responsive, modern, and high-performance web applications
          using React, JavaScript, Angular, and Node.js. Passionate about
          creating beautiful user experiences.
        </p>

        <div className="hero-buttons">
          <button
            className="primary-btn"
            onClick={() =>
              document.getElementById("contact").scrollIntoView({
                behavior: "smooth",
              })
            }
          >
            Hire Me
          </button>

          <button
            className="secondary-btn"
            onClick={() => {
              const link = document.createElement("a");
              link.href = resume;
              link.download = "Bharath_Eswar_Resume.pdf";
              link.click();
            }}
          >
            Download Resume
          </button>
        </div>
      </div>

      <div className="hero-right">
        <div className="profile-circle">
          <img src={profile} alt="Profile" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
