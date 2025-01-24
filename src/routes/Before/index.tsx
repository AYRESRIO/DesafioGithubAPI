import "./styles.css";
import Header from "../../components/Header";
import Button from "../../components/Button";
import SearchBar from "../../components/SearchBar";

export default function Before() {
  return (
    <>
      <Header />
      <main className="dga-before-space" >
        <div className="dga-before-container">
            <div >
              <h1>Encontre um perfil Github</h1>
            </div>
            <div className="dga-search-bar-container">
                <SearchBar/>
            </div>
            <div className="dga-before-button-tab">
                <Button name="Encontrar"/>
            </div>
        </div>
      </main>
    </>
  );
}
