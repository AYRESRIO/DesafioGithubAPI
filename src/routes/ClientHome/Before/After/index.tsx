

import { UserDTO } from "../../../../models/user";
import Data from "../Data";

const perfil: UserDTO = {
  id: 13897257,
  name: "Nelio Alves",
  imgUrl: "https://avatars.githubusercontent.com/u/13897257?v=4",
  url: "https://api.github.com/users/acenelio",
  followers: 12408,
  location: "Brazil",
};

//const users = getUsers();

//export default function After() {
  //return (
   // <>
   //  users.map(perfis  => <Data key={perfis.id} perfis={perfis}/>);

   // </>
  //);
 
//}

export default function After() {
  return (
    <>
     <Data perfil={perfil}/>
    
    </>
  );
 
}