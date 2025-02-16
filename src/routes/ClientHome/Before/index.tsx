import "./styles.css";
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
            </div>
          </div>
        </section>
        
      </main>
      <Outlet />
    </>
  );
}
