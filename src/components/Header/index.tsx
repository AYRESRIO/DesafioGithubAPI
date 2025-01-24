import { Link } from "react-router-dom";
import "./styles.css";

export default function Header() {
  return (
    <header>
      <nav>
        <Link to="/">
          <h1 className="dga-container">Github API</h1>
        </Link>
      </nav>
    </header>
  );
}
