import { BrowserRouter, Route, Routes } from "react-router-dom";
import ClientHome from "./routes/ClientHome";
import Home from "./routes/ClientHome/Home";
import Before from "./routes/ClientHome/Before";
import After from "./routes/ClientHome/After";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ClientHome />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="before" element={<Before />} />
          <Route path="after" element={<After perfil={{
            id: 13897257,
            name: "Nelio Alves",
            imgUrl: "https://avatars.githubusercontent.com/u/13897257?v=4",
            url: "https://api.github.com/users/acenelio",
            followers: 12408,
            location: "Brazil"
          }}/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
