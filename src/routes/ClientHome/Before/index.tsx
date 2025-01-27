import "./styles.css";
import Button from "../../../components/Button";
import SearchBar from "../../../components/SearchBar";
import { Link } from "react-router-dom";
import After from "../After";
import { userDTO } from "../../../models/user";

const perfil: userDTO = {
  id: 13897257,
  name: "Nelio Alves",
  imgUrl: "https://avatars.githubusercontent.com/u/13897257?v=4",
  url: "https://api.github.com/users/acenelio",
  followers: 12408,
  location: "Brazil",
};


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
              <Link to="/after">
                <Button name="Encontrar" />
              </Link>
            </div>
          </div>
        </section>
      </main>
  
    </>
  );
  <After perfil={perfil}/>
  
}
