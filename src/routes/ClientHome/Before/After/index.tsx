import { useEffect, useState } from "react";
import { UserDTO } from "../../../../models/user";
import axios from "axios";
import Data from "../Data";

export default function After() {
  //const params = useParams();
  const [perfil, setPerfil] = useState<UserDTO>();
  useEffect(() => {
    axios.get("https://api.github.com/users/acenelio").then((response) => {
      setPerfil(response.data);
    });
  }, []);

  return perfil && <Data perfil={perfil} />;
}
