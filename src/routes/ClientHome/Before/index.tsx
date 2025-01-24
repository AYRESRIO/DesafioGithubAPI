import "./styles.css";
import Button from "../../../components/Button";
import SearchBar from "../../../components/SearchBar";
import { Link } from "react-router-dom";

export default function Before() {
  return (
    <>
      <main className="dga-before-space">
        <div className="dga-before-container">
          <div>
            <h1>Encontre um perfil Github</h1>
          </div>
          <div className="dga-search-bar-container">
            <SearchBar />
          </div>
          <div className="dga-before-button-tab">
            <Link to="https://api.github.com/users/acenelio">
              <Button name="Encontrar" />
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
