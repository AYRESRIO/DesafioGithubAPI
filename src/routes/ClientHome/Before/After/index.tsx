import { useEffect, useState } from "react";
import { UserDTO } from "../../../../models/user";
import axios from "axios";
import Data from "../Data";
import { useNavigate } from "react-router-dom";

export default function After() {
  //const params = useParams();
  const navigate = useNavigate();
  const [perfil, setPerfil] = useState<UserDTO>();
  useEffect(() => {
    axios
      .get("https://api.github.com/users/acenelio")
      .then((response) => {
        setPerfil(response.data);
      })
      .catch((error) => {
        console.log(error.response.data);
        navigate("*");
      });
  }, []);

  return perfil && <Data perfil={perfil} />;
}
