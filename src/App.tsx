import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import ClientHome from "./routes/ClientHome";
import Home from "./routes/ClientHome/Home";
import Before from "./routes/ClientHome/Before";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ClientHome />}>
          <Route index element={<Home />}></Route>
          <Route path="home" element={<Home />}></Route>
          <Route path="before" element={<Before />}></Route>
          <Route path="*" element={<Navigate to="/" />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
