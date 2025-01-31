import { BrowserRouter, Route, Routes } from "react-router-dom";
import ClientHome from "./routes/ClientHome";
import Home from "./routes/ClientHome/Home";
import Before from "./routes/ClientHome/Before";
import Data from "./routes/ClientHome/Before/Data";
import After from "./routes/ClientHome/Before/After";
import NotFound from "./routes/ClientHome/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ClientHome />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="before" element={<Before />}>
            <Route path="after/:userId" element={<After />} />
            <Route path="data" element={<Data />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
