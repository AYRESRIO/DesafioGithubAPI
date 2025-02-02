import { useEffect, useState } from "react";
import { UserDTO } from "../../../../models/user";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Data from "../Data";

export default function After( ) {
  const navigate = useNavigate();
  const [perfil, setPerfil] = useState<UserDTO>();
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const fullName = queryParams.get('fullName');
    if (fullName) {
      axios
        .get(fullName)
        .then((response) => {
          setPerfil(response.data);
        })
        .catch((error) => {
          console.log(error.response.data);
          navigate('*');
        });
    } else {
      navigate('*');
    }
  }, [location.search, navigate]);

  return perfil && <Data perfil={perfil} />;
}