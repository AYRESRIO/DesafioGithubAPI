import { Link } from "react-router-dom";
import Button from "../../../components/Button";
import "./styles.css";

export default function Home() {
  return (
    <>
      <main>
        <div >
          <section id="dga-home-section">
            <div className="dga-title-home">
              <h1>Desafio Github API</h1>
            </div>
            <div className="dga-escola">
              <h3>DevSuperior - Escola de programação</h3>
            </div>
          </section>
        </div>
        <div>
          <Link to="/before">
            <Button name="Começar" />
          </Link>
        </div>
      </main>
    </>
  );
}
