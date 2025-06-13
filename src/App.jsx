import { Routes, Route, Navigate } from "react-router-dom";
import './index.css';
import MENU from "./paginas/menu";
import BUSCADOR from "./paginas/buscador";

const App = () => {
  return (
    <div className="w-full h-full">
      <Routes>
        <Route path="/" element={<Navigate to="/menu" />} />
        <Route path="/menu" element={<MENU />} />
        <Route path="/buscador" element={<BUSCADOR />} />
      </Routes>
    </div>
  );
};

export default App;
