import Button from "../../components/Button";
import Header from "../../components/Header";
import "./styles.css";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <div className="dga-container">
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
          <Button name="Começar" />
        </div>
      </main>
    </>
  );
}
