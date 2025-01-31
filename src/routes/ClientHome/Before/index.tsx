import "./styles.css";
import Button from "../../../components/Button";
import SearchBar from "../../../components/SearchBar";
import { Link, Outlet } from "react-router-dom";


export default function Before() {
  return (
    <>
      <main className="dga-before-space">
        <section>
          <div className="dga-before-container">
            <div>
              <h1>Encontre um perfil Github</h1>
            </div>
            <div className="dga-search-bar-container">
              <SearchBar />
            </div>
            <div className="dga-before-button-tab">
              <Link to="after/:userId">
                <Button name="Encontrar" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Outlet/>
    </>
  );
}
