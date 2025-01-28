import { BrowserRouter, Route, Routes } from "react-router-dom";
import ClientHome from "./routes/ClientHome";
import Home from "./routes/ClientHome/Home";
import Before from "./routes/ClientHome/Before";
import Data from "./routes/ClientHome/Data";
import After from "./routes/ClientHome/After";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ClientHome />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="before" element={<Before />} >
            <Route path="after" element={<After />} />
            <Route path="data" element={<Data />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
