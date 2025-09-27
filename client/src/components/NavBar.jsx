import { Link } from "react-router";

export default function NavBar() {
  return (
    <section className="navigation">
      <i>Choose what you would like to manage:</i>
      <nav className="nav-bar list-container">
        <Link to="/players" className="nav-link list-item">
          Characters
        </Link>
        <Link to="/quests" className="nav-link list-item">
          Quests
        </Link>
      </nav>
    </section>
  );
}
