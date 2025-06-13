import { Link, useLocation } from "react-router-dom";

const NAVBAR = () => {
  const location = useLocation();
  const estaActivo = (path) => location.pathname === path ? "text-blue-600 font-bold" : "text-gray-700";
  return (
    <nav className="bg-gray-100 p-1 flex shadow-md mb-6 w-full justify-between items-center">
      <Link to="/menu" className={`px-3 py-2 rounded hover:bg-gray-200 ${estaActivo("/menu")} w-1/2`}>
        Menú
      </Link>
      <Link to="/buscador" className={`px-3 py-2 rounded hover:bg-gray-200 ${estaActivo("/buscador")} w-1/2`}>
        Buscador CVEs
      </Link>
    </nav>
  );
};

export default NAVBAR;
