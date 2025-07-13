import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" aria-label="Projects">
        <img
          src={`${import.meta.env.BASE_URL}botaoHome-black.png`}
          alt=""
          className="nav-icon"
        />
      </Link>
      <Link to="/projects" aria-label="Projects">
        <img
          src={`${import.meta.env.BASE_URL}botaoProjects-black.png`}
          alt=""
          className="nav-icon"
        />
      </Link>
    </nav>
  );
}
