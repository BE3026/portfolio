import "./Navbar.css";
import resume from "../assets/Resume.pdf";
function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">
        Bharath<span>.</span>
      </div>

      <nav>
        <ul className="nav-links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      <button
        className="resume-btn"
        onClick={() => {
          const link = document.createElement("a");
          link.href = resume;
          link.download = "Bharath_Eswar_Resume.pdf";
          link.click();
        }}
      >
        Resume
      </button>
    </header>
  );
}

export default Navbar;
