import { userDTO } from "../../../models/user";
import Before from "../Before";
import "./styles.css";

type Props = { perfil: userDTO };

export default function After({ perfil }: Props) {
  return (
    <>
      <main>
        <Before />
        <section id="dga-after-section-container">
          <div className="dga-foto-dados">
            <div className="dga-result">
              <div className="dga-total-img">
                <img src={perfil.imgUrl} alt={perfil.name} />
              </div>
              <div className="dga-total-rectangle">
                <div>
                  <h1>Informações</h1>
                  <div>
                    <div>
                      <h2>Perfil:{perfil.url}</h2>
                    </div>
                    <div>
                      <h2>Seguidores:{perfil.followers}</h2>
                    </div>
                    <div>
                      <h2>Localidade:{perfil.location}</h2>
                    </div>
                    <div>
                      <h2>Nome:{perfil.name}</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
