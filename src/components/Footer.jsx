import "./Footer.css";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">

      <div className="footer-content">

        <h2>Bharath Eswar</h2>

        <p>
          Frontend Developer | React | Angular | Node.js
        </p>

        <div className="social-links">

          <a
            href="https://github.com/BE3026"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/bharath-eswar-a-a34ba6204/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a href="mailto:bharatheswar20112001@gmail.com">
            Email
          </a>

        </div>

        <hr />

        <p className="copyright">
          © {year} Bharath Eswar. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;