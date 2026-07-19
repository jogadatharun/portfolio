import { Link } from "react-scroll";
import { FaCode } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <FaCode />
        <span>Tharun</span>
      </div>

      <ul className="nav-links">
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>

        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>

        <li>
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>

        <li>
          <Link to="projects" smooth={true} duration={500}>
            Projects
          </Link>
        </li>

        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;