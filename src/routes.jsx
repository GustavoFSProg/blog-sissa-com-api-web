import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Receitas from "./Pages/Receitas";
import PostRegister from "./Pages/PostRegister.jsx";
import PostProfile from "./Pages/PostProfile.jsx";

function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/receitas" element={<Receitas />} />
        <Route path="/post-register" element={<PostRegister />} />
        <Route path="/profile" element={<PostProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routers;
