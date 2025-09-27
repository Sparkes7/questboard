import { Link } from "react-router";

export default function NavBar() {
  return (
    <div>
      <i>Manage:</i>
      <nav className="nav-bar">
        <Link to="/players" className="nav-link">
          Players
        </Link>
        <Link to="/quests" className="nav-link">
          Quests
        </Link>
      </nav>
    </div>
  );
}
