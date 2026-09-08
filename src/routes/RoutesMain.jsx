import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/home";
import Contato from "../pages/Contato/contato";
import Login from "../pages/Login/login";
import Sobre from "../pages/Sobre/sobre";

function RoutesMain() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sobre" element={<Sobre />} />
        </Routes>
    );
}

export default RoutesMain;
