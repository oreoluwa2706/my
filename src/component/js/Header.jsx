import "../css/header/header.css";
import githublogo from "../../assets/images/githublogo.png";
import linkedlogo from "../../assets/images/linkedin logo.png";
const Header = () => {
  return (
    <div>
      <div className="flex">
        <div>
          <nav className="nav-header">
            <a
              className="a1"
              href="/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Home
            </a>
            <a href="/About" target="_blank" rel="noopener noreferrer">
              About
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              Skills
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              Projects
            </a>
          </nav>
        </div>
        <div>
          <nav className="nav2">
            <a
              className="a2"
              href="https://github.com/oreoluwa2706"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="img-g" src={githublogo} alt="" />
            </a>
            <br />

            <a
              className="a2"
              href="https://linkedin.com/in/oreoluwaolaniyi7"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="img-linkedin"
                href="linkedin.com/in/oreoluwaolaniyi7"
                src={linkedlogo}
              />
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
