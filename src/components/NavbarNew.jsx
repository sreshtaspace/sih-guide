import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        SIH<span>Guide</span>
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/stories">Success Stories</Link>
        <Link to="/ask">Ask Guidance</Link>
        <Link to="/resources">Resources</Link>
        <Link to="/mentors">Mentors</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
}